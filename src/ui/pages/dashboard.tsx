import * as Progress from 'react-native-progress';
import AddIcon from './../atoms/icons/add-svgrepo-com.svg';
import DocIcon from './../atoms/icons/doc-svgrepo-com.svg';
import ExcelIcon from './../atoms/icons/xls-svgrepo-com.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OtherIcon from './../atoms/icons/quip-doc-svgrepo-com.svg';
import PDFIcon from './../atoms/icons/pdf-svgrepo-com.svg';
import PPTIcon from './../atoms/icons/ppt-svgrepo-com.svg';
import React from 'react';
import StandardPageTemplate from '../templates/dashboard';
import {AppTypographyBody1, AppTypographySubHeading} from '../atoms/typography';
import {Box, Button, HStack, ScrollView, useTheme, VStack} from 'native-base';
import {Dimensions, View} from 'react-native';
import {FileCard} from '../organisms/files/file-card';
import {fileManager} from '../../store/files';
import {HSpacer, VSpacer} from '../atoms/shacer';
import {observer} from 'mobx-react';
import {ShareFileComp} from '../organisms/share';

const Screen: React.FC<{}> = () => {
  const theme = useTheme();

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
      <ScrollView>
        <VStack flex={1} py="12px" space="4">
          <VStack space="2" mx="24px" bg="white">
            <HStack>
              <Box p="4px" px="8px" bg="gray.100" rounded={'md'}>
                <AppTypographyBody1 style={{color: 'black'}}>
                  Space
                </AppTypographyBody1>
              </Box>
            </HStack>

            <Box rounded={'xl'} bg="blue.900" p="20px" px="24px">
              <HStack space="4" justifyContent={'space-between'}>
                <Progress.Pie
                  color={theme.colors.yellow[500]}
                  progress={0.4}
                  size={50}
                />
                <Box>
                  <AppTypographySubHeading
                    style={{color: 'white', fontWeight: 'bold'}}>
                    Available Space
                  </AppTypographySubHeading>
                  <AppTypographyBody1 style={{color: 'white'}}>
                    10MB/2GB
                  </AppTypographyBody1>
                </Box>
              </HStack>
            </Box>
          </VStack>
          <VStack space="4" mx="24px" bg="white">
            <HStack>
              <Box p="4px" px="8px" bg="gray.100" rounded={'md'}>
                <AppTypographyBody1 style={{color: 'black'}}>
                  Files shared
                </AppTypographyBody1>
              </Box>
            </HStack>
            <RenderFileCategories />
          </VStack>
          <VStack space="4" mx="24px" bg="white">
            <HStack>
              <Box p="4px" px="8px" bg="gray.100" rounded={'md'}>
                <AppTypographyBody1 style={{color: 'black'}}>
                  Recently Share with me
                </AppTypographyBody1>
              </Box>
            </HStack>
            {fileManager.files.map((v, i) => (
              <FileCard file={v} key={i} />
            ))}
          </VStack>
        </VStack>
      </ScrollView>
      <HStack
        p="12px"
        justifyContent={'space-between'}
        position="absolute"
        bottom={0}
        w="100%">
        <Box></Box>
        <ShareFileComp />
      </HStack>
    </StandardPageTemplate>
  );
};

function RenderFileCategories() {
  function Card({type, val}: {type: string; val: string}) {
    const size = Dimensions.get('window').width / 4;
    let Comp = <AddIcon width={40} height={40} />;

    switch (type) {
      case 'pdf':
        Comp = <PDFIcon width={size} height={size} />;
        break;
      case 'xls':
        Comp = <ExcelIcon width={size} height={size} />;
        break;
      case 'ppt':
        Comp = <PPTIcon width={size} height={size} />;
        break;
      case 'doc':
        Comp = <DocIcon width={size} height={size} />;
        break;
      case 'other':
        Comp = <OtherIcon width={size} height={size} />;
        break;
      case 'add':
        Comp = <AddIcon width={size} height={size} />;
        break;
    }
    return (
      <React.Fragment>
        <VStack alignItems={'center'}>
          {Comp}
          <Box>
            <AppTypographyBody1>{val}</AppTypographyBody1>
          </Box>
        </VStack>
      </React.Fragment>
    );
  }
  return (
    <VStack space={'4'}>
      <HStack justifyContent={'space-around'}>
        <Card type="pdf" val="0 Files" />
        <Card type="doc" val="0 Files" />
        <Card type="xls" val="0 Files" />
      </HStack>
      <HStack justifyContent={'space-around'}>
        <Card type="ppt" val="0 Files" />
        <Card type="other" val="0 Files" />
        <Card type="add" val="" />
      </HStack>
    </VStack>
  );
}

export default observer(Screen);
