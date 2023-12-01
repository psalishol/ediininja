import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {backgroundImg} from '../../assets/img';
import {useEffect} from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {screenHeight, screenWidth} from '../../consts';

interface Props {
  children: React.ReactNode;
}

const GameBackground: React.FunctionComponent<Props> = ({children}) => {
  useEffect(() => {
    SystemNavigationBar.fullScreen();
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
