import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Picker, Button } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { MessageInput, CustomButton, FormikInput, CustomPicker } from '../../../../../components'
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
                        initialValues={{ name: '', 
                        company: '', 
                        email: '', 
                        phoneNum: "",
                        message: "", 
                        solution: "", 
                        services: "" }}
                        onSubmit={(values, val) => {
                            Axios(
                                {
                                    method: 'post',
                                    url: 'http://192.168.190.41:3000/qoute_list',
                                    data: values
                                })
                                .then(res => console.log(res))
                                .then(val => {
                                    console.log(val)
                                    this.props.navigation.navigate('Ty')
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }}
                        validationSchema={Yup.object().shape({
                            solution: Yup.string().required('Required'),
                            services: Yup.string().required('Required'),
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
                                        <CustomPicker
                                            onValueChange={handleChange('solution')}
                                            selectedValue={values.solution}
                                            data={SolutionContent}
                                            error={errors.solution}
                                        />
                                        <CustomPicker
                                            selectedValue={values.services}
                                            onValueChange={handleChange('services')}
                                            data={ServicesContent[values.solution === '' ? ["Services"] : values.solution]}
                                            error={errors.services}
                                        />
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

                                    <CustomButton onPress={() => handleSubmit()} >Submit</CustomButton>
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
    Container: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: "#FFFFFF",
    },
    Holder: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',

    },
    PickerHolder: {
        width: "100%",
        backgroundColor: "#FFFFFF"
    },
    Holder1: {
        flex: 1
    },
})
export default GetQuote;