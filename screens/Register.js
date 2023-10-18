import { Alert, Text, View , TouchableWithoutFeedback , Keyboard, Image } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import { Button, CheckBox, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Register = ({navigation}) => {
  const [account, setAccount] = useState({
    user: '',
    password: '',
    babyName: '',
    birthday: '',
    gender: ''
  });
  
  function inputChangedHandler(inputIdentifier, enteredValue) {
    setAccount((prev) => {
      return {
        ...prev,
        [inputIdentifier]: enteredValue
      };
    })
  }

  const signUp = async () => {
    if(account.user && account.password && account.babyName && account.birthday && account.gender){
      try {
        const userData = { ...account }
        await AsyncStorage.setItem("userData", JSON.stringify(userData));
        navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
    }else{
      Alert.alert('Wrong','There Is an Empty Value');
    }
  }

  return (
  <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <Image 
          style={{width:120,height:120}}
          source={require('../assets/images/dating-app-logo-heart-icon-design-template-c7071a8bea01b1d2f2151f2ff2f28549_screen-removebg-preview.png')}
      />
      <Text style={styles.bigTitle}>Register</Text>
      <View style={styles.login}>
        <Input 
          placeholder="User Name"
          leftIcon={<Icon name="user" size={24} color={Colors.darkColor} style={{paddingHorizontal:4}} />}
          onChangeText={inputChangedHandler.bind(this,'user')}
          value={account.user}
        />
        <Input 
          placeholder="Password"
          leftIcon={<Icon name="unlock" size={24} color={Colors.darkColor} style={{paddingHorizontal:4}} />}
          secureTextEntry
          onChangeText={inputChangedHandler.bind(this,'password')}
          value={account.password}
        />
        <Text style={styles.bigTitle}>Baby's Informations</Text>
        <Input 
          placeholder="Baby's Name"
          leftIcon={<Icon name="baby" size={24} color={Colors.darkColor} style={{paddingHorizontal:4}} />}
          onChangeText={inputChangedHandler.bind(this,'babyName')}
          value={account.babyName}
        />
        <Input 
          placeholder="Baby's birthday"
          keyboardType='numeric'
          maxLength={10}
          rightIcon={<Text style={{fontWeight:'400',fontSize:20}} >YYYY-MM-DD</Text>}
          leftIcon={<Icon name="calendar-alt" size={24} color={Colors.darkColor} style={{paddingHorizontal:4}} />}
          onChangeText={inputChangedHandler.bind(this,'birthday')}
          value={account.birthday}
        />
        <View style={styles.gender}>
          <CheckBox
            checkedColor={Colors.secColor}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title={'male'} 
            checked={account.gender === 'male'}
            onPress={inputChangedHandler.bind(this,'gender','male')}
            containerStyle={{backgroundColor:'transparent'}} 
          />
          <CheckBox 
            checkedColor={Colors.secColor}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title={'female'} 
            checked={account.gender === 'female'}
            onPress={inputChangedHandler.bind(this,'gender','female')}
            containerStyle={{backgroundColor:'transparent'}} 
          />
        </View>
        <Button 
          title={'Sign up'} 
          raised
          titleStyle={{color:Colors.darkColor}}
          buttonStyle={{backgroundColor:Colors.secColor}}
          onPress={signUp}
        />
      </View>
    </View>
  </TouchableWithoutFeedback>
  )
}

export default Register
