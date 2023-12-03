import {useAtomValue} from 'jotai';
import {MotiView} from 'moti';
import {AppleSvg, AppleCutSvg} from '../../assets/svg';
import {screenHeight, bezierEasing} from '../../consts';
import {size} from '../../helper';
import {startingGameAtom} from '../../state';

const LobbySliceApple: React.FunctionComponent = () => {
  const startingGame = useAtomValue(startingGameAtom);

  return (
    <>
      {!startingGame && (
        <MotiView
          from={{rotate: '0deg'}}
          animate={{rotate: '360deg'}}
          transition={{
            loop: true,
            type: 'timing',
            duration: 2000,
            repeatReverse: false,
          }}
          style={{marginTop: size(40), elevation: 50}}>
          <AppleSvg height={size(100)} />
        </MotiView>
      )}

      {startingGame && (
        <MotiView
          from={{translateY: 0}}
          animate={{translateY: screenHeight}}
          transition={{type: 'timing', duration: 1200, easing: bezierEasing}}
          style={{marginTop: size(40), elevation: 50}}>
          <AppleCutSvg height={size(100)} />
        </MotiView>
      )}
    </>
  );
};

export default LobbySliceApple;
