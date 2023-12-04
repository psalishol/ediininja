import {useSetAtom} from 'jotai';
import {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {CloseSvg} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';
import {openGameMenuAtom} from '../../state';

const CloseGameMenuButton: React.FunctionComponent = () => {
  const SIZE = screenHeight * 0.15;

  const setOpenMenu = useSetAtom(openGameMenuAtom);

  const handleCloseMenu = useCallback(async () => {
    try {
      setOpenMenu(true);

      SoundPlayer.playSoundFile('click1', 'mpg');
    } catch (error) {}
  }, []);

  return (
    <TouchableOpacity
      onPress={handleCloseMenu}
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

export default CloseGameMenuButton;
