import {useRoute, RouteProp} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {Box, FlatList} from 'native-base';
import React from 'react';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {spaceRoomManager} from '../../../store/room';
import {ResourceCard} from '../../organisms/resource-card';

export const SpaceRoomFeed = observer(() => {
  const {
    params: {space},
  } = useRoute<RouteProp<MainAppNavigationRoutes, 'spaceRoom'>>();

  React.useEffect(() => {
    spaceRoomManager.loadSpaceRoomResources(space.id ?? '');
  }, []);

  let reses = spaceRoomManager.roomMap[space.id ?? ''] ?? [];
  return (
    <Box px="0px">
      <FlatList
        data={reses.slice().sort(function (a, b) {
          return b.created_at - a.created_at;
        })}
        renderItem={i => {
          return <ResourceCard item={i.item} />;
        }}
      />
    </Box>
  );
});
