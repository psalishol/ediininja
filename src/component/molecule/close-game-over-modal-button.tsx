import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {CloseSvg} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';
import SoundPlayer from 'react-native-sound-player';
import {useSetAtom} from 'jotai';
import {resetGameAtom} from '../../state';

const CloseGameOverModalButton: React.FunctionComponent = () => {
  const SIZE = screenHeight * 0.15;

  const resetGame = useSetAtom(resetGameAtom);

  const handleCloseModal = useCallback(async () => {
    try {
      resetGame();

      SoundPlayer.playSoundFile('background1', 'mpeg');
    } catch (error) {
      console.log('error quiting game', error);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={handleCloseModal}
      activeOpacity={0.8}
      style={{
        height: SIZE * 0.8,
        width: SIZE * 0.8,
        position: 'absolute',
        right: 0,
        marginTop: screenHeight * 0.09,
        marginRight: -screenWidth * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CloseSvg height={SIZE} width={SIZE} />
    </TouchableOpacity>
  );
};

export default CloseGameOverModalButton;
