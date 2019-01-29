import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default class Head extends Component {
    render(){
       return(
        <View style={style.title}>
           <Image 
           source={require('./image/head_back.jpg')}
           style={style.head_img}
           />
           <Text style={style.title_text}>黄金详情</Text>
           <Image 
           source={require('./image/head_more.jpg')}
           style={style.head_img}
           />
        </View>
       )
    }
}
//height 的这个跟css不一样 自带box-sizing:border-box;

const style=StyleSheet.create({
    title:{
        paddingTop:18,
        width:"100%", 
        height:65,
        backgroundColor:'#c39c59',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center'
    },
    title_text:{
        textAlign:'center',
        color:'#ffff',
        fontSize:18,
    },
    head_img:{
        width:18,
        height:20
    }
})
