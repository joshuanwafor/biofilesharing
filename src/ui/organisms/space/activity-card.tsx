import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Box, HStack, useTheme} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {VSpacer} from '../../atoms/shacer';
import {AppTypography, AppTypographyHeading} from '../../atoms/typography';

export function SpaceActivityCard() {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  const theme = useTheme();

  const TrackerKeyVa = ({label}: {label: string}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 18,
        }}>
        <AppTypography style={{color: 'ghostwhite', fontSize: 18}}>
          {label}
        </AppTypography>
        <AppTypographyHeading style={{color: 'white'}}>0</AppTypographyHeading>
      </View>
    );
  };

  return (
    <Ripple
    onPress={() => {
      navigation.navigate('spaceRoom');
      console.log("okk")
    }}>
    <Box bg="darkBlue.900" mx={'24px'} rounded="md">
     
        <HStack
          borderColor={'gray.700'}
          style={{
            borderBottomWidth: 1,
            padding: 18,
          }}>
          <AppTypographyHeading
            style={{
              justifyContent: 'center',
              fontSize: 18,
              color: 'white',
              flex: 1,
            }}>
            Course Title
          </AppTypographyHeading>
          <Ionicons name="arrow-forward" size={18} color={'white'} />
        </HStack>

        <View style={{paddingVertical: 12}}>
          <TrackerKeyVa label="Documents" />
          <TrackerKeyVa label="Videos" />
          <TrackerKeyVa label="Members" />
          <TrackerKeyVa label="Completed" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 24,
            justifyContent: 'space-around',
          }}></View>
        <VSpacer />
    
    </Box>
    </Ripple>
  );
}
