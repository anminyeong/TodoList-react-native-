import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";
import { CheckBox } from "react-native-elements";
const{width,height} = Dimensions.get("window");

export default class ToDo extends Component{
    state={
        isEditing: false,
        isCompleted : false
    }
    render(){
        const { isCompleted, isEditing } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}> 
                        <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}/>
                    </TouchableOpacity>
                    <Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]}> 
                        Hello I'm  To Do
                    </Text>
                </View>
                <View style={styles.column}>
                     {isEditing ? 
                         <View style={styles.actions}>
                             <TouchableOpacity>
                                 <View style={styles.actions}>
                                     <Text style={styles.actionText}></Text>
                                 </View>
                             </TouchableOpacity>
                        </View> 
                      : <View style={styles.actions}>
                        <TouchableOpacity>
                            <View style={styles.actions}>
                                <Text style={styles.actionText}></Text>
                            </View>
                        </TouchableOpacity>
                   </View>}
                </View>
            </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState =>{
            return {

            }
        })
    }
}
 
const styles = StyleSheet.create({
    container:{
        width: width-50,
        borderBottomColor:"#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection:"row",
        alignItems:"center"
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15,
        borderColor:"red",
        borderWidth:3,
        marginRight:20
    },
    text:{
        fontWeight: "600",
        fontSize:20,
        marginVertical: 20
    },
    completedText:{
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText:{
        color:"#353839"
    },
    column:{
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
        justifyContent: "space-between"
    }

});