import {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RightBoardTemplate, CloseSvg} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';
import {openGameMenuAtom} from '../../state';
import {useSetAtom} from 'jotai';
import {MenuLayout} from '../../layout';
import SoundPlayer from 'react-native-sound-player';
import {size} from '../../helper';

const MenuBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.15;
  const BOARD_WIDTH = screenWidth * 0.1;

  const setOpenMenu = useSetAtom(openGameMenuAtom);

  const handleOpenMenu = useCallback(async () => {
    try {
      setOpenMenu(true);

      SoundPlayer.playSoundFile('click1', 'mpg');
    } catch (error) {}
  }, []);

  const CLOSE_SVG_SIZE = size(80);

  return (
    <View>
      <RightBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleOpenMenu}
        style={{
          position: 'absolute',
          marginTop: -screenHeight * 0.005,
          justifyContent: 'center',
          left: 0,
          height: BOARD_HEIGHT,
          width: BOARD_WIDTH,
        }}>
        <CloseSvg width={CLOSE_SVG_SIZE} height={CLOSE_SVG_SIZE} />
      </TouchableOpacity>

      <MenuLayout />
    </View>
  );
};

export default MenuBoard;
