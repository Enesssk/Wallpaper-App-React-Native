import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/scaling';

const style = StyleSheet.create({
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageContainer: {
    width: horizontalScale(300),
    backgroundColor: "white",
    borderRadius: horizontalScale(20),
    borderColor: "rgba(0,0,0,0.15)",
    borderWidth: 1,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackground: {
    backgroundColor: "rgba(94,90,90,0.37)",
    borderRadius: horizontalScale(8),
    width: horizontalScale(40),
    height: horizontalScale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    width: "300",
    justifyContent: "space-between",
    marginTop: verticalScale(28),
  }
})

export default style
