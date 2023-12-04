import {Text, View} from 'react-native';
import {
  CloseGameMenuButton,
  Liftview,
  QuitGameButton,
  ResumeGameButton,
} from '../component/molecule';
import {PopoverBoardSvg, PopoverNinja} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {MotiView} from 'moti';
import {openGameMenuAtom} from '../state';
import {useAtomValue} from 'jotai';
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

              <CloseGameMenuButton />

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
