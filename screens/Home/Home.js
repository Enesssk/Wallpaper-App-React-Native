import React, { useEffect, useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/globalStyle';
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { scaleFontSize } from '../../assets/scaling';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Search from '../../component/Search/Search';
import Categories from '../../component/Categories/Categories';
import Images from '../../component/Images/Images';
import { getInitialImages, getOrderFilters } from '../../api/service/apiService';
import FilterBottomSheet from '../../component/FilterBottomSheet/FilterBottomSheet';

const Home = () => {
  const [images, setImages] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [categoriesResults, setCategoriesResults] = useState(null);
  const [orderFiltersResults, setOrderFiltersResults] = useState(null);
  const [resetCategory, setResetCategory] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const bottomSheetRef = useRef(null);


  const openFiltersModal = () => {
    bottomSheetRef?.current?.present();
  }

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

  //Filters
  const applyFilters = async (filters) => {
    setSearchResults(null);
    setCategoriesResults(null);
    setSearchValue("");
    setResetCategory(true);

    let params = {
      order: filters.order,
      orientation: filters.orientation,
      colors: filters.colors
    }

    const data = await getOrderFilters(params)
    setOrderFiltersResults(data)
  }

  const displayImages = searchResults || categoriesResults || orderFiltersResults || images

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.appBackground]}>
      {/*Headers*/}
      <View style={style.headersContainer}>
        <Text style={style.titleText}>Pixels</Text>
        <View>
          <TouchableOpacity
            onPress={openFiltersModal}
          >
            <FontAwesomeIcon icon={faBarsStaggered} size={scaleFontSize(28)} color={"black"}/>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={globalStyle.scrollView}>

        {/*Search*/}
        <Search
          onSearchResults={res => {
            setSearchResults(res)
            setOrderFiltersResults(null)
            if(res) setCategoriesResults(null)
            setResetCategory(true)
          }}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder={"Search..."}/>

        {/* categories */}
        <Categories reset={resetCategory} handleCategories={res => {
          setCategoriesResults(res)
          setOrderFiltersResults(null)
          setSearchResults(null)
          setResetCategory(false)
          setSearchValue("")
        }}/>

        {/* images */}
        <Images data={displayImages} />

      </ScrollView>

      {/* FilterBottomSheet */}
      <FilterBottomSheet
        onApplyFilters={applyFilters}
        ref={bottomSheetRef} />

    </SafeAreaView>
  )
}

export default Home;