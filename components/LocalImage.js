import React, { Component } from 'react'
import {Image, Dimensions} from 'react-native'

  const LocalImage = ({source, originalWidth, originalHeight,value}) => {
    let windowWidth = Dimensions.get('window').width
    let widthChange = (windowWidth-value)/originalWidth
    let newWidth = originalWidth * widthChange
    let newHeight = originalHeight * widthChange
    return(

        <Image source={source} style={{width: newWidth, height: newHeight}}/>
      )
  }

  export default LocalImage;