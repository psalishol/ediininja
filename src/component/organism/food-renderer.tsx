import {View} from 'react-native';
import {useState, useCallback, useEffect} from 'react';
import {foodLibrary} from '../../consts';
import {randomID, randomInt, size} from '../../helper';
import {FoodBuilder} from '../../types';
import {Food} from '../molecule';
import {gameOverAtom, openGameMenuAtom} from '../../state';
import {useAtomValue} from 'jotai';

const FoodRenderer: React.FunctionComponent = () => {
  const [foods, setFood] = useState<FoodBuilder[]>([]);

  const gameOver = useAtomValue(gameOverAtom);
  const openedGameMenu = useAtomValue(openGameMenuAtom);

  const gamePaused = gameOver || openedGameMenu;

  const NEW_FOOD_BATCH_DURATION = 3500; // add new food at the interval of 3.5 sec

  useEffect(() => {
    const totalFoodItemCount = foodLibrary.length;

    const addFoodBatch = () => {
      if (!gamePaused) {
        let foodBuilder: FoodBuilder[] = [];

        for (let i = 0; i < randomInt(4); i++) {
          const randFood: FoodBuilder = {
            ...foodLibrary[randomInt(totalFoodItemCount)],
            id: randomID(),
          };
          foodBuilder.push(randFood);
        }

        setFood(prev => [...prev, ...foodBuilder]);
      }

      setTimeout(addFoodBatch, NEW_FOOD_BATCH_DURATION);
    };

    addFoodBatch();
  }, [gamePaused]);

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
