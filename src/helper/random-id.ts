import uuid from 'react-native-uuid';

export const randomID = (): string => {
  return uuid.v4() as string;
};
