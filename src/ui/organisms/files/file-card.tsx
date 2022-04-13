import {Box, HStack, VStack} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TFile} from '../../../interface/models';
import {AppTypographyBody1, AppTypographyCaption} from '../../atoms/typography';
import DocIcon from './doc-svgrepo-com.svg';
import OtherIcon from './quip-doc-svgrepo-com.svg';
import PPTIcon from './ppt-svgrepo-com.svg';
import PDFIcon from './pdf-svgrepo-com.svg';
import { FileOptions } from './file-options';

export function FileCard({file}: {file: TFile}) {
  let icon = <OtherIcon  width={30} height={30}/>;
  if (file.ext == 'pdf') {
    icon = <PDFIcon width={30} height={30} />;
  }
  if (file.ext == 'doc') {
    icon = <DocIcon width={30} height={30} />;
  }

  if (file.ext == 'ppt') {
    icon = <PPTIcon width={30} height={30} />;
  }
  return (
    <Box>
      <HStack space="4" p="12px" bg="white" mb="8px" alignItems={'center'}>
        {icon}
        <VStack flex={1}>
          <AppTypographyBody1
            style={{color: 'black', fontSize: 18}}
            numberOfLines={1}>
            {file.name}
          </AppTypographyBody1>
          <HStack>
            <AppTypographyCaption>
              Created: 15 June,2020 | Size: 500kb | {file.ext}
            </AppTypographyCaption>
          </HStack>
        </VStack>
        <FileOptions/>
      </HStack>
    </Box>
  );
}
