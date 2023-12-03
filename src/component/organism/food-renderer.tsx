import {View} from 'react-native';
import {useState, useCallback, useEffect} from 'react';
import {foodLibrary} from '../../consts';
import {randomID, randomInt} from '../../helper';
import {FoodBuilder} from '../../types';
import {Food} from '../molecule';

const FoodRenderer: React.FunctionComponent = () => {
  const [food, setFood] = useState<FoodBuilder[]>([]);

  useEffect(() => {
    const totalFoodItemCount = foodLibrary.length;

    const interval = setInterval(() => {
      let foodBuilder: FoodBuilder[] = [];

      for (let i = 0; i < randomInt(4); i++) {
        const randFood: FoodBuilder = {
          ...foodLibrary[randomInt(totalFoodItemCount)],
          id: randomID(),
        };
        foodBuilder.push(randFood);
      }

      setFood(prev => [...prev, ...foodBuilder]);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const removeFood = useCallback((id: string) => {
    setFood(prev => prev.filter(f => f.id === id));
  }, []);

  console.log('foods', food);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}>
      <Food
        onFinishTranslation={removeFood}
        food={{
          ...foodLibrary[1],
          id: randomID(),
        }}
      />
    </View>
  );
};

export default FoodRenderer;
