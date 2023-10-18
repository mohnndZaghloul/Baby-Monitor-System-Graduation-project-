import { Text, View } from 'react-native';
import React , { useState } from 'react';
import styles from '../screens/styles';
import Colors from '../constant/Colors';
import { Avatar , Input , Button , Overlay } from 'react-native-elements';

const Photo = () => {
    const [visible,setVisible] = useState(false);
    const [url,setUrl] = useState('');
    
    const submitUrl = () =>{
        console.log(url);
        toggleOverlay();
        setUrl('');
    }
    const diaplay = () => {
        return(
            <Avatar 
                containerStyle={styles.userImage}
                source={{uri:'https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'}}
                icon={{name:'user', type:'font-awesome',color:Colors.secColor}}
                rounded
                size={100}>
                <Avatar.Accessory 
                onPress={toggleOverlay}
                size={26} />
            </Avatar>
        )
    }
    const toggleOverlay = () => {
        setVisible(!visible);
    }

  return (
    <>
        {diaplay()}
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay} >
            <View style={styles.inner}>
                <Text style={{fontSize:24}}>Image URL</Text>
                <Input
                    placeholder="URL"
                    onChangeText={(text) => setUrl(text)}
                    value={url}
                />
                <Button 
                    title='Edit'
                    titleStyle={{color:Colors.darkColor}}
                    buttonStyle={{backgroundColor:Colors.secColor,width:200}}
                    onPress={submitUrl}
                />
            </View>
        </Overlay>
    </>
  )
}

export default Photo;
