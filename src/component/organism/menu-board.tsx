import {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RightBoardTemplate, CloseSvg} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';
import {openGameMenuAtom} from '../../state';
import {useSetAtom} from 'jotai';

const MenuBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.15;
  const BOARD_WIDTH = screenWidth * 0.1;

  const setOpenMenu = useSetAtom(openGameMenuAtom);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true);
  }, []);

  return (
    <View>
      <RightBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleOpenMenu}
        style={{
          position: 'absolute',
          marginTop: -screenHeight * 0.015,
          borderRadius: 100,
        }}>
        <CloseSvg />
      </TouchableOpacity>
    </View>
  );
};

export default MenuBoard;
