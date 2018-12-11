import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, TextInput, Picker, Button} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import FormikInput from '../../../../../components/FormikInput'
import {SolutionContent,ServicesContent} from '../../../../../Arrays/GetQuotaContent'
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
        <View style={styles.PickerView}>
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
  </View>
        <View style={styles.PickerView}>
        <Picker
        mode="dropdown"
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
        {/* <View style={styles.FormikHolder}> */}
        <Formik style={styles.Formik}
        validateOnChange={false}
        validationOnBlur={false}
          initialValues= {{ name: '', company: '', email: '',phoneNum:"",message:"" }}
          onSubmit={() => {alert('SUCCESS')}}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Required'),
            company: Yup.string().required('Required'),
            email: Yup.string().required('Required')
            .email('Email Required')
            ,
            phoneNum: Yup.string().required('Required')
            .min(11,"Not a phone number!"),
            message: Yup.string().required('Required'),
            
          })}
          render={({ 
            values, 
            handleSubmit, 
            setFieldValue, 
            errors, 
            handleChange,
            touched, 
            setFieldTouched,
            isValid,
            isSubmitting
          }) => (
            <React.Fragment>
             <FormikInput placeholder={"Name"}
             value={values.name}
             onChangeText={handleChange('name')}
             /> 
             <Text>{errors.name}</Text>
              <FormikInput placeholder={"Company"}
             value={values.company}
             onChangeText={handleChange('company')}/>
              <FormikInput placeholder={"Email"}
             value={values.email}
             onChangeText={handleChange('email')}/>
              <FormikInput placeholder={"Phone Number"}
             value={values.phoneNum}
             onChangeText={handleChange('phoneNum')}/>
              <FormikInput placeholder={"Message"}
             value={values.message}
             onChangeText={handleChange('message')}/>
              <Button 
              backgroundColor='blue' 
              style={styles.button} 
              title='Submit' 
              onPress={handleSubmit}
              disabled={!isValid}
              loading={isSubmitting}
              />
            </React.Fragment>
          )}
        />
        {/* </View> */}
        
        </View>
    </View>
    )
    }
    }
    const styles = StyleSheet.create({
        // Formik:{
        // },
        // FormikHolder:{
        //   flex:2,
        //   width:"100%",
        //   backgroundColor:"white",
        //     alignItems:"center",
        //     justifyContent: 'center',
        // },
    Container:{ 
        flex:1,
            alignItems:"center",
            justifyContent: 'center',
    },
    Holder:{
        flex:1,
        backgroundColor:"yellow",
        width:"100%",
            alignItems:"center",
            justifyContent: 'center',

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