import React, {useState , useEffect} from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

import styles from "./styles";
import Colors from "../constant/Colors";
import Photo from "../components/Photo";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAge } from "../components/date";


const Account = ({navigation}) =>{
    const [babyData, setBabyData] = useState({
        name: '',
        birthday: '',
        gender: ''
    })

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        try {
            AsyncStorage.getItem("userData")
                .then( value =>{
                    if(value != null){
                        let user = JSON.parse(value);
                        setBabyData((prev) => {
                            return{
                                name: user.babyName,
                                birthday: user.birthday,
                                gender: user.gender
                            }
                        });
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View style={{alignItems:'center',justifyContent:'space-evenly',flex:1}}>
            <View style={{alignItems:'center'}}>
                <Photo />
                <Text style={styles.title}>{babyData.name}</Text>
                <Text style={styles.secTitle}>{babyData.birthday}</Text>
                <Text style={styles.secTitle}>{getAge(babyData.birthday)}</Text>
                <Text style={styles.secTitle}>{babyData.gender}</Text>
            </View>
            <View style={styles.loginBtn}>
                <Button title='Log Out'
                raised
                titleStyle={{color:Colors.darkColor}}
                buttonStyle={{backgroundColor:Colors.secColor}}
                onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
        )};

export default Account ;