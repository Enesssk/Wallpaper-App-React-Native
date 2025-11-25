import React from "react"
import { View } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/scaling';
import PropTypes from "prop-types"
import LinearGradient from 'react-native-linear-gradient';

const BadgeColor = ({ color }) => {
  return (
    <LinearGradient
      colors={[
        "#ffffff88",
        "#ffffff00"
      ]}
      style={{
        width: 34,
        height: 34,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: color,
        shadowOpacity: 0.7,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 0 },
      }}
    >
      <View
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          backgroundColor: color,
          borderWidth: color === "transparent" ? 1 : 0,
          borderColor: "#aaa",
        }}
      />
    </LinearGradient>
  );
};

BadgeColor.propTypes = {
  color: PropTypes.string.isRequired,
};

export default BadgeColor;