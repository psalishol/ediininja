import EdiiScreen from './src/screen/edii-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PortalProvider>
        <EdiiScreen />
      </PortalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
