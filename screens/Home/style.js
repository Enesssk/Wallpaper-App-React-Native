import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize } from '../../assets/scaling';

const style = StyleSheet.create({
  headersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: horizontalScale(16),
  },
  titleText: {
    fontSize: scaleFontSize(28),
    fontWeight: "bold",
    color: "black",
  }
})

export default style