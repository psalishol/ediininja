import {useAtomValue} from 'jotai';
import {MotiView} from 'moti';
import {Text} from 'react-native';
import {size} from '../../helper';
import {startingGameAtom} from '../../state';

const LobbyNinjaText: React.FunctionComponent = () => {
  const startingGame = useAtomValue(startingGameAtom);

  return (
    <MotiView from={{opacity: [0.8, 1, 0.7, 1]}}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: size(30),
          fontWeight: '800',
        }}>
        {startingGame ? 'Starting game' : 'Ready to be a Ninja?'}
      </Text>
    </MotiView>
  );
};

export default LobbyNinjaText;
