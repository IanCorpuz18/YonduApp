import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity,Button} from 'react-native'

   class SoftDev extends Component{
     render(){
    return(
    <View style={styles.Container}>
    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('GetQuota')}>
        <Text>SoftDev</Text>
        </TouchableOpacity> */}
        <View style={styles.MainTextHolder}>

        <View style={styles.TitleHolder}>
        <Text style={styles.TextTitle}>
        Web Applications
        </Text>
        </View>
        <View style={styles.ContextHolder}>
        <Text style={styles.Context} >
        Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </Text>
        </View>

        </View>
        <View style={styles.MainTextHolder}>

<View style={styles.TitleHolder}>
<Text style={styles.TextTitle}>
Web Applications
</Text>
</View>
<View style={styles.ContextHolder}>
<Text style={styles.Context} >
Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
</Text>
</View>

</View>
<View style={styles.MainTextHolder}>

<View style={styles.TitleHolder}>
<Text style={styles.TextTitle}>
Web Applications
</Text>
</View>
<View style={styles.ContextHolder}>
<Text style={styles.Context} >
Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
</Text>
</View>

</View>
<View style={styles.MainTextHolder}>

<View style={styles.TitleHolder}>
<Text style={styles.TextTitle}>
Web Applications
</Text>
</View>
<View style={styles.ContextHolder}>
<Text style={styles.Context} >
Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
</Text>
</View>

</View>
<View style={styles.ButtongHolder}>
<Button title="Get Quota" />
</View>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor: "white",
        
    },
    MainTextHolder:{
        flex:1
    },
    TitleHolder:{
        flex:1
    },
    TextTitle:{
        fontSize:23,
        fontWeight:"bold"
    },
    ContextHolder:{
        flex:4
    },
    Context:{
        fontSize:15,

    }
    })
export default SoftDev;