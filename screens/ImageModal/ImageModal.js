import React from "react"
import { View, Image, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import style from "./style"
import globalStyle from '../../assets/globalStyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getImageSize, scaleFontSize } from '../../assets/scaling';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faClose,
  faDownload,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ImageModal = () => {
  const navigation = useNavigation();
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
        <Animated.View
          entering={FadeInDown.springify().delay(100)}
          style={style.centerContainer}>
        <View style={[style.imageContainer, {height: calculatedHeight}]}>
          <Image
            style={[style.image, {height: calculatedHeight}]}
            source={{uri: imageUrl}}/>
        </View>

          {/*Actions*/}
          <View style={style.iconContainer}>

            {/*Close*/}
            <Animated.View
              entering={FadeInDown.springify().delay(100)}
            >
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={style.iconBackground}>
                <FontAwesomeIcon icon={faClose} size={scaleFontSize(28)} color={"white"}/>
              </TouchableOpacity>
            </Animated.View>

            {/*Download*/}
            <Animated.View
              entering={FadeInDown.springify().delay(200)}
            >
              <TouchableOpacity style={style.iconBackground}>
                <FontAwesomeIcon icon={faDownload} size={scaleFontSize(28)} color={"white"}/>
              </TouchableOpacity>
            </Animated.View>

            {/*Share*/}
            <Animated.View
              entering={FadeInDown.springify().delay(300)}
            >
              <TouchableOpacity style={style.iconBackground}>
                <FontAwesomeIcon icon={faShareNodes} size={scaleFontSize(28)} color={"white"}/>
              </TouchableOpacity>
            </Animated.View>

          </View>

        </Animated.View>

      </BlurView>
    </View>
  )
}



export default ImageModal