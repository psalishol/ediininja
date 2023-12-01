import {SafeAreaView, View} from 'react-native';
import {GameBackground} from '../component/organism';
import {
  LeftBoardTemplate,
  RightBoardTemplate,
  ScoreBoardTemplate,
  XTemplate,
} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {CurrentScore, HighScore} from '../component/atom';

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
        marginTop: 15,
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
