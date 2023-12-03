import {Image} from 'react-native';
import {slashImg} from '../../assets/img';
import {screenWidth, screenHeight, bezierEasing} from '../../consts';
import {lastSlicedFoodItemAtom} from '../../state';
import {useAtomValue} from 'jotai';
import {renderFood} from '../../util';
import {useEffect, useState} from 'react';
import {FoodItems} from '../../types';
import {MotiView} from 'moti';

const SlashedFruit: React.FunctionComponent = () => {
  const lastSlicedFood = useAtomValue(lastSlicedFoodItemAtom);

  const [prevSliced, setPrevSliced] = useState<FoodItems>();
  const [animate, setAnimate] = useState<boolean>(false);

  const ITEM_SIZE = screenHeight * 0.2;

  useEffect(() => {
    if (!prevSliced) {
      setPrevSliced(lastSlicedFood);
      setAnimate(true);
    } else {
      if (prevSliced != lastSlicedFood) {
        setAnimate(true);
        setPrevSliced(lastSlicedFood);
      }
    }
  }, [lastSlicedFood]);

  if (!lastSlicedFood) {
    return <></>;
  }

  return (
    <MotiView
      from={{scale: 1.1}}
      animate={{scale: animate ? 1.1 : 1}}
      transition={{type: 'timing', duration: 200, easing: bezierEasing}}
      onDidAnimate={() => setAnimate(false)}
      style={{
        position: 'absolute',
        marginLeft: screenWidth * 0.152,
        marginTop: screenHeight * 0.013,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        elevation: 40,
        shadowColor: 'white',
        shadowRadius: 10,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.9,
        borderRadius: 100,
      }}>
      {renderFood(lastSlicedFood, false, ITEM_SIZE)}
      <Image
        resizeMode="contain"
        style={{
          position: 'absolute',
          height: 30,
          transform: [{rotate: '80deg'}],
        }}
        source={slashImg}
      />
    </MotiView>
  );
};

export default SlashedFruit;
