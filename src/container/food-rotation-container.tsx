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
    const rotateFood = () => {
      'worklet';
      rotation.value = withRepeat(withTiming(1, {duration: 2000}), -1);
    };

    // stop rotating food if game over or menu opened or maybe the food is sliced
    if (!gameOver && !gamePaused && !sliced) {
      rotateFood();
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
