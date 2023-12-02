import {atom} from 'jotai';

// holds state for either game over or not. defaults to (false)
export const gameOverAtom = atom<boolean>(false);

// Start that holds value for if the game is started or not.
export const startGameAtom = atom<boolean>(false);

export const highScoreAtom = atom<number>(0);

export const currentScoreAtom = atom<number>(0);
