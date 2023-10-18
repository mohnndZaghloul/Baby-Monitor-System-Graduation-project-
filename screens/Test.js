import React, { useState } from "react";
import {useNavigation} from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal,Switch, ActivityIndicator, RefreshControl, ScrollView, ToastAndroid, DrawerLayoutAndroid, Vibration} from "react-native";
import { Badge, Button, Input } from "react-native-elements";
import Icon  from "react-native-vector-icons/FontAwesome";
import { AntDesign } from '@expo/vector-icons';

const Test = () =>{
    const [open,setModel] = useState(false);
    const [warrning,setWarrning] = useState(false);
    const [isEnabled,setEnable] = useState(false);
    const [data,setData] = useState("");

    const navigation = useNavigation();

    const navAbout = () =>{
        navigation.navigate('About');
    }
    const navUser = () =>{
        navigation.navigate('User');
    }
    const showToast = () => {
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    };
    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
        'A wild toast appeared!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
        );
    };
    return(
        <View style={styles.container}>
            <Text>Mohannd Zaghloul</Text>
            <View style={styles.screenNav} >
                <Button type='outline' title='custom Alert' onPress={()=>{
                    Alert.alert('Hello','is your name is Mohannd Zaghloul',[
                        {text:'yes', onPress: ()=> console.log('ok')},
                        {text:'no', onPress: ()=> console.log('sorry')}
                    ])
                }}/>
                <View style={styles.modelBtn}>
                    <Button type='outline' title='open model' onPress={()=> setModel(true)}/>
                </View>
                <Modal visible={open}>
                    <View style={styles.model}>
                        <Text>Hello from the model</Text>
                        <View style={styles.modelBtn}>
                            <Button type='outline' style={styles.modelBtn} title='close model' onPress={()=> setModel(false)}/>
                        </View>
                    </View>
                </Modal>
                <View style={{alignItems:'center'}}>
                    <Switch 
                    trackColor={{false:'gray', true:'greenyellow'}}
                    thumbColor={isEnabled ? 'white' : 'white'}
                    ios_backgroundColor='red'
                    onValueChange={setEnable}
                    value={isEnabled}
                    />
                    <ActivityIndicator size='large' color='greenyellow' animating={isEnabled}/>
                    {/* <RefreshControl refreshing={isEnabled} /> */}
                    
                </View>
                <View>
                    <Input 
                    leftIcon={<AntDesign name="home" size={24} color="black" />}
                    placeholder="enter data"
                    onChangeText={(text)=>{setData(text);(parseInt(data))>99?setWarrning(true):null;}}
                    value={data}
                    keyboardType='numeric'
                    maxLength={3}
                    />
                    <Button type='outline' title="Toggle Toast" onPress={() => showToast()} />
                    <Button type='outline'
                        title="Toggle Toast With Gravity & Offset"
                        onPress={() => showToastWithGravityAndOffset()}
                    />
                </View>
                <View>
                    <Button type='outline' title="Vibrate" onPress={()=> Vibration.vibrate()} />
                    <Button type='outline' title="Vibrate for 1s" onPress={()=> Vibration.vibrate(1000)} />
                </View>
                <View>
                    <Text>{data}</Text>
                </View>
                <Modal visible={warrning}>
                    <View style={[styles.model,{backgroundColor:'#cc0000'}]}>
                        <Text>Warrning</Text>
                        <View style={{margin:10,padding:5,borderColor:'black',borderWidth:1}}>
                            <Text style={{color:'white'}}>{data}</Text>
                        </View>
                        <View style={{backgroundColor:'gray'}}>
                            <Button
                                type='outline' 
                                title='close warrning' 
                                onPress={()=> setWarrning(false)}/>
                        </View>
                    </View>
                </Modal>
                <View>
                    <Badge value="3" status="success" />
                    <Badge value="99+" status="error" />
                    <Badge value="500" status="primary" />
                    <Badge value="10" status="warning" />
                </View>
            <TouchableOpacity style={styles.nav} onPress={navAbout}>
                <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav} onPress={navUser}>
                <Text>User</Text>
            </TouchableOpacity>
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    screenNav:{
        margin: 5,
    },
    modelBtn:{
        marginTop: 10,
    },
    model:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    nav:{
        padding: 5,
        backgroundColor: '#f7278b',
        borderColor: 'grey',
        borderWidth: 2,
    },
});

export default Test ;