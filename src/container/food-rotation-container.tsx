import React, {memo, useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {gameOverAtom, openGameMenuAtom} from '../state';
import {useAtomValue} from 'jotai';

interface Props {
  children: React.ReactNode;
  sliced: boolean;
}

const FoodRotationContainer: React.FunctionComponent<Props> = ({
  children,
  sliced,
}) => {
  const gameOver = useAtomValue(gameOverAtom);
  const gamePaused = useAtomValue(openGameMenuAtom);

  const rotation = useSharedValue(0);

  useEffect(() => {
    // rotateFood indefinitely rotates the food
    const _rotation = withRepeat(withTiming(1, {duration: 4000}), 0);
    const _stopRotationAnim = withTiming(rotation.value, {duration: 400});

    const ceaseRotation = gameOver || gamePaused || sliced;

    // stop rotating food if game over or menu opened or maybe the food is sliced
    if (!ceaseRotation) {
      rotation.value = _rotation;
    } else {
      rotation.value = _stopRotationAnim;
    }
  }, [gameOver, gamePaused, sliced]);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value * 360}deg`}],
      marginTop: 40,
      elevation: 50,
      alignSelf: 'baseline',
    };
  }, []);

  return <Animated.View style={rStyle}>{children}</Animated.View>;
};

export default memo<Props>(FoodRotationContainer);
