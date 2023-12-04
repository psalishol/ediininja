import {View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {foodLibrary} from '../../consts';
import {randomID, randomInt} from '../../helper';
import {FoodBuilder, FoodItems} from '../../types';
import {Food} from '../molecule';
import {gameOverAtom, openGameMenuAtom} from '../../state';
import {useAtomValue} from 'jotai';

const FoodRenderer: React.FunctionComponent = () => {
  const [foods, setFood] = useState<FoodBuilder[]>([]);

  // the food normally is added at interval of 5secs at the start of the game
  const INITIAL_INTERVAL_DURATION = 5000;

  const [intervalDuration, setIntervalDuration] = useState<number>(
    INITIAL_INTERVAL_DURATION,
  );

  const gameOver = useAtomValue(gameOverAtom);
  const openedGameMenu = useAtomValue(openGameMenuAtom);

  useEffect(() => {
    const INTERVAL_AFTER_ONE_MINUTE = 4000;
    const INTERVAL_AFTER_TWO_MINUTE = 2500;
    setTimeout(() => {
      // decrease the interval to 4secs after 1 minsof playing
      setIntervalDuration(INTERVAL_AFTER_ONE_MINUTE);
      setTimeout(() => {
        // decrease the interval to 2.5secs after 2 mins of playing
        setIntervalDuration(INTERVAL_AFTER_TWO_MINUTE);
      }, 120000);
    }, 60000);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    const totalFoodItemCount = foodLibrary.length;

    const addFoodBatch = (): FoodBuilder[] => {
      let foodBuilder: FoodBuilder[] = [];

      const foodCount = randomInt(4);
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
      if (interval) {
        clearInterval(interval);
      }
    } else {
      interval = setInterval(() => {
        const builtFood = addFoodBatch();
        setFood(prev => [...prev, ...builtFood]);
      }, intervalDuration);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [gameOver, openedGameMenu, intervalDuration]);

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
      {foods.map((foodItem, i) => {
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
