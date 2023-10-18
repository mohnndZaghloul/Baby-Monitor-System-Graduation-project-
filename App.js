import { StatusBar } from 'expo-status-bar';
//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//SCREENS
import BottomTab from './components/BottomTab';
import Login from './screens/Login';
import Register from './screens/Register';
import HistoryDataProvider from './store/history-context';

const stack = createNativeStackNavigator();

export default function App() {
  return (
  <>
  <StatusBar />
  <HistoryDataProvider>
    <NavigationContainer>
      <stack.Navigator 
      initialRouteName='Login'
        screenOptions={{
        headerBackVisible: false ,
        headerShown: false
        }}>
        <stack.Screen 
          name='Login' 
          component={Login}
          />
        <stack.Screen 
          name='Register' 
          component={Register} 
          />
        <stack.Screen 
          name='BottomTab' 
          component={BottomTab} 
          />
      </stack.Navigator>
    </NavigationContainer>
  </HistoryDataProvider>
  </>
  );
}
