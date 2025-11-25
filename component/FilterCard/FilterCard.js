import React from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"

const FilterCard = props => {
  return (
    <View style={style.topContainer}>
      <TouchableOpacity style={style.cardContainer}>
        <Text style={style.nameText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

FilterCard.propTypes = {
  name: PropTypes.string.isRequired,
}

export default FilterCard