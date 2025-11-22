import React, { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import { data } from '../../constants';
import CategoriesData from '../CategoriesData/CategoriesData';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View>
      <FlatList
        contentContainerStyle={style.flatlistContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data.categories}
        keyExtractor={item => item}
        renderItem={({item, index }) => (
          <CategoriesData
            title={item}
            index={index}
            isActive={activeCategory === item}
            clickActive={() => setActiveCategory(item)}
          />
        )}
      />
    </View>
  )
}



export default Categories