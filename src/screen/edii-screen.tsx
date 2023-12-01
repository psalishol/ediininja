import {SafeAreaView, Text, View} from 'react-native';
import {GameBackground} from '../component/organism';
import {
  LeftBoardTemplate,
  RightBoardTemplate,
  ScoreBoardTemplate,
} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {CurrentScore, HighScore} from '../component/atom';
import {size} from '../helper';

const EdiiScreen: React.FunctionComponent = () => {
  return (
    <GameBackground>
      <GameHeader />
    </GameBackground>
  );
};

export default EdiiScreen;

const GameHeader: React.FunctionComponent = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: screenHeight * 0.05,
      }}>
      <LifeBoard />
      <ScoreBoard />
      <MenuBoard />
    </SafeAreaView>
  );
};

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
    </View>
  );
};

const LifeBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.15;
  const BOARD_WIDTH = screenWidth * 0.1;
  return (
    <View>
      <LeftBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />
    </View>
  );
};

const MenuBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.15;
  const BOARD_WIDTH = screenWidth * 0.1;
  return (
    <View>
      <RightBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />
    </View>
  );
};
