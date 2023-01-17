
import Introduction from './screens/Introduction';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Select from './screens/Select';
import UserDashBoard from './screens/UserDashBoard';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Introduction" component={Introduction} options={{animation: 'slide_from_bottom', headerShown: false,}} />
      <Stack.Screen name="selects" component={UserDashBoard} options={{ animation: 'slide_from_bottom', headerShown: false,}}  />
      <Stack.Screen name="login" component={Login} options={{ animation: 'slide_from_bottom', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}


