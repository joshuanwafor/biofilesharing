import {observer} from 'mobx-react';
import {Box, FlatList} from 'native-base';
import React from 'react';
import {spaceRoomManager} from '../../../store/room';
import {ResourceCard} from '../../organisms/resource-card';

export const SpaceRoomFeed = observer(() => {
  React.useEffect(() => {
    spaceRoomManager.loadSpaceRoomResources('global');
  }, []);

  let reses = spaceRoomManager.roomMap['global'] ?? [];
  return (
    <Box px="0px">
      <FlatList
        data={reses}
        renderItem={i => {
          console.log(i.item);

          return <ResourceCard item={i.item} />;
        }}
      />
    </Box>
  );
});
