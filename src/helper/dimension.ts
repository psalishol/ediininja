import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SCALING_FACTOR = 0.0011;
const DEVICE_SCALE_DOWN_FACTOR = 1;

const deviceHeight = Math.max(height, width);

/** Scales the dimension based on the screen height(can be scale up or down. this is totally up to the height)
 *
 *  -> Use for font, icon size and sometime height.
 * @param {number} _size arg_0 dimesion to scale.
 * @returns
 */
export const size = (_size: number): number => {
  return deviceHeight * SCALING_FACTOR * _size * DEVICE_SCALE_DOWN_FACTOR;
};
