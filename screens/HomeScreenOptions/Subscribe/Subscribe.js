import React, { Component } from 'react'
import { View, Text, StyleSheet,Dimensions } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import TitleandSub from '../../../components/TitleandSub';
import FormikInput from '../../../components/FormikInput'
import CustomButton from '../../../components/CustomButton'
import Axios from 'axios'
class Subscribe extends Component {
    render() {
        return (
            <View style={styles.Container}>
                
                    <TitleandSub Title={"NEWSLETTER"}
                        marginTop={{ flex: 0, marginBottom: 20,
                            height:Dimensions.get('window').width * .9,
                            justifyContent:"flex-end"
                        
                        }}
                        Subtitle={"Get the latest tech news, careers and more!"}
                        subWidth={{ width: "53%",flex:0 }}
                        newFlex={{ flex: 0, padding: 10 }}

                    />
                    {

                        <Formik

                            validateOnChange={false}
                            validationOnBlur={false}
                            style={{ flex: 1 }}
                            initialValues={{ email: '' }}
                            onSubmit={(values, val) =>{
                                Axios( 
                                    {
                                      method:'post',
                                      url:'http://192.168.190.41:3000/news_letter',
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
                                email: Yup.string()
                                .email('Invalid Email')
                                    .required('Email is required'),

                            })}
                            render={({
                                values,
                                handleSubmit,
                                setFieldValue,
                                errors,
                                touched,
                                setFieldTouched,
                                isValid,
                                handleChange
                            }) => (
                                    <View style={styles.FormikContent}>

                                    <View style={styles.Input}>
                                        <FormikInput placeholder={"Email"}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            Text={errors.email}
                                        />
                                        </View>
                                        
                                    <View style={styles.Button}>
                                            <CustomButton onPress={() => handleSubmit()} >Submit</CustomButton>
                                        </View>
                                       
                                    </View>
                                )}
                        />}
                </View>


        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: "100%",
        justifyContent:"center",
        backgroundColor: "white",
    },
    FormikContent:{
        height:Dimensions.get('window').width * 0.75,
        width:"100%",
        justifyContent:"space-between",
        alignItems:"center",
        // backgroundColor:"green",
    },
    Input:{
        width:"100%",
        alignItems:"center",
    },
    Button:{
        width:"100%",
        alignItems:"center",
    }
})
export default Subscribe;