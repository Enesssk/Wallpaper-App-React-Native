import React from 'react';
import { Image, Pressable, StatusBar, Text, View } from 'react-native';
import style from "./style"
import globalStyle from '../../assets/globalStyle';
import LinearGradient from 'react-native-linear-gradient';
import { FadeInDown } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import { Routes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
const navigation = useNavigation();
  return (
    <View style={[globalStyle.flex, globalStyle.appBackground]}>
    <StatusBar style={"light"}/>
    <Image style={style.image}
           source={require('../../assets/images/welcome.png')}
           resizeMode="cover"
    />

      {/*Gradient*/}
      <Animated.View
        entering={FadeInDown.duration(600)}
        style={globalStyle.flex}>
        <LinearGradient colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', "white", "white"]}
                        style={style.gradient}
                        start={{x: 0.6, y: 0}}
                        end={{x: 0.6, y: 0.8}}
                        />

        {/*Content*/}
        <View style={style.contentContainer}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={style.titleText}>Pixels</Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(500).springify()}
            style={style.descText}>Every Pixel Tells a Story</Animated.Text>
          <Animated.View
            entering={FadeInDown.delay(600).springify()}
            style={style.button}>
            <Pressable
              onPress={() => navigation.navigate(Routes.Home)}
            >
              <Text style={style.buttonText}>Start Explore</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  )
}

export default Welcome;