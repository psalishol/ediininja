import {useState} from 'react';
import {View} from 'react-native';
import {RedXTemplate, XTemplate} from '../../assets/svg';
import {screenWidth, screenHeight} from '../../consts';
import {size} from '../../helper';
import {playerLifeAtom} from '../../state';
import {useAtomValue} from 'jotai';

const PlayerLifeDisplay: React.FunctionComponent = () => {
  const playerLife = useAtomValue(playerLifeAtom);

  const LIFE_DIMENSION = size(30);

  return (
    <>
      {(playerLife === 6 || playerLife === 5) && (
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
      )}
      {(playerLife === 4 || playerLife === 3) && (
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
        </View>
      )}

      {(playerLife === 2 || playerLife === 1) && (
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
      )}
      {playerLife === 0 && (
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
          <RedXTemplate height={LIFE_DIMENSION} width={LIFE_DIMENSION} />
        </View>
      )}
    </>
  );
};

export default PlayerLifeDisplay;
