import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  container: {
    height: verticalScale(40),
    padding: horizontalScale(8),
    marginVertical: verticalScale(8),
    backgroundColor: "white",
    borderRadius: horizontalScale(10),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(16),
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowColor: "rgba(67,66,66,0.37)",
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
  },
  activeContainer: {
    height: verticalScale(40),
    padding: horizontalScale(8),
    marginVertical: verticalScale(8),
    backgroundColor: "black",
    borderRadius: horizontalScale(10),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(16),
  },
  titleText: {
    fontSize: scaleFontSize(17),
    color: "black",
    fonWeight: "bold",
  },
  activeTitleText: {
    fontSize: scaleFontSize(17),
    color: "white",
    fonWeight: "bold",
  }
})

export default style