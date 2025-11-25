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
    marginTop: verticalScale(16)
  },
  orderContainer: {
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  button: {
    width: '70%',
    height: verticalScale(35),
    borderRadius: horizontalScale(14),
    backgroundColor: "#232121",
    marginHorizontal: horizontalScale(10),
    justifyContent: "center",
    alignSelf: "center",
    marginTop: verticalScale(16)
  },
  buttonText: {
    fontSize: scaleFontSize(22),
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
  }
})

export default style