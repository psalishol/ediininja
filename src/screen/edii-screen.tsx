import {Image, SafeAreaView, Text, View} from 'react-native';
import {GameBackground} from '../component/organism';
import {
  LeftBoardTemplate,
  RedXTemplate,
  RightBoardTemplate,
  ScoreBoardTemplate,
  UncutAppleSvg,
  XTemplate,
} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {CurrentScore, HighScore} from '../component/atom';
import {size} from '../helper';
import {slashImg} from '../assets/img';
import {SlashedFruit} from '../component/molecule';
import {PlayerLife} from '../types';
import {useState} from 'react';

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
      <SlashedFruit />
      <PlayerLifeDisplay />
    </View>
  );
};

const PlayerLifeDisplay: React.FunctionComponent = () => {
  const [lifeLeft] = useState<PlayerLife>('3');

  const LIFE_DIMENSION = size(30);

  switch (lifeLeft) {
    case '1':
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'red',
            justifyContent: 'space-around',
            width: screenWidth * 0.11,
            height: screenHeight * 0.17,
            right: screenWidth * 0.04,
          }}>
          <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        </View>
      );
    case '2':
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          backgroundColor: 'red',
          justifyContent: 'space-around',
          width: screenWidth * 0.11,
          height: screenHeight * 0.17,
          right: screenWidth * 0.04,
        }}>
        <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
      </View>;
    default:
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: 'red',
            justifyContent: 'space-around',
            width: screenWidth * 0.11,
            height: screenHeight * 0.17,
            right: screenWidth * 0.04,
          }}>
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        </View>
      );
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'red',
        justifyContent: 'space-around',
        width: screenWidth * 0.11,
        height: screenHeight * 0.17,
        right: screenWidth * 0.04,
      }}>
      <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
      <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
      <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
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
