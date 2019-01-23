import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Head extends Component {
    render(){
       return(
        <View style={style.title}>
            <Text style={style.title_text}>我是头部</Text>
        </View>
       )
    }
}
const style=StyleSheet.create({
    title:{
        paddingTop:18,
        width:100, 
        height:100,
        backgroundColor:'red'
    },
    title_text:{
        textAlign:'center',
    }
    
})