import { Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import moment from "moment";

const Clock = () => {
    const [date,setDate] = useState(moment().format('MMM Do  -  LTS'));
    
    useEffect(() => {
        setInterval(() => {
            setDate(moment().format('MMM Do  -  LTS'));
        }, 1000);
    },[])
    return (
        <View>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{date}</Text>
        </View>
    )
}

export default Clock ;