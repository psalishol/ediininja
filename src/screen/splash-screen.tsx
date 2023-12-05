import {Text, View} from 'react-native';
import {PopoverEdiiSvg, PopoverNinja} from '../assets/svg';
import {useEffect, useState} from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {size} from '../helper';
import {MotiView} from 'moti';

const SplashScreen: React.FunctionComponent = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  useEffect(() => {
    SystemNavigationBar.fullScreen();
  }, []);

  const LOGO_SIZE = size(100);

  return (
    <View
      style={{
        backgroundColor: '#B76300',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MotiView
        from={{translateX: 0, opacity: 1}}
        animate={{translateX: animate ? -200 : 0, opacity: animate ? 0 : 1}}>
        <PopoverEdiiSvg height={LOGO_SIZE} width={LOGO_SIZE} />
      </MotiView>
      <MotiView
        from={{translateX: 0, opacity: 1}}
        animate={{translateX: animate ? 200 : 0, opacity: animate ? 0 : 1}}>
        <Text
          style={{
            fontSize: size(20),
            color: 'white',
            fontWeight: '600',
            marginBottom: size(50),
            marginTop: size(10),
          }}>
          Edii Ninja
        </Text>
      </MotiView>

      <View
        style={{
          position: 'absolute',
          top: size(40),
          right: 0,
          left: 20,
          bottom: 0,
        }}>
        <PopoverNinja height={size(50)} width={size(50)} />
      </View>

      <View
        style={{
          position: 'absolute',
          right: 40,
          bottom: size(20),
        }}>
        <PopoverNinja height={size(50)} width={size(50)} />
      </View>
    </View>
  );
};

export default SplashScreen;
