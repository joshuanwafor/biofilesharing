import {AppTypographySubHeading} from '../../atoms/typography';
import React from 'react';
import {View} from 'react-native';
import {getAppColors} from '../../../style/theme';

export const DefaultCard: React.FC<{title: string}> = ({title, children}) => {
  return (
    <React.Fragment>
      <View
        style={{
          elevation: 1,
          backgroundColor: 'white',
          borderRadius: 4,
        }}>
        <AppTypographySubHeading
          style={{
            paddingHorizontal: 12,
            paddingTop: 14,
            fontWeight: '500',
            color: getAppColors.dodgerBlue,
          }}>
          {title}
        </AppTypographySubHeading>
        <View style={{padding: 12}}>{children}</View>
      </View>
    </React.Fragment>
  );
};
