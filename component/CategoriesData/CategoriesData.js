import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import style from './style';
import PropTypes from "prop-types"
import Animated, { FadeInRight } from 'react-native-reanimated';
import { chooseCategory } from '../../api/service/apiService';

const CategoriesData = props => {

  return (
      <Animated.View
        entering={FadeInRight.delay(props.index * 300).duration(2000).springify()}>
        <Pressable
          onPress={() => props.clickActive()}
          style={props.isActive ? style.activeContainer : style.container}
        >
          <Text
            style={props.isActive ? style.activeTitleText : style.titleText}
          >
            {props.title}
          </Text>
        </Pressable>
      </Animated.View>
  );
}

CategoriesData.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  clickActive: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default CategoriesData