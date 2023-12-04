import {useAtom, useSetAtom} from 'jotai';
import React, {useState, useCallback, memo} from 'react';
import {FoodRotationContainer, FoodTranslationContainer} from '../../container';
import {size} from '../../helper';
import {
  highScoreAtom,
  currentScoreAtom,
  lastSlicedFoodItemAtom,
} from '../../state';
import {renderFood} from '../../util';
import {FoodBuilder} from '../../types';

interface Props {
  food: FoodBuilder;
  onFinishTranslation: (id: string) => void;
}

const Food: React.FunctionComponent<Props> = ({food, onFinishTranslation}) => {
  const {foodItem, id, point} = food;

  const [sliced, setSliced] = useState<boolean>(false);

  const setLastSlicedFood = useSetAtom(lastSlicedFoodItemAtom);

  const [highScore, setHighScore] = useAtom(highScoreAtom);
  const [currentScore, setCurrentScore] = useAtom(currentScoreAtom);

  const handleSliceFood = useCallback(() => {
    setSliced(true);

    const newScore = currentScore + point;

    setCurrentScore(newScore);

    setLastSlicedFood(foodItem);

    if (newScore > highScore) {
      setHighScore(newScore);
    }
  }, [currentScore, highScore]);

  return (
    <FoodTranslationContainer
      onFinishAnimation={() => onFinishTranslation(id)}
      onSlice={handleSliceFood}>
      <FoodRotationContainer sliced={sliced}>
        {renderFood(foodItem, sliced, size(100))}
      </FoodRotationContainer>
    </FoodTranslationContainer>
  );
};

export default memo<Props>(Food);
