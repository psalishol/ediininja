import {View, Image} from 'react-native';
import {slashImg} from '../../assets/img';
import {UncutAppleSvg} from '../../assets/svg';
import {screenWidth, screenHeight} from '../../consts';

const SlashedFruit: React.FunctionComponent = () => {
  return (
    <View
      style={{
        position: 'absolute',
        marginLeft: screenWidth * 0.152,
        marginTop: screenHeight * 0.013,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        elevation: 40,
        shadowColor: 'white',
        shadowRadius: 10,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.9,
        borderRadius: 100,
      }}>
      <UncutAppleSvg height={screenHeight * 0.2} width={screenHeight * 0.2} />
      <Image
        resizeMode="contain"
        style={{
          position: 'absolute',
          height: 30,
          transform: [{rotate: '80deg'}],
        }}
        source={slashImg}
      />
    </View>
  );
};

export default SlashedFruit;
