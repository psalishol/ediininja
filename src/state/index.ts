import {atom} from 'jotai';
import {FoodItems, PlayerLife} from '../types';

// holds state for either game over or not. defaults to (false)
export const gameOverAtom = atom<boolean>(false);

// Start that holds value for if the game is started or not.
export const startGameAtom = atom<boolean>(false);

export const startingGameAtom = atom<boolean>(false);

export const gameCountdownStartAtom = atom<boolean>(false);

export const highScoreAtom = atom<number>(0);

export const currentScoreAtom = atom<number>(0);

export const playerLifeAtom = atom<number>(6);

export const openGameMenuAtom = atom<boolean>(false);

export const lastSlicedFoodItemAtom = atom<FoodItems | undefined>(undefined);

export const lastTranslatedIDAtom = atom<string | undefined>(undefined);

export const resetGameAtom = atom(null, (_get, set) => {
  set(openGameMenuAtom, false);
  set(gameOverAtom, false);
  set(startGameAtom, false);
  set(lastTranslatedIDAtom, undefined);
  set(currentScoreAtom, 0);
  set(playerLifeAtom, 6);
  set(lastSlicedFoodItemAtom, undefined);
});
