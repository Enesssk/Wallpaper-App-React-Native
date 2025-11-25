import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import globalStyle from './assets/globalStyle';


const App = () => {
  return (
    <GestureHandlerRootView style={globalStyle.flex}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <MainNavigation/>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}



export default App;
