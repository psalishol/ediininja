import {Text, TouchableOpacity, View} from 'react-native';
import {Liftview} from '../component/molecule';
import {CloseSvg, PopoverBoardSvg, PopoverNinja} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {MotiView} from 'moti';
import {openGameMenuAtom} from '../state';
import {useAtomValue, useSetAtom} from 'jotai';
import {useCallback} from 'react';
import {size} from '../helper';

const MenuLayout: React.FunctionComponent = () => {
  const BOARD_SIZE = screenHeight * 1;

  const openMenu = useAtomValue(openGameMenuAtom);

  return (
    <Liftview
      lift={openMenu}
      bg="grey"
      opacity={0.3}
      useSecondOverlay={true}
      onPressSecondOverlay={() => {}}
      close={openMenu}
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
            <MotiView
              from={{scale: [0.5, 1.05, 1]}}
              style={{alignSelf: 'center'}}>
              <PopoverBoardSvg height={BOARD_SIZE} width={BOARD_SIZE} />

              <View
                style={{
                  position: 'absolute',
                  marginTop: screenHeight * 0.18,
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: screenHeight * 0.13,
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: size(35),
                    fontWeight: '500',
                  }}>
                  Game Pause
                </Text>
              </View>

              <CloseMenuButton />

              <View
                style={{
                  position: 'absolute',
                  marginTop: screenHeight * 0.7,
                  marginLeft: screenWidth * 0.02,
                }}>
                <PopoverNinja height={size(50)} width={size(50)} />
              </View>

              <ResumeGameButton />

              <QuitGameButton />
            </MotiView>
          </View>
        );
      }}
    />
  );
};

export default MenuLayout;

const ResumeGameButton: React.FunctionComponent = () => {
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
        marginTop: screenHeight * 0.37,
      }}>
      <Text style={{color: 'white', fontSize: size(30), fontWeight: '500'}}>
        Resume
      </Text>
    </TouchableOpacity>
  );
};

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
