import {MotiView} from 'moti';
import {memo, useCallback, useState} from 'react';
import {Image} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
import SoundPlayer from 'react-native-sound-player';
import {slashImg} from '../../assets/img';
import {size} from '../../helper';
import Animated from 'react-native-reanimated';

interface Props {
  onSlice?: () => void;
}

const FoodSlicer: React.FunctionComponent<Props> = ({onSlice}) => {
  const [sliced, setSliced] = useState<boolean>(false);
  const [animated, setAnimated] = useState<boolean>(false);

  const handleSetBladeAnimated = useCallback(() => {
    setAnimated(false);
  }, []);

  const handleSliceFood = async () => {
    try {
      if (!(sliced || animated)) {
        onSlice && onSlice();

        setSliced(true);

        // play slash sound
        SoundPlayer.playSoundFile('slash2', 'mpeg');
      }
    } catch (error) {
      console.log('error cutting food', error);
    }
  };

  const gesture = Gesture.Pan().onEnd(_e => {
    runOnJS(handleSliceFood)();
  });

  if (animated) {
    return <></>;
  }

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={{
          height: size(150),
          width: size(150),
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {sliced && (
          <MotiView
            onDidAnimate={handleSetBladeAnimated}
            from={{opacity: 1, translateX: -size(20), translateY: size(20)}}
            animate={{
              opacity: 0,
              translateX: sliced ? size(50) : -size(20),
              translateY: sliced ? -size(30) : size(20),
            }}
            style={{position: 'absolute'}}>
            <Image
              style={{
                height: size(120),
                width: size(120),
                marginTop: size(30),
              }}
              resizeMode="contain"
              source={slashImg}
            />
          </MotiView>
        )}
      </Animated.View>
    </GestureDetector>
  );
};

export default memo<Props>(FoodSlicer);
