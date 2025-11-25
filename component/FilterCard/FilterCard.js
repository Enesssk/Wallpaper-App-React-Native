import React from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"
import BadgeColor from '../BadgeColor/BadgeColor';

const FilterCard = props => {
  return (
    <View style={style.topContainer}>
      <TouchableOpacity
        onPress={() => props.clickActive()}
        style={
        props.isColor
          ? (props.isActive ? style.activeColorCardContainer : style.colorCardContainer)
      : (props.isActive ? style.isActiveCardContainer : style.cardContainer)
      }>
        {
          props.isColor ? (
          <BadgeColor color={props.name} />
        ) : (
          <Text style={props.isActive ? style.isActiveNameText : style.nameText}>
            {props.name}
          </Text>
        )}

      </TouchableOpacity>
    </View>
  )
}

FilterCard.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  clickActive: PropTypes.func.isRequired,
  isColor: PropTypes.bool.isRequired,
}

export default FilterCard