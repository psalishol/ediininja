import {TouchableOpacity, Text} from 'react-native';
import {screenHeight, screenWidth} from '../../consts';
import {size} from '../../helper';
import {useCallback} from 'react';
import {openGameMenuAtom} from '../../state';
import {useSetAtom} from 'jotai';

const ResumeGameButton: React.FunctionComponent = () => {
  const BOX_HEIGHT = screenHeight * 0.1;
  const BOX_WIDTH = screenWidth * 0.3;

  const setOpenGameMenu = useSetAtom(openGameMenuAtom);

  const handleResumeGame = useCallback(() => {
    setOpenGameMenu(false);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleResumeGame}
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

export default ResumeGameButton;
