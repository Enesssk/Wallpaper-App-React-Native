import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/scaling';

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    height: verticalScale(45),
    marginHorizontal: horizontalScale(16),
    borderWidth: horizontalScale(1),
    borderColor: "black",
    borderRadius: horizontalScale(14),
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(16),
    paddingHorizontal: horizontalScale(8),
  },
  container: {
    flexDirection: "row",
  },
  textInput: {
    fontSize: scaleFontSize(18),
    marginLeft: horizontalScale(4),
  },
  closeButtonContainer: {
    width: horizontalScale(35),
    height: verticalScale(35),
    borderRadius: horizontalScale(10),
    backgroundColor: "rgba(161,155,155,0.37)",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default style