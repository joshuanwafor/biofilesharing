import {Box, FlatList} from 'native-base';
import React from 'react';
import {ResourceCard} from '../../organisms/resource-card';

export const SpaceRoomFeed = () => {
  return (
    <Box px="0px">
      <FlatList
        data={[1, 2, 23, 3, 4, 5, 5, 6, 1, 2, 3, 4, 5, 6]}
        renderItem={() => {
          return <ResourceCard />;
        }}
      />
    </Box>
  );
};
