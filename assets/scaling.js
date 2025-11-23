import { DeviceInfo, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch()

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330
  }
  return 350
}

const horizontalScale = size => (width/guidelineBaseWidth()) * size

const guidelineBaseHeight = () => {
  if(isSmall) {
    return 550
  } else if (width > 410) {
    return 620
  }
  return 680
}

const verticalScale = size => (height/guidelineBaseHeight()) * size

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430
  }
  return 400
}
const scaleFontSize = size => Math.round((width/guidelineBaseFonts())* size)

export const welcomeImageWidth = value => horizontalScale((width*value)/35)
export const welcomeImageHeight = value => horizontalScale((width*value)/35)

export const getImageSize = (width, height) => {
  if(width > height) {
    return 250
  } else if(height > width) {
    return 300
  } else if(height == width) {
    return 200
  }
}

export const getColumnCount = () => {
  if(width >= 1024) {
    //desktop
    return 4
  } else if (width >= 768) {
    //tablet
    return 3
  } else {
    //phone
    return 2
  }
}

export {horizontalScale, verticalScale, scaleFontSize}