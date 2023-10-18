import { Alert, Image, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState , useEffect } from 'react'
import { Button, Input } from 'react-native-elements';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constant/Colors';


const Login = ({navigation}) => {
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');
    const [logUser,setLogName] = useState('');
    const [logPass,setLogPass] = useState('');

    useEffect(() => {
        getData();
    },[user,pass]);

    const getData = () => {
        try {
            return AsyncStorage.getItem("userData")
                .then( value => {
                    if(value != null){
                        let user = JSON.parse(value);
                        setLogName(user.user);
                        setLogPass(user.password);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }


    const login = async () =>{
        if(user && pass){
            await getData();
            if(user == logUser && pass == logPass){
                navigation.navigate('BottomTab');
            }
            else {
                setUser('');
                setPass('');
                Alert.alert('Wrong','User Name or Password is Wrong');
            }    
        }
        else Alert.alert('Empty Field','User Name or Password has Empty Value');
    }
    
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.container}>
                <Image 
                    style={{width:250,height:250}}
                    source={require('../assets/images/WhatsApp_Image_2023-07-03_at_12.53.29_AM-removebg-preview.png')}
                />
                <Text style={styles.bigTitle}>Login</Text>
                <View style={styles.login}>
                    <Input 
                        placeholder='User Name'
                        leftIcon={<Icon name="user" size={24} color="black" />}
                        onChangeText={(value)=>setUser(value)}
                        value={user}
                    />
                    <Input 
                        placeholder='Password'
                        leftIcon={<Icon name="lock" size={24} color="black" />}
                        secureTextEntry
                        onChangeText={(value)=>setPass(value)}
                        value={pass}
                    />
                </View>
                <View style={styles.loginBtn}>
                    <Button 
                        title='Login' 
                        raised
                        titleStyle={{color:Colors.darkColor}}
                        buttonStyle={{backgroundColor:Colors.secColor}}
                        onPress={login}
                    />
                </View >
                <View style={styles.loginBtn}>
                    <Button 
                        type='clear' 
                        title='Register' 
                        titleStyle={{color:Colors.darkColor}}
                        onPress={() => navigation.navigate('Register')}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login;
