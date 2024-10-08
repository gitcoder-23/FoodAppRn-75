import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Animated, {FadeInDown} from 'react-native-reanimated';

const StyledMainView = styled(Animated.View);
const StyledView = styled(View);
const StyledScrollView = styled(ScrollView);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);

type categoryType = {
  allCategories: CategoryModel[];
  categoryLoading: boolean;
  handleChangeCategory: (categoryType: string) => void;
  activeCategory: string;
};

const Categories = ({
  allCategories,
  categoryLoading,
  handleChangeCategory,
  activeCategory,
}: categoryType) => {
  return (
    <StyledMainView
      entering={FadeInDown.duration(500).springify()}
      className="mb-6">
      <StyledScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{paddingHorizontal: 15}}>
        {allCategories &&
          allCategories.map((catData: CategoryModel, id) => {
            let isActiveCategory = catData.strCategory == activeCategory;

            let activeBtnClass = isActiveCategory
              ? 'bg-amber-400'
              : 'bg-black/10';

            let activeTextClass = isActiveCategory
              ? 'text-amber-600'
              : 'text-neutral-600';

            return (
              <StyledTouchableOpacity
                key={id}
                className="flex items-center space-y-1"
                onPress={() => handleChangeCategory(catData.strCategory)}>
                <StyledView
                  className={`rounded-full p-[6px] ${activeBtnClass}`}>
                  <StyledImage
                    className="rounded-full"
                    source={{uri: catData.strCategoryThumb}}
                    style={{width: hp(6), height: hp(6)}}
                  />
                </StyledView>
                <StyledText
                  className={` ${activeTextClass}  text-center`}
                  style={{fontSize: hp(1.6)}}>
                  {catData.strCategory}
                </StyledText>
              </StyledTouchableOpacity>
            );
          })}
      </StyledScrollView>
    </StyledMainView>
  );
};

export default Categories;

const styles = StyleSheet.create({});
