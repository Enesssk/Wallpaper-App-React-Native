import React, { useEffect, useState} from "react"
import { Image, Text, View } from 'react-native';
import { getInitialImages } from '../../api/service/apiService';
import PropTypes from "prop-types"
import style from "./style"
import { data } from '../../constants';
import ImagesCard from '../ImagesCard/ImagesCard';
import MasonryList from '@react-native-seoul/masonry-list';
import { getColumnCount } from '../../assets/scaling';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Images = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    fetchImages()
  }, []);

  const fetchImages = async () => {
    const data = await getInitialImages()
    console.log("data", data)

    if(data && data.length > 0) {
      setImages(data)
      console.log("images",images)
    }
  }

  return (
    <Animated.View
      entering={FadeInDown.delay(300).duration(2000).springify() }
    >
      {
        images && (
          <MasonryList
            data={images}
            numColumns={getColumnCount()}
            contentContainerStyle={style.listContainer}
            keyExtractor={(item) => item.id.toString()} //string
            renderItem={({ item }) => (
              <ImagesCard data={{
                imageUrl: item.webformatURL,
                imageHeight: item.imageHeight,
                imageWidth: item.imageWidth
              }}
              />
            )}
          />
        )}
    </Animated.View>
  )
}



export default Images;