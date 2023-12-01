import {Dimensions} from 'react-native';
import { Easing } from 'react-native-reanimated';

// Exports window height and width of the screen
export const {height: screenHeight, width: screenWidth} =
  Dimensions.get('window');

// Easings -> For animation
export const bezierEasing = Easing.bezier(0.65, 0, 0.35, 1);
export const bezierCubicEaseOut = Easing.bezier(0.33, 1, 0.68, 1);
export const linearEasing = Easing.linear;

export const cubicEaseIn = Easing.bezier(0.32, 0, 0.67, 0);
export const easeOutCirc = Easing.bezier(0, 0.55, 0.45, 1);
export const easeOutSine = Easing.bezier(0.61, 1, 0.88, 1);
export const easeOutQuard = Easing.bezier(0.5, 1, 0.89, 1);
