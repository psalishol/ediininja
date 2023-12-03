import {StyleSheet, Text, View} from 'react-native';
import {screenHeight, screenWidth} from '../../consts';
import {highScoreAtom} from '../../state';
import {useAtomValue} from 'jotai';
import ScalingScoreText from './scaling-score-text';

const HighScore: React.FunctionComponent = () => {
  const score = useAtomValue(highScoreAtom);
  return (
    <View style={styles.container}>
      <ScalingScoreText value={score} />
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
});
