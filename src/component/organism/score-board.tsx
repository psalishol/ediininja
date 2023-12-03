import {View, Text} from 'react-native';
import {ScoreBoardTemplate} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';
import {size} from '../../helper';
import {HighScore, CurrentScore} from '../atom';
import {LastSlicedFood, PlayerLifeDisplay} from '../molecule';

const ScoreBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.18;
  const BOARD_WIDTH = screenWidth * 0.5;
  return (
    <View>
      <ScoreBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />
      <HighScore />
      <CurrentScore />

      <Text
        style={{
          color: 'white',
          marginLeft: screenWidth * 0.05,
          position: 'absolute',
          fontSize: size(18),
        }}>
        high score
      </Text>

      <Text
        style={{
          color: 'white',
          marginLeft: screenWidth * 0.27,
          position: 'absolute',
          fontSize: size(18),
        }}>
        score
      </Text>
      <LastSlicedFood />
      <PlayerLifeDisplay />
    </View>
  );
};

export default ScoreBoard;
