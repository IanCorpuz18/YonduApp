import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import TitleAndSub from '../../../components/TitleandSub'
import ChoiceTiles from '../../../components/ChoiceTiles'
   class Industries extends Component{
     render(){
    return(
    <View style={styles.Container}><View style={styles.holder}>
        <TitleAndSub marginTop={{marginTop:20}} subWidth={{width:"50%"}} Title={"Lorem ipsum dolor sit amet"}
         Subtitle={"Quisque a est vel tortor lobortis scelerisque vitae id risus"} />
         </View>
<View style={styles.BlockIcons}>
    
    <ChoiceTiles/>
</View>

    </View>
    )
    }
    }
    const styles = StyleSheet.create({
    Container:{ 
        flex:1,
        backgroundColor:"white",
    },
    BlockIcons:{
        flex:4,
        alignItems:"center",
        width:"100%",
        flexWrap:"wrap",
        flexDirection:"row",
            // backgroundColor:"blue"
    },
    holder:{
        flex:1,
        // backgroundColor:"green",
        
    }
    })
export default Industries;