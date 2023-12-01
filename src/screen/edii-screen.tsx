import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {GameBackground, LifeBoard, ScoreBoard} from '../component/organism';
import {
  CloseSvg,
  HeartSvg,
  LeftBoardTemplate,
  RightBoardTemplate,
  ScoreBoardTemplate,
} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {CurrentScore, HighScore} from '../component/atom';
import {size} from '../helper';
import {PlayerLifeDisplay, SlashedFruit} from '../component/molecule';
import {GameOverLayout} from '../layout';
import {useCallback} from 'react';

const EdiiScreen: React.FunctionComponent = () => {
  return (
    <GameBackground>
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
      {/* <GameOverLayout /> */}
    </GameBackground>
  );
};

export default EdiiScreen;

const MenuBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.15;
  const BOARD_WIDTH = screenWidth * 0.1;

  const handleOpenMenu = useCallback(() => {}, []);

  return (
    <View>
      <RightBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />

      <Pressable
        onPress={handleOpenMenu}
        style={{
          position: 'absolute',
          marginTop: -screenHeight * 0.015,
          borderRadius: 100,
        }}>
        <CloseSvg />
      </Pressable>
    </View>
  );
};
