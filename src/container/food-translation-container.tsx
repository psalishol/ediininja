import {MotiView} from 'moti';
import React, {useState, useCallback, memo} from 'react';
import {FoodSlicer} from '../component/molecule';
import {screenHeight, screenWidth} from '../consts';
import {randomInt, size} from '../helper';

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

  // This is the duration taken for the food to translate up.
  // TODO: make the duration random between 1000 to 3000
  const FOOD_TRANSLATION_DURATION = 4000; // 2secs

  const handleFinishAnimatingUp = useCallback(() => {
    if (animatedUp) {
      // TODO: remove food from projected map.
      // decrease the life, because the food was not sliced.
      console.log('finished animating');
      //   onFinishAnimation();
    } else {
      setAnimatedUp(true);
    }
  }, [animatedUp]);

  console.log('animated up', animatedUp);

  const initialPosition = randomInt(screenWidth * 0.7);
  const midPosition = initialPosition + initialPosition * 0.1;
  const finalPosition = initialPosition + initialPosition * 0.2;

  return (
    <MotiView
      collapsable={true}
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: size(150),
        width: size(150),
      }}
      from={{translateY: screenHeight, translateX: initialPosition}}
      animate={{
        translateY: animatedUp ? screenHeight : 0,
        translateX: animatedUp ? finalPosition : midPosition,
      }}
      onDidAnimate={handleFinishAnimatingUp}
      transition={{type: 'timing', duration: FOOD_TRANSLATION_DURATION}}>
      {children}
      <FoodSlicer onSlice={onSlice} />
    </MotiView>
  );
};

export default memo<Props>(FoodTranslationContainer);
