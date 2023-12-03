import {useAtomValue} from 'jotai';
import {MotiText} from 'moti';
import {size} from '../../helper';
import {startingGameAtom} from '../../state';

const SliceFruitText: React.FunctionComponent = () => {
  const startingGame = useAtomValue(startingGameAtom);

  if (startingGame) {
    return <></>;
  }

  return (
    <MotiText
      from={{translateY: [size(5), 0, size(5), 0]}}
      transition={{type: 'timing', duration: 500, loop: true, delay: 1000}}
      style={{color: 'gold', textAlign: 'center', marginTop: size(30)}}>
      Slice fruit to start
    </MotiText>
  );
};

export default SliceFruitText;
