import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import { data } from '../../constants';
import CategoriesData from '../CategoriesData/CategoriesData';
import { chooseCategory } from '../../api/service/apiService';

const Categories = props => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if(props.reset) {
      setActiveCategory(null)
    }
  },[props.reset])

  const handlePress =  (categoryName) => {
    setActiveCategory(categoryName)

    chooseCategory(categoryName).then((data) =>
      props.handleCategories(data));
  }

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
            clickActive={() => handlePress(item)}
          />
        )}
      />
    </View>
  )
}

Categories.propTypes = {
  handleCategories: PropTypes.func.isRequired,
  reset: PropTypes.bool.isRequired,
}

export default Categories