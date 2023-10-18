import { useContext } from "react";
import { View, Text, FlatList, Dimensions} from "react-native";
import { Badge } from "react-native-elements";
import styles from "./styles";

import {LineChart} from "react-native-chart-kit";

import Clock from "../components/Clock";
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from "../constant/Colors";
import moment from "moment";

import { HistoryContext } from "../store/history-context";

const History = () =>{

    //CONTEXT API ARRAY OF OBJECTS
    const objCtx = useContext(HistoryContext);
    //RENDERED ITEMS IN FLATLIST
    const renderItems = ({item}) => {
        const stateColor = item.childState.toLowerCase() == 'awake'?'gray':item.childState.toLowerCase() == 'light'?'orange':item.childState.toLowerCase() == 'deep'?'yellowgreen':Colors.dangerColor;
        return(
        <View style={styles.sleepState}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Badge badgeStyle={{backgroundColor:stateColor}}/>
                <Text style={{paddingHorizontal:8}}>{item.childState}</Text>
                <Text style={{color:'#aaa'}}>{item.time}</Text>
            </View>
            <View>
                <Text>{item.clock}</Text>
            </View>
        </View>
        )
    }
    return(
        <View style={styles.home}>
            <View style={{margin:10,borderRadius:10,backgroundColor:'#fff',}}>
                <View style={styles.clock}>
                    <Clock/>
                </View>
                <View style={[styles.clock,{flexDirection:'row'}]}>
                    <Icon name='moon-outline' size={24} color={Colors.secColor} />
                    <Text style={{fontSize:18,paddingHorizontal:8}} >Total Sleep : 0 Hrs</Text>
                </View>
            </View>
            <View style={styles.graph}>
                {/* <Text style={{fontSize:32,letterSpacing:3,padding:15,backgroundColor:Colors.secColor}}>Graph</Text> */}
                <LineChart
                    data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                        }
                    ]
                    }}
                    width={Dimensions.get("window").width - 20} // from react-native
                    height={180}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: Colors.secColor400,
                    backgroundGradientTo: Colors.secColor,
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "4",
                        strokeWidth: "2",
                        stroke: Colors.darkColor
                    }
                    }}
                    style={{
                    marginVertical: 8,
                    borderRadius: 12
                    }}
                />
            </View>
            <View style={{marginTop:4,marginHorizontal:10,borderRadius:10,paddingVertical:16,backgroundColor:'#fff'}}>
                <View style={styles.historyMainSection}>
                    <Text style={{flex:1,fontSize:16,}}>Awake:</Text>
                    <Text style={{flex:1,fontSize:16,}}>1 hr 40 min</Text>
                    <View style={{flex:2}}>
                        <View style={{backgroundColor:'gray',borderRadius:5 ,width:'20%',flex:1}}></View>
                    </View>
                </View>
                <View style={styles.historyMainSection}>
                    <Text style={{flex:1,fontSize:16,}}>Light:</Text>
                    <Text style={{flex:1,fontSize:16,}}>4 hr 30 min</Text>
                    <View style={{flex:2}}>
                        <View style={{backgroundColor:'orange',borderRadius:5,width:'30%',flex:1}}></View>
                    </View>
                </View>
                <View style={styles.historyMainSection}>
                    <Text style={{flex:1,fontSize:16,}}>Deep:</Text>
                    <Text style={{flex:1,fontSize:16,}}>6 hr 00 min</Text>
                    <View style={{flex:2}}>
                        <View style={{backgroundColor:'greenyellow', borderRadius:5 ,width:'50%',flex:1}}></View>
                    </View>
                </View>
            </View>
            <View style={{marginVertical:12,marginStart:20}}>
                <Text style={{fontSize:18}}>{moment().format('ddd , MMM Do')}</Text>
            </View>
            <View style={{flex:1,paddingHorizontal:10}}>
                <FlatList 
                    data={objCtx.data}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    renderItem={renderItems}
                    />
            </View>
        </View>
    )};

export default History ;