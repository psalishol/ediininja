import {atom} from 'jotai';

// holds state for either game over or not. defaults to (false)
export const gameOverAtom = atom<boolean>(false);
