import {View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {foodLibrary} from '../../consts';
import {randomID, randomInt} from '../../helper';
import {FoodBuilder} from '../../types';
import {Food} from '../molecule';
import {gameOverAtom, openGameMenuAtom} from '../../state';
import {useAtomValue} from 'jotai';

const FoodRenderer: React.FunctionComponent = () => {
  const [foods, setFood] = useState<FoodBuilder[]>([]);
  const [timer, setTimer] = useState<number>(0);
  const [lastRemovedFoodID, setLastRemovedFoodID] = useState<string>();

  const gameOver = useAtomValue(gameOverAtom);
  const openedGameMenu = useAtomValue(openGameMenuAtom);

  // This is the timer effect. what it does is only to increment the timer.
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const gamePaused = gameOver || openedGameMenu;

    if (gamePaused) {
      if (interval) {
        clearInterval(interval);
      }
    } else {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [gameOver, openedGameMenu, timer]);

  useEffect(() => {
    const totalFoodItemCount = foodLibrary.length;

    const getFoodCount = (time: number): number => {
      if (time >= 0 && time <= 10) {
        return 1;
      } else if (time >= 11 && time <= 20) {
        return 3;
      } else if (time >= 21 && time <= 30) {
        return 4;
      } else if (time >= 31 && time <= 40) {
        return 5;
      } else if (time >= 41 && time <= 50) {
        return 6;
      } else if (time >= 51 && time <= 60) {
        return 7;
      } else if (time >= 61 && time <= 70) {
        return 8;
      } else if (time >= 71 && time <= 80) {
        return 9;
      } else if (time >= 81 && time <= 90) {
        return 10;
      }
      return 10;
    };

    const addFoodBatch = (): FoodBuilder[] => {
      let foodBuilder: FoodBuilder[] = [];

      const foodCount = getFoodCount(timer);

      for (let i = 0; i < foodCount; i++) {
        const randFood: FoodBuilder = {
          ...foodLibrary[randomInt(totalFoodItemCount)],
          id: randomID(),
        };
        foodBuilder.push(randFood);
      }

      return foodBuilder;
    };

    const gamePaused = gameOver || openedGameMenu;

    if (gamePaused) {
    } else {
      // check if the food on screen is depleted. if it is, generate new food batch.
      if (foods.length < 1) {
        const newFoodBatch = addFoodBatch();
        setFood(prev => [...prev, ...newFoodBatch]);
      }
    }
  }, [gameOver, openedGameMenu, timer, foods]);

  const removeFood = useCallback((id: string) => {
    setFood(prev => prev.filter(f => f.id !== id));
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
      {foods.map(foodItem => {
        return (
          <Food
            key={foodItem.id}
            onFinishTranslation={removeFood}
            food={foodItem}
          />
        );
      })}
    </View>
  );
};

export default FoodRenderer;
