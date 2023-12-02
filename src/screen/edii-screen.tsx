import {Text, View} from 'react-native';
import {
  GameBackground,
  LifeBoard,
  MenuBoard,
  ScoreBoard,
} from '../component/organism';

import {screenHeight, screenWidth} from '../consts';
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
import {startGameAtom} from '../state';
import {useAtom} from 'jotai';
import SoundPlayer from 'react-native-sound-player';

const EdiiScreen: React.FunctionComponent = () => {
  return (
    <GameBackground>
      <Lobby />
      {/* Game header */}
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: screenHeight * 0.05,
        }}>
        <LifeBoard />
        <ScoreBoard />
        <MenuBoard />
      </View> */}
      {/* <GameOverLayout /> */}
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
        <MotiView from={{opacity: [0.8, 1, 0.7, 1]}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: size(30),
              fontWeight: '800',
            }}>
            Ready to be a Ninja?
          </Text>
        </MotiView>

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
          <StartGameButton />
        </MotiView>

        <MotiText
          from={{translateY: [size(5), 0, size(5), 0]}}
          transition={{type: 'timing', duration: 500, loop: true, delay: 1000}}
          style={{color: 'gold', textAlign: 'center', marginTop: size(30)}}>
          Slice fruit to start
        </MotiText>
      </View>
    </View>
  );
};

const StartGameButton: React.FunctionComponent = () => {
  const [gameStarted, setGameStarted] = useAtom(startGameAtom);

  console.log(gameStarted, 'gamestarted');

  const handleGameStarted = async () => {
    try {
      setGameStarted(true);
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
          //   backgroundColor: 'red',
          height: size(140),
          width: size(140),
          position: 'absolute',
          alignSelf: 'center',
        }}>
            
        </Animated.View>
    </GestureDetector>
  );
};
