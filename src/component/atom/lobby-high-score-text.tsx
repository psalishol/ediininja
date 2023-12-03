import {useAtomValue} from 'jotai';
import {Text} from 'react-native';
import {screenWidth, screenHeight} from '../../consts';
import {size} from '../../helper';
import {highScoreAtom, startingGameAtom} from '../../state';

const LobbyHighScoreText: React.FunctionComponent = () => {
  const highScore = useAtomValue(highScoreAtom);
  const startingGame = useAtomValue(startingGameAtom);

  if (startingGame) {
    return <></>;
  }

  return (
    <Text
      style={{
        color: 'white',
        fontSize: size(20),
        fontWeight: '600',
        marginLeft: screenWidth * 0.05,
        marginTop: screenHeight * 0.15,
      }}>
      high score: {highScore}{' '}
    </Text>
  );
};

export default LobbyHighScoreText;
