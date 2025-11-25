import React from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"

const FilterCard = props => {
  return (
    <View style={style.topContainer}>
      <TouchableOpacity
        onPress={() => props.clickActive()}
        style={props.isActive ? style.isActiveCardContainer : style.cardContainer}>
        <Text style={props.isActive ? style.isActiveNameText : style.nameText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

FilterCard.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  clickActive: PropTypes.func.isRequired,
}

export default FilterCard