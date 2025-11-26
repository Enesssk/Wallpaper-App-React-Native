import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home/Home';
import Welcome from '../screens/Welcome/Welcome';
import { Routes } from './Routes';
import ImageModal from '../screens/ImageModal/ImageModal';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Welcome"}>
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.ImageModal} options={{presentation: "transparentModal"}} component={ImageModal} />
    </Stack.Navigator>
  )
}

export default MainNavigation;