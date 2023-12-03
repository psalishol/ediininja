import {View} from 'react-native';
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
} from '../state';
import {useAtom, useSetAtom} from 'jotai';
import {useCallback, useEffect, useState} from 'react';
import {CountDownToStartText} from '../component/atom';
import {EdiiLobbyLayout} from '../layout';
import {FoodItems} from '../types';
import {randomID, size} from '../helper';
import {renderFood} from '../util/food-render';

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

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // backgroundColor: 'red',
      }}>
      <ProjectedFood
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
}

const ProjectedFood: React.FunctionComponent<Props> = ({food}) => {
  const {foodItem, id, point} = food;

  return (
    <FoodItemRotationContainer>
      {renderFood(foodItem, false, size(100))}
    </FoodItemRotationContainer>
  );
};

interface ContainerProp {
  children: React.ReactNode;
}

const FoodItemRotationContainer: React.FunctionComponent<ContainerProp> = ({
  children,
}) => {
  return (
    <FoodItemTranslationContainer>
      <MotiView
        from={{rotate: '0deg'}}
        animate={{rotate: '360deg'}}
        transition={{
          loop: true,
          type: 'timing',
          duration: 2000,
          repeatReverse: false,
        }}
        style={{
          marginTop: size(40),
          elevation: 50,
          // backgroundColor: 'blue',
          alignSelf: 'baseline',
        }}>
        {children}
      </MotiView>
    </FoodItemTranslationContainer>
  );
};

const FoodItemTranslationContainer: React.FunctionComponent<ContainerProp> = ({
  children,
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
    </MotiView>
  );
};
