import {MotiView} from 'moti';
import React, {useState, useCallback, memo} from 'react';
import {FoodSlicer} from '../component/molecule';
import {linearEasing, screenHeight, screenWidth} from '../consts';
import {randomInt, size} from '../helper';
import {Text, View} from 'react-native';
import {RedXTemplate} from '../assets/svg';
import {gameOverAtom, playerLifeAtom} from '../state';
import {useAtom, useSetAtom} from 'jotai';

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
  const [sliced, setSliced] = useState<boolean>(false);

  const [finishedAnimating, setFinishAnimating] = useState<boolean>(false);

  const setGameOver = useSetAtom(gameOverAtom);

  const [playerLife, setPlayerLife] = useAtom(playerLifeAtom);

  const FOOD_TRANSLATION_DURATION = 4000; // 4secs

  const handleSlice = useCallback(() => {
    setSliced(true);
    onSlice();
  }, []);

  const handleFinishAnimatingUp = useCallback(() => {
    if (animatedUp) {
      setFinishAnimating(true);
      if (!sliced) {
        if (playerLife === '1') {
          setGameOver(true);
        } else {
          setPlayerLife(prev => {
            if (prev === '3') {
              return '2';
            }
            return '1';
          });
        }
      } else {
      }

      onFinishAnimation();
    } else {
      setAnimatedUp(true);
    }
  }, [animatedUp, sliced]);

  // console.log('animated up', animatedUp);

  console.log('finished', finishedAnimating && !sliced);

  const initialPosition = randomInt(screenWidth * 0.7);
  const midPosition = initialPosition + initialPosition * 0.1;
  const finalPosition = initialPosition + initialPosition * 0.2;

  // if (finishedAnimating && !sliced) {
  //   return (
  //     <MotiView
  //     // from={{opacity: 1, translateY: 0}}
  //     // animate={{opacity: 0, translateY: -size(100)}}
  //     // transition={{type: 'timing', duration: 1000, easing: linearEasing}}
  //     // style={{position: 'absolute'}}
  //     >
  //       {/* <RedXTemplate height={size(40)} width={size(40)} /> */}
  //       <RedXTemplate />
  //     </MotiView>
  //   );
  // }

  // if (finishedAnimating && sliced) {
  //   return <></>;
  // }

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
      <FoodSlicer onSlice={handleSlice} />
    </MotiView>
  );
};

export default memo<Props>(FoodTranslationContainer);
