import {useNavigation, NavigationProp} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {Box, HStack, Skeleton, useTheme, VStack} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import Ripple from 'react-native-material-ripple';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TSpace, TSubscription} from '../../../interface/models';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {spaceInfoManager} from '../../../store/contentDetails';
import {spaceRoomManager} from '../../../store/room';
import {VSpacer} from '../../atoms/shacer';
import {AppTypography, AppTypographyHeading} from '../../atoms/typography';

const TrackerKeyVa = ({label, valu}: {label: string; valu: any}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
      }}>
      <AppTypography style={{fontSize: 18, color: 'white'}}>
        {label}
      </AppTypography>
      <AppTypographyHeading style={{color: 'white'}}>
        {valu ?? '0'}
      </AppTypographyHeading>
    </View>
  );
};

export const SpaceActivityCard = observer(function ({
  subscription,
}: {
  subscription: TSubscription;
}) {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  const theme = useTheme();

  function loadSpaceInfo() {
    spaceInfoManager.loadContent(subscription.space_id).then(() => {
      spaceRoomManager.loadSpaceRoomResources(subscription.space_id ?? '');
    });
  }

  React.useEffect(() => {
    loadSpaceInfo();
  }, []);

  if (typeof spaceInfoManager.items[subscription.space_id ?? ''] !== 'object') {
    return (
      <Box>
        <VStack space={'2'}>
          <Skeleton
            h={'25px'}
            w="70%"
            rounded={'md'}
            speed=".2"
            bg={'gray.100'}
          />
          <Skeleton h={'200'} rounded={'md'} speed=".2" bg={'gray.100'} />
        </VStack>
      </Box>
    );
  }

  const spaceInfo = spaceInfoManager.items[subscription.space_id ?? ''];

  let resources = spaceRoomManager.roomMap[subscription.space_id ?? ''] ?? [];

  return (
    <Ripple
      onPress={() => {
        navigation.navigate('spaceRoom', {
          space: spaceInfo,
        });
        console.log('okk');
      }}>
      <Box
        rounded="md"
        bg="blue.800"
        shadow="md"
        style={{elevation: 1}}
        overflow="hidden">
        <HStack
          borderColor={'gray.200'}
          bg="blue.700"
          style={{
            borderBottomWidth: 1,
            padding: 18,
          }}>
          <AppTypographyHeading
            numberOfLines={1}
            style={{
              justifyContent: 'center',
              fontSize: 18,
              color: 'white',
              flex: 1,
            }}>
            {spaceInfo.title}
          </AppTypographyHeading>
          <Ionicons name="arrow-forward" size={18} color={'white'} />
        </HStack>

        <View style={{paddingVertical: 12}}>
          <TrackerKeyVa label="Notes" valu={resources.length} />
          <TrackerKeyVa label="PDFs" valu={resources.length} />
          <TrackerKeyVa label="Documents" valu={resources.length} />
          <TrackerKeyVa label="Others" valu={resources.length} />
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
});
