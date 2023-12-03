import {StyleSheet, View} from 'react-native';
import {screenHeight, screenWidth} from '../../consts';
import {useAtomValue} from 'jotai';
import {currentScoreAtom} from '../../state';
import ScalingScoreText from './scaling-score-text';

const CurrentScore: React.FunctionComponent = () => {
  const score = useAtomValue(currentScoreAtom);
  return (
    <View style={styles.container}>
      <ScalingScoreText value={score} />
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
});
