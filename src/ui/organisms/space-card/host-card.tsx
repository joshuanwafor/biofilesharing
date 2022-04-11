import {observer} from 'mobx-react-lite';
import {Box, HStack, Skeleton, theme, VStack} from 'native-base';
import {space} from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';
import {TUser} from '../../../interface/models';
import {usersProfileManager} from '../../../store/userProfiles';
import {AppTypographyBody1, AppTypographyCaption} from '../../atoms/typography';

export const HostArea = observer(({userID}: {userID: string}) => {
  let user: TUser = usersProfileManager.items[userID];

  React.useEffect(() => {
    usersProfileManager.loadContent(userID ?? '');
  }, []);

  if (user == undefined) {
    return (
      <HStack space={'2'}>
        <Skeleton h={'12px'} w="100px" />
        <Skeleton h={'12px'} w="40px" />
      </HStack>
    );
  }
  return (
    <HStack space="8px">
      <AppTypographyBody1
        style={{fontWeight: 'bold', color: theme.colors.rose[900]}}>
        {user.fullname ?? 'No name'}
      </AppTypographyBody1>
      <Box rounded={'sm'} bg="gray.200" p="4px" px="6px" overflow={'hidden'}>
        <AppTypographyCaption style={{fontWeight: 'bold'}}>
          Host
        </AppTypographyCaption>
      </Box>
    </HStack>
  );
});
