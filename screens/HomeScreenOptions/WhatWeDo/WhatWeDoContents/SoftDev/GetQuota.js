import React, { Component } from 'react'
import {View,Text,StyleSheet, TouchableOpacity, TextInput, Picker, Button} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import MessageInput from '../../../../../components/MessageInput'
import CustomButton from '../../../../../components/CustomButton'
import FormikInput from '../../../../../components/FormikInput'
import {SolutionContent,ServicesContent} from 'YonduApp/Arrays/GetQuotaContent'
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
            .email('Invalid Email'),
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
             Text={errors.name}
             />

              <FormikInput placeholder={"Company"}
             value={values.company}
             onChangeText={handleChange('company')}
             Text={errors.company}/>


              <FormikInput placeholder={"Email"}
             value={values.email}
             onChangeText={handleChange('email')}
             Text={errors.email}/>


              <FormikInput placeholder={"Phone Number"}
             value={values.phoneNum}
             onChangeText={handleChange('phoneNum')}
             Text={errors.phoneNum}/>


              <MessageInput placeholder={"Message"}
             value={values.message}
             onChangeText={handleChange('message')}
             Text={errors.message}
             multiline={true}
             editable={true}
             />
             <CustomButton
             onPress={handleSubmit}
             >Submit</CustomButton>
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
        backgroundColor:"white",
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