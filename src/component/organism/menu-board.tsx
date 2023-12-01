import {useCallback} from 'react';
import {View, Pressable} from 'react-native';
import {RightBoardTemplate, CloseSvg} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';

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

export default MenuBoard;
