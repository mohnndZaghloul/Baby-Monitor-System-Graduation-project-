import { StyleSheet } from "react-native";
import Colors from "../constant/Colors";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    login:{
        width: '90%',
    },
    loginBtn:{
        width: '90%',
        marginVertical: 8,
    },
    bigTitle:{
        fontSize:30,
        fontWeight:'100',
        marginBottom:20,
    },
    gender:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:5,
    },
    home:{
        flex:1,
        backgroundColor:Colors.lightColor,
    },
    camera:{
        height:260,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    stateText:{
        padding:28,
        backgroundColor:Colors.secColor,
        alignItems:'center',
        justifyContent: 'center',
    },
    reading:{
        flexDirection:'row',
        alignItems:'center',
    },
    readingTxt:{
        fontSize:28,
        padding:2,
    },
    mainView:{
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:280,
        backgroundColor:'#fff',
    },
    icon:{
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Colors.secColor,
        borderBottomColor:'#fff',
        borderRadius:50,
        borderWidth:2,
        marginVertical:10,
    },
    charge:{
        paddingHorizontal:18,
        paddingVertical:26,
        marginTop:20,
        backgroundColor:'#fff',
        flex:1,
    },
    clock:{
        paddingVertical:12,
        alignItems:'center',
        justifyContent:'center',
    },
    graph:{
        justifyContent:'center',
        alignItems:'center',
        height:180,
        width:'100%',
    },
    historyMainSection:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:4,
    },
    sleepState:{
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 10,
        justifyContent:'space-between',
        padding:20,
        margin:2,
    },
    userImage:{
        width:100,
        height:100,
        backgroundColor:Colors.darkColor,
        borderRadius:50,
    },
    title:{
        fontSize:32,
        marginTop:30,
    },
    secTitle:{
        color:"#777",
        fontSize:16,
        textTransform:'capitalize',
        margin:4,
    },
    overlay:{
        height: 280,
        width:'80%',
        justifyContent:'center',
    },
    inner:{
        width:'100%',
        alignItems:'center',
    }
});

export default styles ;