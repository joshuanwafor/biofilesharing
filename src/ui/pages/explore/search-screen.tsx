import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScrollView, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  AppTypographySubHeading,
  AppTypographyBody1,
} from '../../atoms/typography';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {Box, Button, HStack, Input, useTheme} from 'native-base';
import Ripple from 'react-native-material-ripple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export const SearchScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const theme = useTheme();
  return (
    <Box bg="white">
      <HStack p="4" space={2} alignItems="center">
        <Box flex={1}>
          <Input
            variant={'filled'}
            fontFamily="AvenirNext-Medium"
            _focus={{borderColor: 'gray.300'}}
            rounded={'2xl'}
            fontSize={16}
            bg="gray.100"
            autoFocus
            InputLeftElement={
              <Ripple
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons
                  name="arrow-back-outline"
                  size={22}
                  style={{padding: 12}}
                />
              </Ripple>
            }
          />
        </Box>
      </HStack>
      <ScrollView style={{paddingHorizontal: 12}}>
        {[1, 2, 3, 4, 5].map((v, i) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('courseDetails');
              }}>
              <Box borderBottomWidth={1} borderColor="gray.200">
                <HStack p="4px" py="8px">
                  <Box flex={1}>
                    <AppTypographySubHeading>
                      Item title goes heree
                    </AppTypographySubHeading>
                    <AppTypographyBody1>caption goes here</AppTypographyBody1>
                  </Box>
                  <Ionicons
                    name="open-outline"
                    color={theme.colors.rose[900]}
                  />
                </HStack>
              </Box>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Box>
  );
};
