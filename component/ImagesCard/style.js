import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../assets/scaling';

const style = StyleSheet.create({
  imageContainer: {
    backgroundColor: "rgba(94,90,90,0.37)",
    borderRadius: horizontalScale(14),
    overflow: "hidden",
    marginBottom: verticalScale(6),
    marginRight: horizontalScale(4),
  },
  image: {
    height: verticalScale(300),
    width: "100%",
  },
})

export default style