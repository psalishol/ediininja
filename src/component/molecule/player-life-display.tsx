import {useState} from 'react';
import {View} from 'react-native';
import {RedXTemplate, XTemplate} from '../../assets/svg';
import {screenWidth, screenHeight} from '../../consts';
import {size} from '../../helper';
import {PlayerLife} from '../../types';

const PlayerLifeDisplay: React.FunctionComponent = () => {
  const [lifeLeft] = useState<PlayerLife>('1');

  const LIFE_DIMENSION = size(30);

  switch (lifeLeft) {
    case '1':
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'space-around',
            width: screenWidth * 0.11,
            height: screenHeight * 0.17,
            right: screenWidth * 0.04,
          }}>
          <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        </View>
      );
    case '2':
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          justifyContent: 'space-around',
          width: screenWidth * 0.11,
          height: screenHeight * 0.17,
          right: screenWidth * 0.04,
        }}>
        <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
      </View>;
    default:
      return (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'space-around',
            width: screenWidth * 0.11,
            height: screenHeight * 0.17,
            right: screenWidth * 0.04,
          }}>
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
          <XTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        </View>
      );
  }
};

export default PlayerLifeDisplay;
