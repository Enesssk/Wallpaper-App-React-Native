import React from "react"
import { View, Image, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import style from "./style"
import globalStyle from '../../assets/globalStyle';
import { useRoute } from '@react-navigation/native';
import { getImageSize, scaleFontSize } from '../../assets/scaling';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faClose,
  faDownload,
  faShare,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';

const ImageModal = () => {
  const {params: item} = useRoute()
  const { imageWidth, imageHeight, imageUrl } = item

  const calculatedHeight = getImageSize(imageWidth, imageHeight)

  return (
    <View style={globalStyle.flex}>
      <BlurView
      style={style.blurView}
      blurType={"light"}
      blurAmount={20}
      reducedTransparencyFallbackColor={"white"}
      >
        <View style={style.centerContainer}>
        <View style={[style.imageContainer, {height: calculatedHeight}]}>
          <Image
            style={[style.image, {height: calculatedHeight}]}
            source={{uri: imageUrl}}/>
        </View>

          {/*Actions*/}
          <View style={style.iconContainer}>

            {/*Close*/}
            <TouchableOpacity style={style.iconBackground}>
              <FontAwesomeIcon icon={faClose} size={scaleFontSize(28)} color={"white"}/>
            </TouchableOpacity>

            {/*Download*/}
            <TouchableOpacity style={style.iconBackground}>
              <FontAwesomeIcon icon={faDownload} size={scaleFontSize(28)} color={"white"}/>
            </TouchableOpacity>

            {/*Share*/}
            <TouchableOpacity style={style.iconBackground}>
              <FontAwesomeIcon icon={faShareNodes} size={scaleFontSize(28)} color={"white"}/>
            </TouchableOpacity>

          </View>

        </View>

      </BlurView>
    </View>
  )
}



export default ImageModal