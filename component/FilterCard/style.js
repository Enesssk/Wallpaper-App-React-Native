import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  topContainer: {
  },
  isActiveCardContainer: {
    backgroundColor: "rgba(21,20,20,0.63)",
    borderWidth: horizontalScale(1),
    borderColor: "rgba(21,20,20,0.63)",
    borderRadius: horizontalScale(10),
    height: verticalScale(25),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(16),
    marginRight: horizontalScale(12),
    paddingHorizontal: horizontalScale(10),
  },
  cardContainer: {
    backgroundColor: "white",
    borderWidth: horizontalScale(1),
    borderColor: "rgba(21,20,20,0.63)",
    borderRadius: horizontalScale(10),
    height: verticalScale(25),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(16),
    marginRight: horizontalScale(12),
    paddingHorizontal: horizontalScale(10),
  },
  isActiveNameText: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
  },
  nameText: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: "rgba(21,20,20,0.63)",
    textAlign: "center",
  }
})

export default style