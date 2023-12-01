import {View, Text} from 'react-native';
import {LeftBoardTemplate, HeartSvg} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';
import {size} from '../../helper';

const LifeBoard: React.FunctionComponent = () => {
  const BOARD_HEIGHT = screenHeight * 0.15;
  const BOARD_WIDTH = screenWidth * 0.1;
  return (
    <View>
      <LeftBoardTemplate height={BOARD_HEIGHT} width={BOARD_WIDTH} />
      <View
        style={{
          marginTop: -screenHeight * 0.03,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HeartSvg height={size(45)} width={size(45)} />
        <Text
          style={{
            color: 'white',
            position: 'absolute',
            fontSize: size(20),
            fontWeight: '800',
          }}>
          10
        </Text>
      </View>
    </View>
  );
};

export default LifeBoard;
