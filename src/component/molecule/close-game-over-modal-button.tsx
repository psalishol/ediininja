import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {CloseSvg} from '../../assets/svg';
import {screenHeight, screenWidth} from '../../consts';

const CloseGameOverModalButton: React.FunctionComponent = () => {
  const SIZE = screenHeight * 0.15;

  const handleCloseModal = useCallback(() => {}, []);

  return (
    <TouchableOpacity
      onPress={handleCloseModal}
      activeOpacity={0.8}
      style={{
        height: SIZE * 0.8,
        width: SIZE * 0.8,
        position: 'absolute',
        right: 0,
        marginTop: screenHeight * 0.09,
        marginRight: -screenWidth * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CloseSvg height={SIZE} width={SIZE} />
    </TouchableOpacity>
  );
};

export default CloseGameOverModalButton;
