import { Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import styles from './styles';
import Colors from '../constant/Colors';
import ICon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';

import init from 'react_native_mqtt';
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Notification from 'expo-notifications';
import * as Permission from 'expo-permissions';

const Home = () => {
  const [heartColor,setHC] = useState('');
  const [tempratureColor,setTempC] = useState('');
  const [oxColor,setOXC] = useState('');
  const [babyStateC,setBabyStateC] = useState('');
  const [babyState,setBabyState] = useState('Readings Are Normal');
  const [heartRate,setHR] = useState(80);
  const [temprature,setTemp] = useState(37);
  const [OxygenLevel,setOXL] = useState(98);

  useEffect(() => {
    if(heartRate > 60 && heartRate < 220){
      setHC(Colors.secColor);
    }else{
      setBabyState('Heart rate is not regular');
      setHC(Colors.dangerColor);
    }

    if(temprature < 38 && temprature > 35){
      setTempC(Colors.secColor);
    }else{
      setBabyState('Temprature is not regular');
      setTempC(Colors.dangerColor);
    }

    if(OxygenLevel > 80){
      setOXC(Colors.secColor);
    }else{
      setBabyState('Oxygen Level is not regular');
      setOXC(Colors.dangerColor);
    }

    
    if(heartColor == Colors.dangerColor || tempratureColor == Colors.dangerColor || oxColor == Colors.dangerColor){
      setBabyStateC(Colors.dangerColor);
      handleNotification(babyState)
    }else{
      setBabyStateC(Colors.secColor);
    }
},[heartRate,OxygenLevel,temprature,babyState])

Notification.setNotificationHandler({
  handleNotification: async () => {
      return{
          shouldPlaySound: true ,
          shouldShowAlert: true ,
      };
  },
});

const handleNotification = (reading) => {
  Notification.scheduleNotificationAsync({
      content:{
          title: 'Warrning',
          body: reading,
      },
      trigger:{
          seconds: 1,
      }
  });
}
useEffect(() => {
  Permission.getAsync(Permission.NOTIFICATIONS)
  .then((response) => {
      if(response.status !== "granted"){
          return Permission.askAsync(Permission.Notification);
      }
      return response
  })
  .then((response) => {
      if(response.status !== "granted"){
          return
      }
  });
},[]);

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    sync : {}
});    
    const options = {
        host: 'c6e8a9cf417d4a71a4f7e55134f2ddf0.s2.eu.hivemq.cloud',
        port: 8884,
        protocol: 'mqtts',
        path:'my/test/lol',
        username: 'device_1',
        password: '11102000.Mel',
    };

    const onMessageArrived =  (message)=> {
        console.log('onMessageArrived: '+message.payloadString);
        setHR(JSON.parse(message.payloadString).heartRate);
        setTemp(JSON.parse(message.payloadString).temprature);
        setOXL(JSON.parse(message.payloadString).oxygenLevel);
        if(message.payloadString == 'led1:pong'){
            onLED1Connect();
        }
    }
    const onLED1Connect = () =>{
        console.log('led connected');
    }
    const onConnect = () => {
        console.log('onConnect');
        client.subscribe('my/test/lol',{ qos: 0, onSuccess:()=>console.log('yes'),onFailure:()=>console.log('no') });
    }
    const client = new Paho.MQTT.Client(options.host, options.port, options.path);
    client.onMessageArrived = onMessageArrived;
    client.connect({onSuccess:onConnect, useSSL:true, userName: options.username, password:options.password})




  return (
    <View style={styles.home}>
      {/* Camera */}
      <View style={styles.camera}>
        <Text style={{fontSize:32,letterSpacing:3,padding:15,backgroundColor:Colors.secColor}}>Camera</Text>
      </View>
      <View style={[styles.stateText,{backgroundColor:babyStateC}]} >
        <Text style={{fontSize:16,letterSpacing:1.5,}}>{babyState}</Text>
      </View>
      {/* readings */}
      <View style={styles.mainView}>
        <View style={{alignItems:'center'}}>
          <View style={[styles.icon,{borderColor:tempratureColor}]}>
            <View style={styles.dot}></View>
            <Icon name='temperature-high' size={32} color={tempratureColor} />
          </View>
          <View style={styles.reading}>
            <Text style={styles.readingTxt}>{temprature}</Text><Text>°C</Text>
          </View>
          <Text>Temprature</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <View style={[styles.icon,{borderColor:heartColor}]}>
            <View style={styles.dot}></View>
            <Icon name='heartbeat' size={32} color={heartColor} />
          </View>
          <View style={styles.reading}>
            <Text style={styles.readingTxt}>{heartRate}</Text><Text>BPM</Text>
          </View>
          <Text>Heart Rate</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <View style={[styles.icon,{borderColor:oxColor}]}>
            <Icon name='lungs' size={32} color={oxColor} />
          </View>
          <View style={styles.reading}>
            <Text style={styles.readingTxt}>{OxygenLevel}%</Text><Text>O2</Text>
          </View>
          <Text>Oxygen Level</Text>
        </View>
      </View>
      <View style={styles.charge}>
        <View style={{flexDirection:'row', paddingBottom:10}}>
          <Icon name='angle-down' size={20} style={{paddingEnd:6}}/>
          <Text style={{letterSpacing:1}}>Baby's Sock</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <ICon name='wifi' size={30} color={Colors.secColor} style={{paddingHorizontal:10}}/>
          <ICon name='battery-half-sharp' size={30} color={Colors.secColor} style={{paddingHorizontal:10}}/>
        </View>
      </View>
    </View>
  )
}

export default Home ;