import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {GameBackground} from '../component/organism';
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
      <GameHeader />
      {/* <GameOverLayout /> */}
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
      <SlashedFruit />
      <PlayerLifeDisplay />
    </View>
  );
};

const LifeBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.15;
  const BOARD_WIDTH = screenWidth * 0.1;
  return (
    <View>
      <LeftBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />
      <View
        style={{
          //   backgroundColor: 'red',
          marginTop: -screenHeight * 0.03,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HeartSvg height={size(45)} width={size(45)} />
        <Text
          style={{
            color: 'white',
            position: 'absolute',
            fontSize: size(20),
            fontWeight: '800',
          }}>
          10
        </Text>
      </View>
    </View>
  );
};

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
