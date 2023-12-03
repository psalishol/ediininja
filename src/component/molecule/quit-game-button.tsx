import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {screenHeight, screenWidth} from '../../consts';
import {size} from '../../helper';

const QuitGameButton: React.FunctionComponent = () => {
  const BOX_HEIGHT = screenHeight * 0.1;
  const BOX_WIDTH = screenWidth * 0.3;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        position: 'absolute',
        backgroundColor: '#1AD3FF',
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: size(10),
        marginTop: screenHeight * 0.55,
      }}>
      <Text style={{color: 'white', fontSize: size(30), fontWeight: '500'}}>
        Quit
      </Text>
    </TouchableOpacity>
  );
};

export default QuitGameButton;
