import {MotiText} from 'moti';
import React, {useCallback, useState} from 'react';
import {linearEasing} from '../../consts';
import {size} from '../../helper';

interface Props {
  point: number;
}

const SlicedFoodPointText: React.FunctionComponent<Props> = ({point}) => {
  const [animated, setAnimated] = useState<boolean>(false);

  const handleAnimated = useCallback(() => {
    setAnimated(true);
  }, []);

  if (animated) {
    return <></>;
  }

  return (
    <MotiText
      onDidAnimate={handleAnimated}
      from={{translateY: size(40), opacity: 0}}
      animate={{translateY: 0, opacity: 1}}
      transition={{type: 'timing', duration: 1000, easing: linearEasing}}
      style={{color: 'white', position: 'absolute', fontSize: size(30)}}>
      +{point}
    </MotiText>
  );
};

export default SlicedFoodPointText;
