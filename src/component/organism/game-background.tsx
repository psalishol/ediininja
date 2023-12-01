import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {backgroundImg} from '../../assets/img';
import {useEffect} from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';

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
      <Image style={styles.backgroundImg} source={backgroundImg} />
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
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
