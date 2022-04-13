import {Box, Button, FlatList, HStack, VStack} from 'native-base';
import React from 'react';
import {AppTypographyBody1, AppTypographyCaption} from '../../atoms/typography';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppIconButton} from '../../atoms/buttons';
import {FileCard} from './file-card';
import {TFile} from '../../../interface/models';
import {fileManager} from '../../../store/files';
import {observer} from 'mobx-react';

export const RenderFiles = observer(() => {
  React.useEffect(() => {
    fileManager.load();
  });
  return (
    <Box flex={1}>
      <FlatList
        data={fileManager.files}
        renderItem={i => {
          return <FileCard file={i.item} key={i.index} />;
        }}
      /> 
    </Box>
  );
});

export const RenderShareWithFiles = observer(() => {
  React.useEffect(() => {
    fileManager.loadSharedWithMe();
  });
  return (
    <Box>
      <FlatList
      data={fileManager.filesSharedWithMe}
      renderItem={i => {
        return <FileCard file={i.item} key={i.index} />;
      }}
    />
    </Box>
  );
});
