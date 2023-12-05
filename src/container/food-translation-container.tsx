import React, {useState, useCallback, memo, useEffect} from 'react';
import {FoodSlicer} from '../component/molecule';
import {screenHeight, screenWidth} from '../consts';
import {randomInt} from '../helper';
import {gameOverAtom, openGameMenuAtom, playerLifeAtom} from '../state';
import {useAtom, useAtomValue} from 'jotai';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SlicedFoodPointText} from '../component/atom';
import SoundPlayer from 'react-native-sound-player';

interface Props {
  children: React.ReactNode;
  onSlice: () => void;
  onFinishAnimation: () => void;
  point: number;
}

const FoodTranslationContainer: React.FunctionComponent<Props> = ({
  children,
  onSlice,
  onFinishAnimation,
  point,
}) => {
  const [animatedUp, setAnimatedUp] = useState<boolean>(false);
  const [sliced, setSliced] = useState<boolean>(false);

  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const gamePaused = useAtomValue(openGameMenuAtom);

  const initialPosition = randomInt(screenWidth * 0.7);
  const midPosition = initialPosition + initialPosition * 0.1;
  const finalPosition = initialPosition + initialPosition * 0.2;

  const translationX = useSharedValue(initialPosition);
  const translationY = useSharedValue(1);

  const [playerLife, setPlayerLife] = useAtom(playerLifeAtom);

  const FOOD_TRANSLATION_DURATION = randomInt(4000, 3000); // randomDuration between 2secs and 4secs
  const SLICE_FALL_DURATION = 2000;

  const handleSlice = useCallback(() => {
    setSliced(true);
    onSlice();
  }, []);

  const handleAnimatedUp = () => {
    setAnimatedUp(true);
  };

  // onFinishedTranslation sets the player life in the case player misses
  // any food. and also set the game over if the life is depleted.
  const onFinishedTranslation = async () => {
    try {
      if (!sliced) {
        if (playerLife === '0') {
          console.log('game over ');
          setPlayerLife('0');
          setGameOver(true);
          SoundPlayer.playSoundFile('gameover2', 'mp3');
        } else {
          setPlayerLife(prev => {
            if (prev === '3') {
              return '2';
            } else if (prev === '2') {
              return '1';
            }
            return '0';
          });
        }
      }
    } catch (error) {
      console.log('some error occured', error);
    }
  };

  // handleFinishAnimatingUp is the callback ran whenever the animation finishes.
  // This callback is used in two animation controller -> sliced animation and the normal translate animation.
  const handleFinishAnimatingUp = (_fromSliceAnim: boolean) => {
    'worklet';
    // checks if the animation is from the slice anim. if yes it only runs
    // the on finish callback which removes the food from the foods array
    if (_fromSliceAnim) {
      runOnJS(onFinishAnimation)();
    } else {
      // if not from slice anim, then check if the animation just finished translating up
      // or maybe it hasnt animated up yet.
      if (animatedUp) {
        runOnJS(onFinishedTranslation)();
        runOnJS(onFinishAnimation)();
      } else {
        runOnJS(handleAnimatedUp)();
      }
    }
  };

  useEffect(() => {
    const TRANSLATION_EASING = animatedUp
      ? Easing.bezier(0.32, 0, 0.67, 0)
      : Easing.bezier(0.5, 1, 0.89, 1);

    const translateY = withTiming(
      animatedUp ? 1 : 0,
      {
        duration: FOOD_TRANSLATION_DURATION,
        easing: TRANSLATION_EASING,
      },
      finished => {
        if (finished) {
          handleFinishAnimatingUp(false);
        }
      },
    );

    const translateX = withTiming(animatedUp ? finalPosition : midPosition, {
      duration: FOOD_TRANSLATION_DURATION,
    });

    const _stopTranslateXAnim = withTiming(translationX.value);
    const _stopTranslateYAnim = withTiming(translationY.value);

    const _slicedTranslateXAnim = withTiming(translationX.value);
    const _slicedTranslateYAnim = withTiming(
      1,
      {
        duration: SLICE_FALL_DURATION,
      },
      finished => {
        if (finished) {
          handleFinishAnimatingUp(true);
        }
      },
    );

    const pauseTranslation = gameOver || gamePaused;

    if (sliced) {
      translationY.value = _slicedTranslateYAnim;
      translationX.value = _slicedTranslateXAnim;
    } else {
      if (!pauseTranslation) {
        translationY.value = translateY;
        translationX.value = translateX;
      } else {
        translationY.value = _stopTranslateYAnim;
        translationX.value = _stopTranslateXAnim;
      }
    }
  }, [animatedUp, gameOver, gamePaused, finalPosition, midPosition, sliced]);

  const rStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      width: 150,
      transform: [
        {translateX: translationX.value},
        {translateY: translationY.value * screenHeight},
      ],
    };
  }, []);

  return (
    <Animated.View collapsable style={rStyle}>
      {children}
      <FoodSlicer onSlice={handleSlice} />
      {sliced && <SlicedFoodPointText point={point} />}
    </Animated.View>
  );
};

export default memo<Props>(FoodTranslationContainer);
