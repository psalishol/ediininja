import uuid from 'react-native-uuid';

// randomID generates random unique strings.
// eg "jshj32-323jjj2-j23jgjhs-jjshdjh". it is always unique
export const randomID = (): string => {
  return uuid.v4() as string;
};

// randomInt generates a random inte between min(defaults to 0) and the max number.
export const randomInt = (max: number, min = 0): number => {
  return min + Math.floor(Math.random() * max);
};
