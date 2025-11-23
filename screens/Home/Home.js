import React, { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import globalStyle from '../../assets/globalStyle';
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scaleFontSize } from '../../assets/scaling';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Search from '../../component/Search/Search';
import Categories from '../../component/Categories/Categories';
import Images from '../../component/Images/Images';
import { getInitialImages } from '../../api/service/apiService';

const Home = () => {
  const [images, setImages] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    fetchImages()
  }, []);

  const fetchImages = async () => {
    const data = await getInitialImages()
    console.log("data", data)

    if(data && data.length > 0) {
      setImages(data)
      console.log("images",images)
    }
  }

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
        <Search
          onSearchResults={res => setSearchResults(res)}
          placeholder={"Search..."}/>

        {/* categories */}
        <Categories />

        {/* images */}
        <Images data={searchResults || images} />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Home;