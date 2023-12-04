import {MotiView} from 'moti';
import React, {useState, useCallback, memo, useEffect} from 'react';
import {FoodSlicer} from '../component/molecule';
import {linearEasing, screenHeight, screenWidth} from '../consts';
import {randomInt, size} from '../helper';
import {Text, View} from 'react-native';
import {RedXTemplate} from '../assets/svg';
import {gameOverAtom, openGameMenuAtom, playerLifeAtom} from '../state';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  children: React.ReactNode;
  onSlice: () => void;
  onFinishAnimation: () => void;
}

const FoodTranslationContainer: React.FunctionComponent<Props> = ({
  children,
  onSlice,
  onFinishAnimation,
}) => {
  const [animatedUp, setAnimatedUp] = useState<boolean>(false);
  const [sliced, setSliced] = useState<boolean>(false);

  const [finishedAnimating, setFinishAnimating] = useState<boolean>(false);

  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const gamePaused = useAtomValue(openGameMenuAtom);

  const initialPosition = randomInt(screenWidth * 0.7);
  const midPosition = initialPosition + initialPosition * 0.1;
  const finalPosition = initialPosition + initialPosition * 0.2;

  const translationX = useSharedValue(initialPosition);
  const translationY = useSharedValue(1);

  const [playerLife, setPlayerLife] = useAtom(playerLifeAtom);

  const FOOD_TRANSLATION_DURATION = randomInt(4000, 1500); // randomDuration between 2secs and 4secs

  const handleSlice = useCallback(() => {
    setSliced(true);
    onSlice();
  }, []);

  const handleAnimatedUp = () => {
    setAnimatedUp(true);
  };

  const handleFinishAnimatingUp = () => {
    'worklet';
    if (animatedUp) {
      // setFinishAnimating(true);
      // if (!sliced) {
      //   if (playerLife === '1') {
      //     setGameOver(true);
      //   } else {
      //     setPlayerLife(prev => {
      //       if (prev === '3') {
      //         return '2';
      //       }
      //       return '1';
      //     });
      //   }
      // } else {
      // }

      runOnJS(onFinishAnimation)();
    } else {
      // setAnimatedUp(true);
      runOnJS(handleAnimatedUp)();
    }
  };

  // console.log('animated up', animatedUp);

  console.log('finished', finishedAnimating && !sliced);

  // if (finishedAnimating && !sliced) {
  //   return (
  //     <MotiView
  //     // from={{opacity: 1, translateY: 0}}
  //     // animate={{opacity: 0, translateY: -size(100)}}
  //     // transition={{type: 'timing', duration: 1000, easing: linearEasing}}
  //     // style={{position: 'absolute'}}
  //     >
  //       {/* <RedXTemplate height={size(40)} width={size(40)} /> */}
  //       <RedXTemplate />
  //     </MotiView>
  //   );
  // }

  // if (finishedAnimating && sliced) {
  //   return <></>;
  // }

  useEffect(() => {
    const translateFood = () => {
      translationY.value = withTiming(
        animatedUp ? 1 : 0,
        {duration: FOOD_TRANSLATION_DURATION},
        finished => {
          if (finished) {
            handleFinishAnimatingUp();
          }
        },
      );

      translationX.value = withTiming(
        animatedUp ? finalPosition : midPosition,
        {duration: FOOD_TRANSLATION_DURATION},
      );
    };

    if (!gameOver && !gamePaused) {
      translateFood();
    }
  }, [animatedUp, gameOver, gamePaused, finalPosition, midPosition]);

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
    </Animated.View>
    // <MotiView
    //   collapsable={true}
    //   style={{
    //     position: 'absolute',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: size(150),
    //     width: size(150),
    //   }}
    //   from={{translateY: screenHeight, translateX: initialPosition}}
    //   animate={{
    //     translateY: animatedUp ? screenHeight : 0,
    //     translateX: animatedUp ? finalPosition : midPosition,
    //   }}
    //   onDidAnimate={handleFinishAnimatingUp}
    //   transition={{type: 'timing', duration: FOOD_TRANSLATION_DURATION}}>
    //   {children}
    //   <FoodSlicer onSlice={handleSlice} />
    // </MotiView>
  );
};

export default memo<Props>(FoodTranslationContainer);
