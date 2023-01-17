import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {
  ALIGNMENTITEM,
  BORDERADIUS,
  COLOR,
  FONTSIZE,
  FONTWEIGHT,
  MARGINVERTICAL,
  PADDING,
  WIDTH,
} from '../utility/Theme';

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  children,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {children || text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: WIDTH.WIDTH_TWO,
    padding: PADDING.PADDING_FIRST,
    marginVertical: MARGINVERTICAL.VERTICAL_FIRST,
    alignItems: ALIGNMENTITEM.ITEM_FIRST,
    borderRadius: BORDERADIUS.RADIUS_FIRST,
  },
  container_PRIMARY: {
    backgroundColor: COLOR.PRIMARY_COLOR,
  },
  container_SECONDARY: {
    borderColor: COLOR.SECONDARY_COLOR,
  },

  text: {
    fontWeight: FONTWEIGHT.WEIGHT_FIRST,
    color: COLOR.SECONDARY_COLOR,
    fontSize: FONTSIZE.SIZE_FIRST,
  },
  text_SECONDARY: {
    color: COLOR.LINK_COLOR,
  },
  text_TERTIARY: {
    fontWeight: FONTWEIGHT.WEIGHT_FIRST,
    color: COLOR.TEXT_TERITIARY_COLOR,
  },
});
export default CustomButton;
