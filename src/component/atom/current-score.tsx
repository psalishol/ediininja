import {StyleSheet, Text, View} from 'react-native';
import {screenHeight, screenWidth} from '../../consts';

const CurrentScore: React.FunctionComponent = () => {
  const score = 1000;
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

export default CurrentScore;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginLeft: screenWidth * 0.236,
    marginTop: screenHeight * 0.048,
    height: screenHeight * 0.07,
    width: screenWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontWeight: '900',
    fontSize: 20,
    color: 'white',
  },
});
