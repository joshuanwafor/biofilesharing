import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {HSpacer, VSpacer} from '../atoms/shacer';
import StandardPageTemplate from '../templates/dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SpaceActivityCard} from '../organisms/space/activity-card';
import {AppTypographyBody1, AppTypographyHeading} from '../atoms/typography';
import {Box, FlatList, HStack, VStack} from 'native-base';
import {subscriptionsManager} from '../../store/mysubscriptions';
import {observer} from 'mobx-react';

const Screen: React.FC<{}> = () => {
  React.useEffect(() => {
    subscriptionsManager.loadSubscriptions();
  });

  const RightIcons = (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <Ionicons
        name="notifications-outline"
        size={20}
        style={{padding: 12, color: 'white'}}
      />
      <HSpacer />
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 50,
          backgroundColor: 'red',
        }}
      />
    </View>
  );

  return (
    <StandardPageTemplate
      right_icons={RightIcons}
      title="Dashboard"
      show_back={false}>
      <View style={{paddingHorizontal: 16}}>
        <VSpacer space={24} />
      </View>
      <VStack space="4" mx="24px" flex={1} bg="white">
        <HStack>
          <Box p="4px" px="8px" bg="rose.500" rounded={'md'}>
            <AppTypographyBody1 style={{color: 'white'}}>
              My Subscriptions
            </AppTypographyBody1>
          </Box>
        </HStack>
        <FlatList
          data={subscriptionsManager.subscriptions}
          renderItem={item => {
            return (
              <View style={{marginBottom: 12}}>
                <SpaceActivityCard subscription={item.item} />
              </View>
            );
          }}
        />
      </VStack>
    </StandardPageTemplate>
  );
};

export default observer(Screen);
