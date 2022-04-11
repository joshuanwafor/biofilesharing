import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Box, HStack, Avatar, VStack} from 'native-base';
import React from 'react';
import {compareAsc, format, formatRelative} from 'date-fns';
import Ripple from 'react-native-material-ripple';
import {Modalize} from 'react-native-modalize';
import {TResource} from '../../../interface/models';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {
  AppTypographyBody1,
} from '../../atoms/typography';
import {RenderImages} from '../images/render-images';
import {ResourceCardOptions} from './options';
import {userManager} from '../../../store/user';

export function ResourceCard({item}: {item: TResource}) {
  const navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();

  const modalRef = React.useRef<Modalize>(null);
  const onOpen = () => {
    modalRef.current?.open();
  };
  const onClose = () => {
    modalRef.current?.close();
  };

  const MessageInfo = (
    <Box>
      <HStack alignItems={'center'} space="2" justifyContent={'space-between'}>
        <HStack alignItems={'center'} space="2">
          {/* <Avatar size={6} /> */}
          <AppTypographyBody1 style={{color: 'gray', fontWeight: 'bold'}}>
            Admin
          </AppTypographyBody1>
        </HStack>
        <HStack alignItems={'center'} space={2}>
          <AppTypographyBody1 style={{color: 'gray'}}>
            {/* {new Date(item.created_at).toDateString()} */}
            {formatRelative(new Date(item.created_at), new Date())}
          </AppTypographyBody1>
          {userManager.user?.id == item.publisher_id ? (
            <ResourceCardOptions resource={item} />
          ) : null}
        </HStack>
      </HStack>
    </Box>
  );

  const Footer = <HStack justifyContent={'flex-end'}></HStack>;

  return (
    <Box my="6px">
      <Box
        p="12px"
        pb="16px"
        bg="white"
        rounded={'md'}
        borderBottomWidth={0.5}
        borderColor="gray.300">
        <VStack space={'2'}>
          {MessageInfo}
          <Ripple
            onPress={() => {
              navigation.navigate('viewResource', {res: item});
            }}>
            <VStack space={'2'}>
              <Box>
                <AppTypographyBody1
                  style={{color: 'black'}}
                  numberOfLines={5}
                  ellipsizeMode="tail">
                  {item.body ?? 'My body goes here'}
                </AppTypographyBody1>
              </Box>
              {item.images.length >= 1 ? (
                <Box rounded="md" overflow={'hidden'} bg="red.100">
                  <RenderImages images={item.images} enableZoom={false} />
                </Box>
              ) : null}
            </VStack>
          </Ripple>
          {Footer}
        </VStack>
      </Box>
    </Box>
  );
}
