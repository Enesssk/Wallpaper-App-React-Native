import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/scaling';

const style = StyleSheet.create({
  flatlistContainer: {
    gap: horizontalScale(8),
    paddingHorizontal: horizontalScale(16),
  }
})

export default style