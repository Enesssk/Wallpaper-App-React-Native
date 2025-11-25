import React, { forwardRef, useMemo } from 'react';
import { Text, View } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import style from "./style"
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated';
import FilterCard from '../FilterCard/FilterCard';
import { data } from "../../constants/index"

const FilterBottomSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["75%"], [])

  //arka plan blur + fade animasyonu.
  const renderBackdrop = (backdropProps) => (
    <BottomSheetBackdrop
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      {...backdropProps}
      opacity={0.5}
    />
  );

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
                name={item}/>
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
                  name={item}/>
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
                  name={item}/>
              )
            })
          }
        </View>


      </Animated.View>
    </BottomSheetModal>
  )
})

export default FilterBottomSheet;
