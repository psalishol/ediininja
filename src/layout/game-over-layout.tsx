import {Text, View} from 'react-native';
import {CloseGameOverModalButton, Liftview} from '../component/molecule';
import {PopoverBoardSvg, PopoverEdiiSvg, PopoverNinja} from '../assets/svg';
import {screenHeight, screenWidth} from '../consts';
import {MotiView} from 'moti';
import {currentScoreAtom, gameOverAtom, highScoreAtom} from '../state';
import {useAtomValue} from 'jotai';
import {size} from '../helper';

const GameOverLayout: React.FunctionComponent = () => {
  const BOARD_SIZE = screenHeight * 1;

  const gameOver = useAtomValue(gameOverAtom);

  const highScore = useAtomValue(highScoreAtom);
  const currentScore = useAtomValue(currentScoreAtom);

  const newHighScoreRecord = currentScore >= highScore && currentScore > 0;

  return (
    <Liftview
      lift={gameOver}
      bg="grey"
      opacity={0.3}
      useSecondOverlay={true}
      onPressSecondOverlay={() => {}}
      close={gameOver}
      renderView={() => {
        return (
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              justifyContent: 'center',
            }}>
            <MotiView
              from={{scale: [0.5, 1.05, 1]}}
              style={{alignSelf: 'center'}}>
              <PopoverBoardSvg height={BOARD_SIZE} width={BOARD_SIZE} />

              <View
                style={{
                  position: 'absolute',
                  marginTop: screenHeight * 0.18,
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: screenHeight * 0.13,
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: size(50),
                    fontWeight: '500',
                  }}>
                  {newHighScoreRecord ? 'New High Score' : 'Game Over'}
                </Text>
              </View>
              {newHighScoreRecord && (
                <View
                  style={{
                    position: 'absolute',
                    marginTop: screenHeight * 0.35,
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: screenHeight * 0.13,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: size(50),
                      fontWeight: '500',
                    }}>
                    {highScore}
                  </Text>
                </View>
              )}

              <CloseGameOverModalButton />

              <View
                style={{
                  position: 'absolute',
                  marginTop: screenHeight * 0.7,
                  marginLeft: screenWidth * 0.3,
                }}>
                <PopoverNinja height={size(50)} width={size(50)} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  marginTop: screenHeight * 0.43,
                  marginLeft: screenWidth * 0.04,
                }}>
                <PopoverEdiiSvg height={size(220)} width={size(220)} />
              </View>
            </MotiView>
          </View>
        );
      }}
    />
  );
};

export default GameOverLayout;
