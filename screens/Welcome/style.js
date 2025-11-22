import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
  welcomeImageHeight,
  welcomeImageWidth,
} from '../../assets/scaling';

const style = StyleSheet.create({
  image: {
    flex: 1,
    position: "absolute",
    width: welcomeImageWidth(100),
    height: welcomeImageHeight(65),
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: welcomeImageWidth(100),
    height: welcomeImageHeight(50),
  },
  contentContainer: {
    flex: 1,
    bottom: 0,
    alignItems: 'center',
    justifyContent: "flex-end",
    gap: horizontalScale(14),
  },
  titleText: {
    fontSize: scaleFontSize(28),
    fontWeight: 'bold',
    color: "black"
  },
  descText: {
    fontSize: scaleFontSize(22),
    fontWeight: 'bold',
    color: "black"
  },
  button: {
    width: '90%',
    height: verticalScale(50),
    borderRadius: horizontalScale(14),
    backgroundColor: "#232121",
    marginHorizontal: horizontalScale(10),
    marginBottom: verticalScale(40),
    justifyContent: "center"
  },
   buttonText: {
     fontSize: scaleFontSize(22),
     fontWeight: 'bold',
     color: "white",
     textAlign: "center",
   }
})

export default style