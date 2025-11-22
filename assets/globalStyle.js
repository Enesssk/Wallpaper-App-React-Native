import { StyleSheet } from 'react-native'
import { verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  appBackground: {
    backgroundColor: 'white',
  },
  scrollView: {
    paddingBottom: verticalScale(15),
  },
})

export default globalStyle