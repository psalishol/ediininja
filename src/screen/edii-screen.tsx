import {Image, Pressable, Text, View} from 'react-native';
import {
  GameBackground,
  LifeBoard,
  MenuBoard,
  ScoreBoard,
} from '../component/organism';

import {bezierEasing, linearEasing, screenHeight, screenWidth} from '../consts';
import {size} from '../helper';
import {
  AppleCutSvg,
  AppleSvg,
  PopoverBoardSvg,
  PopoverEdiiSvg,
  PopoverNinja,
} from '../assets/svg';
import {MotiView, MotiText} from 'moti';
import Animated, {runOnJS} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {
  highScoreAtom,
  startingGameAtom,
  startGameAtom,
  currentScoreAtom,
  gameCountdownStartAtom,
} from '../state';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import SoundPlayer from 'react-native-sound-player';
import {slashImg} from '../assets/img';
import {useCallback, useEffect, useState} from 'react';
import {
  CountDownToStartText,
  LobbyHighScoreText,
  LobbyNinjaText,
  SliceFruitText,
} from '../component/atom';
import {LobbySliceApple, StartGameButton} from '../component/molecule';
import { EdiiLobbyLayout } from '../layout';

const EdiiScreen: React.FunctionComponent = () => {
  const [startGame] = useAtom(startGameAtom);

  const [startingGame, setStartingGame] = useAtom(startingGameAtom);

  const [gameCountdownStart, setGameCountdownStart] = useAtom(
    gameCountdownStartAtom,
  );

  const setScore = useSetAtom(currentScoreAtom);

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
        <View>
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

          <Pressable
            onPress={() => setScore(prev => prev + 1)}
            style={{
              backgroundColor: 'red',
              height: 100,
              width: 100,
              alignSelf: 'center',
              marginTop: 100,
            }}></Pressable>
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
