import React from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/globalStyle';
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scaleFontSize } from '../../assets/scaling';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Search from '../../component/Search/Search';
import Categories from '../../component/Categories/Categories';
import Images from '../../component/Images/Images';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      {/*Headers*/}
      <View style={style.headersContainer}>
        <Text style={style.titleText}>Pixels</Text>
        <View>
          <Pressable>
            <FontAwesomeIcon icon={faBarsStaggered} size={scaleFontSize(28)} color={"black"}/>
          </Pressable>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={globalStyle.scrollView}>

        {/*Search*/}
        <Search placeholder={"Search..."}/>

        {/* categories */}
        <Categories />

        {/* images */}
        <Images />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home;