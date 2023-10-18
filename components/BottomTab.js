import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Account from '../screens/Account';
import History from '../screens/History';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Colors';



const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarShowLabel:false,
            tabBarStyle:{
                height:55,
                borderRadius: 30,
                margin:20,
                marginVertical:8
            },
            tabBarIcon: ({focused})=>{
                let iconName;
                let background;
                if(route.name === 'Home'){
                    iconName = focused ? 'ios-home-sharp':'ios-home-outline';
                    background = focused ? Colors.darkColor :'#fff';
                }else if (route.name === 'History'){
                    iconName = focused ? 'time-sharp':'time-outline';
                    background = focused ? Colors.darkColor :'#fff';
                }
                else if (route.name === 'Account'){
                    iconName = focused ? 'person-circle-sharp':'person-circle-outline';
                    background = focused ? Colors.darkColor :'#fff';
                }
                return <Icon name={iconName} size={28} color={Colors.secColor} style={{backgroundColor:background,borderRadius:20,padding:8}} />
            }
        })}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='History' 
            component={History} 
            options={{headerShown: true,headerTitleAlign:'center',headerStyle:{backgroundColor:Colors.secColor}}} 
            />
            <Tab.Screen name='Account' 
                component={Account}
                options={{headerShown: true,headerTitleAlign:'center',headerStyle:{backgroundColor:Colors.secColor}}}
            />
        </Tab.Navigator>
    )
}

export default BottomTab
