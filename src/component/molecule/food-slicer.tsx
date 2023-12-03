import {MotiView} from 'moti';
import {useState} from 'react';
import {Animated, Image} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import SoundPlayer from 'react-native-sound-player';
import {slashImg} from '../../assets/img';
import {size} from '../../helper';

interface Props {
  onSlice?: () => void;
}

const FoodSlicer: React.FunctionComponent<Props> = ({onSlice}) => {
  const [sliced, setSliced] = useState<boolean>(false);
  // const [startingGame, setStartingGame] = useAtom(startingGameAtom);

  const handleGameStarted = async () => {
    try {
      onSlice && onSlice();

      setSliced(true);

      // play slash sound
      SoundPlayer.playSoundFile('slash2', 'mpeg');
    } catch (error) {
      console.log('error cutting food', error);
    }
  };

  const gesture = Gesture.Pan().onEnd(_e => {
    runOnJS(handleGameStarted)();
  });

  if (sliced) {
    return <></>;
  }

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: size(150),
          alignSelf: 'baseline',
          // backgroundColor: 'red',
        }}>
        {sliced && (
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

export default FoodSlicer;
