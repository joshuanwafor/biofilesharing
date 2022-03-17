import {theme} from '../../style/theme';
import React from 'react';
import {Text, View, StyleSheet, TextStyle, TextProps} from 'react-native';

type TType = TextProps & {};

let styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 22,
    fontFamily: theme.font.bold,
  },
  sectionHeading: {
    color: 'black',
    fontSize: 16,
    fontFamily: theme.font.bold,
  },
  body: {
    fontSize: 14,
    fontFamily: theme.font.noraml,
  },
  caption: {
    fontSize: 12,
    fontFamily: theme.font.light,
  },
});

export const AppTypography: React.FC<TType> = props => {
  let style: TextProps['style'] = {
    ...styles.body,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={style} />;
};

export const AppTypographyBody1: React.FC<TType> = props => {
  let style: TextProps['style'] = {
    ...styles.body,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={{...style}} />;
};
export const AppTypographyCaption: React.FC<TType> = props => {
  let style: TextProps['style'] = {
    ...styles.caption,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={style} />;
};

export const AppTypographyHeading: React.FC<TType> = props => {
  let style: TextProps['style'] = {
    ...styles.heading,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={style} />;
};

export const AppTypographySubHeading: React.FC<TType> = props => {
  let style: TextProps['style'] = {
    ...styles.sectionHeading,
  };
  if (typeof props.style == 'object') {
    let temp = style;
    style = props.style;
    style = {...temp, ...style};
  }
  return <Text {...props} style={style} />;
};
