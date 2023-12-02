import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {backgroundImg} from '../../assets/img';
import {useEffect} from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {screenHeight, screenWidth} from '../../consts';
import SoundPlayer from 'react-native-sound-player';

interface Props {
  children: React.ReactNode;
}

const GameBackground: React.FunctionComponent<Props> = ({children}) => {
  useEffect(() => {
    // Plays the game theme sound
    const playThemeTrack = async () => {
      try {
        SoundPlayer.playSoundFile('background1', 'mpeg');
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      }
    };

    playThemeTrack();

    SystemNavigationBar.fullScreen();
    SystemNavigationBar.navigationHide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Image
        resizeMode="stretch"
        style={styles.backgroundImg}
        source={backgroundImg}
      />
      {children}
    </View>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    position: 'absolute',
    height: screenHeight,
    width: screenWidth * 1.1,
  },
});
