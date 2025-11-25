import React, { forwardRef, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import style from "./style"
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import FilterCard from '../FilterCard/FilterCard';
import { data } from "../../constants/index"
import { getOrderFilters } from '../../api/service/apiService';

const FilterBottomSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["75%"], [])
  const { onApplyFilters } = props
  const [activeFilters, setActiveFilters] = useState({
    order: null,
    orientation: null,
    colors: null,
  })

  //arka plan blur + fade animasyonu.
  const renderBackdrop = (backdropProps) => (
    <BottomSheetBackdrop
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      {...backdropProps}
      opacity={0.5}
    />
  );

  const handleClick = (type, value) => {
    setActiveFilters(prev => ({
      ...prev, //önceki alanların üstüne. yani birden fazla seçim yaptım.
      [type]: value //hangi türe göre seçilen değeri aldım.
    }))
  }

  const handleSave = () => {
    onApplyFilters(activeFilters);
    ref.current?.close();
  };

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{backgroundColor: "#999"}} //üst çizgi.
      backgroundStyle={style.sheetBackground}
    >
      <Animated.View
        entering={FadeInUp.duration(300)}
        exiting={FadeOutDown.duration(200)}
        style={style.bottomSheetContainer}>

         {/*Title*/}
        <Text style={style.titleText}>Filters</Text>

          {/*Order*/}
        <Text style={style.filterTitleText}>Order</Text>
        <View style={style.orderContainer}>
        {
          data.order.map((item, index) => {
            return (
              <FilterCard
                key={index}
                name={item}
                isActive={activeFilters.order === item}
                clickActive={() => handleClick("order", item)}
              />
              )
          })
        }
        </View>

        {/*Orientation*/}
        <Text style={style.filterTitleText}>Orientation</Text>
        <View style={style.orderContainer}>
          {
            data.orientation.map((item, index) => {
              return (
                <FilterCard
                  key={index}
                  name={item}
                  isActive={activeFilters.orientation === item}
                  clickActive={() => handleClick("orientation", item)}/>
              )
            })
          }
        </View>

        {/*Colors*/}
        <Text style={style.filterTitleText}>Colors</Text>
        <View style={style.orderContainer}>
          {
            data.colors.map((item, index) => {
              return (
                <FilterCard
                  key={index}
                  name={item}
                  isActive={activeFilters.colors === item}
                  clickActive={() => handleClick("colors", item)}/>
              )
            })
          }
        </View>

        <Pressable
          onPress={handleSave}
          style={style.button}>
          <Text style={style.buttonText}>Save</Text>
        </Pressable>

      </Animated.View>
    </BottomSheetModal>
  )
})


export default FilterBottomSheet;
