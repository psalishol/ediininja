import {MotiView} from 'moti';
import React, {memo} from 'react';
import {size} from '../helper';

interface Props {
  children: React.ReactNode;
  sliced: boolean;
}

const FoodRotationContainer: React.FunctionComponent<Props> = ({
  children,
  sliced,
}) => {
  return (
    <MotiView
      from={{rotate: '0deg'}}
      animate={{rotate: sliced ? '0deg' : '360deg'}}
      transition={{
        loop: true,
        type: 'timing',
        duration: 2000,
        repeatReverse: false,
      }}
      style={{
        marginTop: size(40),
        elevation: 50,
        alignSelf: 'baseline',
      }}>
      {children}
    </MotiView>
  );
};

export default memo<Props>(FoodRotationContainer);
