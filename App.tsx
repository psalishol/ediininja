import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';
import {Entry} from './src/screen';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PortalProvider>
        <Entry />
      </PortalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
