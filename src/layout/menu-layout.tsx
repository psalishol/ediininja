import {Text, Touchable, TouchableOpacity, View} from 'react-native';
import {Liftview, Overlay} from '../component/molecule';
import {CloseSvg, PopoverBoardSvg} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {MotiView} from 'moti';
import {openGameMenuAtom} from '../state';
import {useSetAtom} from 'jotai';
import {useCallback} from 'react';

const MenuLayout: React.FunctionComponent = () => {
  const BOARD_SIZE = screenHeight * 1;
  return (
    <Liftview
      lift={true}
      bg="grey"
      opacity={0.3}
      close={true}
      renderView={() => {
        return (
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              justifyContent: 'center',
            }}>
            <MotiView style={{alignSelf: 'center'}}>
              <PopoverBoardSvg height={BOARD_SIZE} width={BOARD_SIZE} />

              <CloseMenuButton />
            </MotiView>
          </View>
        );
      }}
    />
  );
};

export default MenuLayout;

const CloseMenuButton: React.FunctionComponent = () => {
  const SIZE = screenHeight * 0.15;

  const setOpenMenu = useSetAtom(openGameMenuAtom);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
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
