import {Animated, Image, View} from 'react-native';
import {
  GameBackground,
  LifeBoard,
  MenuBoard,
  ScoreBoard,
} from '../component/organism';

import {screenHeight, foodLibrary, screenWidth} from '../consts';
import {MotiView} from 'moti';
import {
  startingGameAtom,
  startGameAtom,
  gameCountdownStartAtom,
  highScoreAtom,
  currentScoreAtom,
} from '../state';
import {useAtom, useSetAtom} from 'jotai';
import React, {useCallback, useEffect, useState} from 'react';
import {CountDownToStartText} from '../component/atom';
import {EdiiLobbyLayout} from '../layout';
import {FoodItems} from '../types';
import {randomID, size} from '../helper';
import {renderFood} from '../util/food-render';
import SoundPlayer from 'react-native-sound-player';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import {slashImg} from '../assets/img';
import {FoodSlicer, StartGameButton} from '../component/molecule';

const EdiiScreen: React.FunctionComponent = () => {
  const [startGame] = useAtom(startGameAtom);

  const [startingGame, setStartingGame] = useAtom(startingGameAtom);

  const [gameCountdownStart, setGameCountdownStart] = useAtom(
    gameCountdownStartAtom,
  );

  useEffect(() => {
    if (startingGame) {
      setTimeout(() => {
        setStartingGame(false);
        setGameCountdownStart(true);
      }, 1000); // START GAME AFTER 1500 ms of slicing apple
    }
  }, [startingGame]);

  return (
    <GameBackground>
      {!startGame && !gameCountdownStart && <EdiiLobbyLayout />}
      {/* Game header */}
      {startGame && !gameCountdownStart && (
        <View style={{flex: 1}}>
          <FoodProjectionView />
          <MotiView
            from={{translateY: -screenHeight * 0.3}}
            animate={{translateY: 0}}
            transition={{damping: 300}}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: screenHeight * 0.05,
            }}>
            <LifeBoard />
            <ScoreBoard />
            <MenuBoard />
          </MotiView>
        </View>
      )}

      {!startGame && gameCountdownStart && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CountDownToStartText />
        </View>
      )}
    </GameBackground>
  );
};

export default EdiiScreen;

const randomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

interface FoodBuilder {
  id: string;
  foodItem: FoodItems;
  point: number;
}

const FoodProjectionView: React.FunctionComponent = () => {
  const [food, setFood] = useState<FoodBuilder[]>([]);

  //   useEffect(() => {
  //     const totalFoodItemCount = foodLibrary.length;

  //     const interval = setInterval(() => {
  //       let foodBuilder: FoodBuilder[] = [];

  //       for (let i = 0; i < randomInt(4); i++) {
  //         const randFood: FoodBuilder = {
  //           ...foodLibrary[randomInt(totalFoodItemCount)],
  //           id: randomID(),
  //         };
  //         foodBuilder.push(randFood);
  //       }

  //       setFood(prev => [...prev, ...foodBuilder]);
  //     }, 1500);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  console.log('food', food);

  const removeFood = useCallback((id: string) => {
    setFood(prev => prev.filter(f => f.id === id));
  }, []);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}>
      <ProjectedFood
        onFinishTranslation={removeFood}
        food={{
          ...foodLibrary[1],
          id: randomID(),
        }}
      />
    </View>
  );
};

interface Props {
  food: FoodBuilder;
  onFinishTranslation: (id: string) => void;
}

const ProjectedFood: React.FunctionComponent<Props> = ({
  food,
  onFinishTranslation,
}) => {
  const {foodItem, id, point} = food;

  const [sliced, setSliced] = useState<boolean>(false);

  const [highScore, setHighScore] = useAtom(highScoreAtom);
  const [currentScore, setCurrentScore] = useAtom(currentScoreAtom);

  const handleSliceFood = useCallback(() => {
    setSliced(prev => !prev);

    const newScore = currentScore + point;

    setCurrentScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
    }
  }, [currentScore, highScore]);

  return (
    <FoodItemTranslationContainer
      onFinishAnimation={() => onFinishTranslation(id)}
      onSlice={handleSliceFood}>
      <FoodItemRotationContainer sliced={sliced}>
        {renderFood(foodItem, sliced, size(100))}
      </FoodItemRotationContainer>
    </FoodItemTranslationContainer>
  );
};

interface ContainerProp {
  children: React.ReactNode;
  onSlice: () => void;
  onFinishAnimation: () => void;
}
interface FoodRotationProps {
  children: React.ReactNode;
  sliced: boolean;
}

const FoodItemRotationContainer: React.FunctionComponent<FoodRotationProps> = ({
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

const FoodItemTranslationContainer: React.FunctionComponent<ContainerProp> = ({
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
      onFinishAnimation();
    } else {
      setAnimatedUp(true);
    }
  }, [animatedUp]);

  console.log('animated up', animatedUp);

  return (
    <MotiView
      from={{translateY: screenHeight, translateX: 0}}
      animate={{
        translateY: animatedUp ? screenHeight : 0,
        translateX: animatedUp ? screenWidth * 0.2 : screenWidth * 0.1,
      }}
      onDidAnimate={handleFinishAnimatingUp}
      transition={{type: 'timing', duration: FOOD_TRANSLATION_DURATION}}>
      {children}
      <FoodSlicer onSlice={onSlice} />
    </MotiView>
  );
};

