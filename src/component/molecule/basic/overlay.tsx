import * as React from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useEffect} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

import {linearEasing} from '../../../consts';

interface OverlayProps {
  color?: string;
  opacity?: number;
  onPress?: (e?: GestureResponderEvent) => void;
  animate?: boolean;
  duration?: number;
  zIndex?: number;
  close?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Overlay = (Props: OverlayProps) => {
  const {
    color,
    opacity = 1,
    onPress,
    animate = false,
    duration = 500,
    zIndex,
    close,
  } = Props;

  const progress = useSharedValue(opacity);

  useEffect(() => {
    progress.value = withTiming(close ? 0 : opacity, {
      duration,
      easing: linearEasing,
    });
  }, [close, duration, opacity, progress]);

  const style = useAnimatedStyle(() => {
    return {opacity: progress.value};
  });

  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        {...styles.overlay, backgroundColor: color, zIndex},
        !animate && {opacity},
        animate && style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  overlay: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});

export default React.memo<OverlayProps>(Overlay);
