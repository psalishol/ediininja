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
import {CountDownToStartText, LobbyHighScoreText} from '../component/atom';

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
      {!startGame && !gameCountdownStart && <Lobby />}
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

const Lobby: React.FunctionComponent = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: size(20),
      }}>
      <PopoverBoardSvg />

      <View
        style={{
          position: 'absolute',
          marginLeft: screenWidth * 0.6,
          marginTop: screenHeight * 0.65,
        }}>
        <PopoverNinja height={size(100)} width={100} />
      </View>

      <View
        style={{
          position: 'absolute',
          marginTop: size(70),
          width: screenWidth * 0.6,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <ReadyToBeANinjaText />

        <StartGameApple />

        <StartGameButton />

        <SliceFruitText />

        <LobbyHighScoreText />
      </View>
    </View>
  );
};

const ReadyToBeANinjaText: React.FunctionComponent = () => {
  const startingGame = useAtomValue(startingGameAtom);

  return (
    <MotiView from={{opacity: [0.8, 1, 0.7, 1]}}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: size(30),
          fontWeight: '800',
        }}>
        {startingGame ? 'Starting game' : 'Ready to be a Ninja?'}
      </Text>
    </MotiView>
  );
};

const SliceFruitText: React.FunctionComponent = () => {
  const startingGame = useAtomValue(startingGameAtom);

  if (startingGame) {
    return <></>;
  }

  return (
    <MotiText
      from={{translateY: [size(5), 0, size(5), 0]}}
      transition={{type: 'timing', duration: 500, loop: true, delay: 1000}}
      style={{color: 'gold', textAlign: 'center', marginTop: size(30)}}>
      Slice fruit to start
    </MotiText>
  );
};

const StartGameApple: React.FunctionComponent = () => {
  const startingGame = useAtomValue(startingGameAtom);

  return (
    <>
      {!startingGame && (
        <MotiView
          from={{rotate: '0deg'}}
          animate={{rotate: '360deg'}}
          transition={{
            loop: true,
            type: 'timing',
            duration: 2000,
            repeatReverse: false,
          }}
          style={{marginTop: size(40), elevation: 50}}>
          <AppleSvg height={size(100)} />
        </MotiView>
      )}

      {startingGame && (
        <MotiView
          from={{translateY: 0}}
          animate={{translateY: screenHeight}}
          transition={{type: 'timing', duration: 1200, easing: bezierEasing}}
          style={{marginTop: size(40), elevation: 50}}>
          <AppleCutSvg height={size(100)} />
        </MotiView>
      )}
    </>
  );
};

const StartGameButton: React.FunctionComponent = () => {
  const [startingGame, setStartingGame] = useAtom(startingGameAtom);

  const handleGameStarted = async () => {
    try {
      setStartingGame(true);
      // play slash sound
      SoundPlayer.playSoundFile('slash2', 'mpeg');
    } catch (error) {
      console.log('error starting game', error);
    }
  };

  const gesture = Gesture.Pan().onEnd(_e => {
    runOnJS(handleGameStarted)();
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={{
          height: size(140),
          width: size(140),
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {startingGame && (
          <MotiView
            from={{opacity: 1, translateX: -size(20), translateY: size(20)}}
            animate={{opacity: 0, translateX: size(50), translateY: -size(30)}}
            style={{position: 'absolute'}}>
            <Image
              style={{height: size(120), width: size(120), marginTop: size(30)}}
              resizeMode="contain"
              source={slashImg}
            />
          </MotiView>
        )}
      </Animated.View>
    </GestureDetector>
  );
};
