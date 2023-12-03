import { useSetAtom } from "jotai";
import { MotiText } from "moti";
import { useState, useCallback, useEffect } from "react";
import { bezierEasing, screenHeight } from "../../consts";
import { size } from "../../helper";
import { startGameAtom, gameCountdownStartAtom } from "../../state";

const CountDownToStartText: React.FunctionComponent = () => {
  const [count, setCount] = useState<number>(3);
  const [animate, setAnimate] = useState<boolean>(true);

  const setStartGame = useSetAtom(startGameAtom);
  const setGameCountingDown = useSetAtom(gameCountdownStartAtom);

  const handleDidAnimate = useCallback(() => {
    if (count == 0) {
      setStartGame(true);
      setGameCountingDown(false);
    } else {
      setAnimate(false);
    }
  }, [count]);

  useEffect(() => {
    setTimeout(() => {
      setCount(2);
      setAnimate(true);
      setTimeout(() => {
        setCount(1);
        setAnimate(true);
        setTimeout(() => {
          setCount(0);
          setAnimate(true);
        }, 1500);
      }, 1500);
    }, 1500);
  }, []);

  return (
    <MotiText
      onDidAnimate={handleDidAnimate}
      from={{scale: 1, opacity: 0}}
      animate={{scale: animate ? 2 : 1, opacity: animate ? 1 : 0}}
      transition={{type: 'timing', duration: 700, easing: bezierEasing}}
      style={{
        color: 'gold',
        fontSize: size(40),
        fontWeight: '600',
        marginTop: -screenHeight * 0.05,
      }}>
      {count}
    </MotiText>
  );
};

export default CountDownToStartText;
