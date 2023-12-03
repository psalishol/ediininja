import {View} from 'react-native';
import {PopoverBoardSvg, PopoverNinja} from '../assets/svg';
import {
  LobbyNinjaText,
  SliceFruitText,
  LobbyHighScoreText,
} from '../component/atom';
import {LobbySliceApple, StartGameButton} from '../component/molecule';
import {screenWidth, screenHeight} from '../consts';
import {size} from '../helper';
import React from 'react';

const EdiiLobbyLayout: React.FunctionComponent = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: size(20),
      }}>
      <PopoverBoardSvg />

      <View
        style={{
          position: 'absolute',
          marginLeft: screenWidth * 0.6,
          marginTop: screenHeight * 0.65,
        }}>
        <PopoverNinja height={size(100)} width={100} />
      </View>

      <View
        style={{
          position: 'absolute',
          marginTop: size(70),
          width: screenWidth * 0.6,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <LobbyNinjaText />

        <LobbySliceApple />

        <StartGameButton />

        <SliceFruitText />

        <LobbyHighScoreText />
      </View>
    </View>
  );
};

export default EdiiLobbyLayout;
