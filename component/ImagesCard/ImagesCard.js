import React from "react"
import { Image, View } from 'react-native';
import PropTypes from "prop-types"
import style from './style';
import { getImageSize } from '../../assets/scaling';


const ImagesCard = props => {
  const { imageUrl, imageHeight, imageWidth } = props.data

  const getImageHeight = () => {
    const {imageHeight: height, imageWidth: width} = props.data
    return {height: getImageSize(height, width)}
  }

  return (
    <View style={style.imageContainer}>
      <Image
        style={[style.image, getImageHeight()]}
        source={{uri: imageUrl, cache: "force-cache"}}
      />
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