import {StyleSheet, Text, View} from 'react-native';
import {screenHeight, screenWidth} from '../../consts';
import {highScoreAtom} from '../../state';
import {useAtomValue} from 'jotai';

const HighScore: React.FunctionComponent = () => {
  const score = useAtomValue(highScoreAtom);
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

export default HighScore;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginLeft: screenWidth * 0.037,
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
