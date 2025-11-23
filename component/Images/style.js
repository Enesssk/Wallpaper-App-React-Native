import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from '../../assets/scaling';

const style = StyleSheet.create({
  listContainer: {
    paddingHorizontal: horizontalScale(8),
    marginTop: verticalScale(8),
  }
})

export default style