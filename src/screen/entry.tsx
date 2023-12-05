import {useEffect, useState} from 'react';
import SplashScreen from './splash-screen';
import EdiiScreen from './edii-screen';
import {highScoreAtom} from '../state';
import {useSetAtom} from 'jotai';

export const Entry: React.FunctionComponent = () => {
  const [renderSplash, setRenderSplash] = useState<boolean>(true);

  const setHighScore = useSetAtom(highScoreAtom);

  useEffect(() => {
    const setHighScoreAsync = async () => {};

    setHighScoreAsync();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRenderSplash(false);
    }, 2000);
  }, []);

  return (
    <>
      {renderSplash && <SplashScreen />}
      {!renderSplash && <EdiiScreen />}
    </>
  );
};

export default Entry;
