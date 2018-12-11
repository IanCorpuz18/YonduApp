import React, { Component } from 'react'
import {View,Text,StyleSheet,TextInput,Picker} from 'react-native'

const Picker = props => (

<Picker   mode="dropdown"
selectedValue={this.state.Solutions}
style={{ height: 100, width: "90%" }}
onValueChange={(itemValue, itemIndex) => this.setState({Solutions: itemValue})}>
{
    this.state.SolutionsList.map((item,key)=>{
    return(
      <Picker.Item label={item.name} value={item.value} key={key}/>
    )
})} 
</Picker>

)

export default Picker;