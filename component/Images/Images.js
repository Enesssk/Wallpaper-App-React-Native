import React, { useEffect, useState} from "react"
import { getInitialImages } from '../../api/service/apiService';
import PropTypes from "prop-types"
import style from "./style"
import ImagesCard from '../ImagesCard/ImagesCard';
import MasonryList from '@react-native-seoul/masonry-list';
import { getColumnCount } from '../../assets/scaling';
import Animated, { FadeInDown } from 'react-native-reanimated';

const Images = props => {
  const data = Array.isArray(props.data) ? props.data : [];


  return (
    <Animated.View
      entering={FadeInDown.delay(300).duration(2000).springify() }
    >
      {
        data && (
          <MasonryList
            data={data}
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

Images.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageWidth: PropTypes.number.isRequired,
  })
}

export default Images;