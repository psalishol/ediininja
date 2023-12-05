import {useAtom} from 'jotai';
import {MotiView} from 'moti';
import {Image, Pressable} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import SoundPlayer from 'react-native-sound-player';
import {slashImg} from '../../assets/img';
import {size} from '../../helper';
import {startingGameAtom} from '../../state';
import Animated from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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

  const BUTTON_SIZE = size(220);

  return (
    <GestureDetector gesture={gesture}>
      <AnimatedPressable
        onPress={handleGameStarted}
        style={{
          height: BUTTON_SIZE,
          width: BUTTON_SIZE,
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
      </AnimatedPressable>
    </GestureDetector>
  );
};

export default StartGameButton;
