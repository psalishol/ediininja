import React, {useEffect, memo, useState} from 'react';
import {StyleSheet} from 'react-native';

import {MotiText} from 'moti';
import {bezierEasing} from '../../consts';

interface Props {
  value: number | string;
}

const ScalingScoreText: React.FunctionComponent<Props> = ({value}) => {
  const [prevVal, setPrevVal] = useState<number | string>();
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!prevVal) {
      setPrevVal(value);
      setAnimate(true);
    } else {
      if (prevVal != value) {
        console.log('trying to animate');
        setAnimate(true);
        setPrevVal(value);
      }
    }
  }, [value]);

  console.log(prevVal, animate);

  return (
    <MotiText
      style={styles.score}
      from={{scale: 1.5}}
      animate={{scale: animate ? 1.5 : 1}}
      transition={{type: 'timing', duration: 200, easing: bezierEasing}}
      onDidAnimate={() => setAnimate(false)}>
      {value}
    </MotiText>
  );
};

export default memo<Props>(ScalingScoreText);

const styles = StyleSheet.create({
  score: {
    fontWeight: '900',
    fontSize: 20,
    color: 'white',
  },
});
