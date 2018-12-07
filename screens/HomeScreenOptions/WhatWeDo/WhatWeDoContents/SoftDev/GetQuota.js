import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, TextInput, Picker, Button} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {SolutionContent,ServicesContent} from '../../../../../GetQuotaContent'
   class GetQuota extends Component{
       state={
        SolutionsList:SolutionContent,
        Solutions:"Software Development",
        ServicesList:ServicesContent,
        Services:""
       }
     render(){
    return(
    <View style={styles.Container}>
        <View style={styles.Holder}>
        <View style={styles.PickerLabelHolder}>
        <Text style={styles.PickerLabelText}>
        CHOOSE
        </Text>
        </View>
        <View style={styles.PickerHolder}>
        <Picker
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
        <Picker
  selectedValue={this.state.Software}
  style={{ height: 100, width: "90%" }}
  onValueChange={(itemValue, itemIndex) => this.setState({Software: itemValue})}>
  
  { 
      this.state.ServicesList[this.state.Solutions].map((item,key)=>{
      return(
        <Picker.Item label={item.name} value={item.value} key={key}/>
      )
  })}
          </Picker>
  
        </View>
        </View>
        <Formik style={styles.Formik}
          initialValues= {{ email: '', password: '', confirmPassword: '' }}
          onSubmit={this._handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Email is required'),
            password: Yup.string()
              .min(6)
              .required('Password is required'),
            confirmPassword: 
              Yup.string().oneOf([Yup.ref('password', null)], 
              'Confirm Password must matched Password',
              ).required('Confirm Password is required')
          })}
          render={({ 
            values, 
            handleSubmit, 
            setFieldValue, 
            errors, 
            touched, 
            setFieldTouched,
            isValid,
            isSubmitting
          }) => (
            <React.Fragment>
              <TextInput 
              placeholder="Name"
              style={{
                  backgroundColor:"white",
                  borderBottomColor:"gray",
                  borderBottomWidth:1,
                  width:"90%",
                  alignContent:"center"
              }}
                />
              <TextInput 
                placeholder="Company"
                />
              <TextInput 
                placeholder="Email"
                />
                 <TextInput 
                placeholder="Phone Number"
                />
              <Button 
              backgroundColor='blue' 
              style={styles.button} 
              title='Submit' 
              onPress={handleSubmit}
            //   disabled={!isValid}
              loading={isSubmitting}
              />
            </React.Fragment>
          )}
        />
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
        Formik:{

            alignItems:"center",
            justifyContent: 'center',
        },
    Container:{ 
        flex:1,
            alignItems:"center",
            justifyContent: 'center',
    },
    Holder:{
        flex:1,
        backgroundColor:"yellow",
        width:"100%"
    },
    PickerHolder:{
        // flex:1,
        width:"90%",
        backgroundColor:"green"
    },
    PickerLabelText:{
        fontSize:20,
        fontWeight: 'bold',
    },
    PickerStyle:{
        width:"100%",
        height:"100%"
    },
    Holder1:{
        flex:1
    }
    })
export default GetQuota;