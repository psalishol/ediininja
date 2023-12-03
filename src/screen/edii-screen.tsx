import {Pressable, View} from 'react-native';
import {
  FoodRenderer,
  GameBackground,
  LifeBoard,
  MenuBoard,
  ScoreBoard,
} from '../component/organism';

import {screenHeight} from '../consts';
import {MotiView} from 'moti';
import {
  startingGameAtom,
  startGameAtom,
  gameCountdownStartAtom,
} from '../state';
import {useAtom} from 'jotai';
import React, {useEffect} from 'react';
import {CountDownToStartText} from '../component/atom';
import {EdiiLobbyLayout} from '../layout';

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
        <View style={{flex: 1, backgroundColor: 'red'}}>
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
          <FoodRenderer />
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
