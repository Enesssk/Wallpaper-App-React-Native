import React from "react"
import { Image, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from "prop-types"
import style from './style';
import { getImageSize } from '../../assets/scaling';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';


const ImagesCard = props => {
  const { imageUrl, imageHeight, imageWidth } = props.data
  const navigation = useNavigation();

  const getImageHeight = () => {
    const {imageHeight: height, imageWidth: width} = props.data
    return {height: getImageSize(height, width)}
  }

  return (
    <View
      style={style.imageContainer}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(Routes.ImageModal, props.data)}
      >
        <Image
          style={[style.image, getImageHeight()]}
          source={{uri: imageUrl, cache: "force-cache"}}
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

ImagesCard.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageWidth: PropTypes.number.isRequired,
  })
}



export default ImagesCard