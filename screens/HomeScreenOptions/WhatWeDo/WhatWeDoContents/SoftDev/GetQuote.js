import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Picker, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import MessageInput from '../../../../../components/MessageInput'
import CustomButton from '../../../../../components/CustomButton'
import FormikInput from '../../../../../components/FormikInput'
import Axios from 'axios'
import { SolutionContent, ServicesContent } from 'YonduApp/Arrays/GetQuotaContent'
class GetQuote extends Component {
    state = {
        Solutions: "What solution do you need?",
        Services: ""
    }
    render() {
        return (
            <View style={styles.Container}>

               
                {
                    <Formik
                        validateOnChange={false}
                        validationOnBlur={false}
                        initialValues={{ name: '', company: '', email: '', phoneNum: "", message: "", solution:"",services:"" }}
                        onSubmit={(values, val) =>{
                            Axios( 
                                {
                                  method:'post',
                                  url:'http://192.168.190.41:3000/qoute_list',
                                  data:values
                                })
                                .then(res => console.log(res))
                                .then( val=>{
                                    console.log(val)
                                    this.props.navigation.navigate('Ty')
                                })
                                .catch(function (error) {
                                  console.log(error);
                                });
                        }}

                        validationSchema={Yup.object().shape({
                            solution:Yup.string().required('Required'),
                            services:Yup.string().required('Required'),
                            name: Yup.string().required('Required'),
                            company: Yup.string().required('Required'),
                            email: Yup.string().required('Required')
                                .email('Invalid Email'),
                            phoneNum: Yup.string().required('Required')
                                .min(11, "Not a phone number!"),
                            message: Yup.string().required('Required'),

                        })}
                        render={({
                            values,
                            handleSubmit,
                            setFieldValue,
                            errors,
                            handleChange,
                        }) => ( 
                       <View>
                            <View style={styles.PickerHolder}>

                            <View style={styles.PickeTextView}>
                                <Picker mode="dropdown"
                                    selectedValue={values.solution}
                                    style={{
                                        
                                        width: "100%", height: 40,
                                        color:"#9E9E9E"
                                    }}
                                    onValueChange={handleChange('solution')}>
                                    {
                                        SolutionContent.map((item, key) => {
                                            return (
                                                <Picker.Item label={item.name} value={item.value} key={key} />
                                            )
                                        })}
                                </Picker>
                                <View style={{width: '100%', height: 1, backgroundColor: '#C5C5C5', marginVertical: 1 }} />
                                <Text style={{ color: "red", width: '100%' }}>{errors.solution}</Text>
                            </View>
        
                            <View style={styles.PickeTextView}>
                                <Picker
                                    mode="dropdown"
                                    selectedValue={values.services}
                                    style={{
                                        width: "100%",
                                        height: 40,
                                        color:"#9E9E9E"
                                    }}
                                    onValueChange={handleChange('services')}>
        
                                    {
                                        ServicesContent[values.solution === ''? ["Services"]: values.solution].map((item, key) => {

                                            return (
                                                <Picker.Item label={item.name} value={item.value} key={key} />
                                            )
                                        })}
                                </Picker>
                                <View style={{ width: '100%', height: 1, backgroundColor: '#C5C5C5', marginVertical: 1 }} />
                                <Text style={{  color: "red", width: '100%' }}>{errors.services}</Text>
                            </View>
        
                        </View>
                                <View style={styles.FormikView}>
                                    <FormikInput placeholder={"Name"}
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                        Text={errors.name}
                                    />
                                    <FormikInput placeholder={"Company"}
                                        value={values.company}
                                        onChangeText={handleChange('company')}
                                        Text={errors.company}
                                    />
                                    <FormikInput placeholder={"Email"}
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        Text={errors.email}
                                    />
                                    <FormikInput placeholder={"Phone Number"}
                                        value={values.phoneNum}
                                        onChangeText={handleChange('phoneNum')}
                                        Text={errors.phoneNum}
                                    />
                                    <MessageInput
                                    placeholder={"Message"}
                                    value={values.message}
                                    onChangeText={handleChange('message')}
                                    Text={errors.message}
                                    
                                    />
                                 </View>
                                        
                                    <CustomButton onPress={() =>handleSubmit() } >Submit</CustomButton>
                                 </View>
                            )}
                    />}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    Formik: {
        flex: 1,
    },
    PickerView: {
        width: "100%",
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: 1,
    },
    PickeTextView: {
        paddingHorizontal: 20,

    },
    Container: {
        flex: 1,
        paddingVertical:30,
        backgroundColor: "white",
    },
    Holder: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',

    },
    PickerHolder: {
        width: "100%",
        backgroundColor: "white"
    },
    Holder1: {
        flex: 1
    },
})
export default GetQuote;