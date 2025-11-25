import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  bottomSheetContainer: {
    padding: horizontalScale(20)
  },
  sheetBackground: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    elevation: 10,
  },
  titleText: {
    fontSize: scaleFontSize(28),
    fontWeight: 'bold',
    color: "black",
  },
  filterTitleText: {
    fontSize: scaleFontSize(22),
    fontWeight: 'bold',
    color: "rgba(9,8,8,0.66)",
    marginTop: verticalScale(24)
  },
  orderContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
  }
})

export default style