import React, { forwardRef, useMemo } from 'react';

import { Text, View } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import style from "./style"

const FilterBottomSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["75%"], [])

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
    >
      <BottomSheetView
      style={style.bottomSheetContainer}>
        <Text>Filter bottom sheet</Text>
      </BottomSheetView>
    </BottomSheetModal>
  )
})

export default FilterBottomSheet;
