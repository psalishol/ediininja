import uuid from 'react-native-uuid';

// randomID generates random unique strings.
// eg "jshj32-323jjj2-j23jgjhs-jjshdjh". it is always unique
export const randomID = (): string => {
  return uuid.v4() as string;
};

// randomInt generates a random number between 0 and the max number.
export const randomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
