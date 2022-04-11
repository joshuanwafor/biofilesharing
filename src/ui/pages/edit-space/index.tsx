import React from 'react';
import {TextInputProps, View} from 'react-native';
import Template from '../../templates/standardPage';
import {VSpacer} from '../../atoms/shacer';
import {AppInputDefault} from '../../modecules/inputs/default';
import {AppRaisedButton} from '../../atoms/buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Box, Button, ScrollView, Select, TextArea, VStack} from 'native-base';
import {spaceRoomManager} from '../../../store/room';
import {SpacesManager, spacesManager} from '../../../store/spaces';
import {
  NavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import {MainAppNavigationRoutes} from '../../../interface/navigation';
import {TSpace} from '../../../interface/models';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {taxonomiesManager} from '../../../store/taxonomies';
import {AppTypographyBody1} from '../../atoms/typography';
import FastImage from 'react-native-fast-image';
import Ripple from 'react-native-material-ripple';
import {uploadRoomImage} from '../../../services/cloudinary';
import {observe} from 'mobx';
import {observer} from 'mobx-react-lite';

const Screen: React.FC = () => {
  let _recentStoreSpace: TSpace | undefined;
  let navigation = useNavigation<NavigationProp<MainAppNavigationRoutes>>();
  let {
    params: {space},
  } = useRoute<RouteProp<MainAppNavigationRoutes, 'editSpace'>>();
  let [name, setName] = React.useState('');
  let [price, setPrice] = React.useState(1);
  let [description, setDescription] = React.useState('');
  let [photo, setPhoto] = React.useState<string>();
  let [category, setCategory] = React.useState<string[]>([]);
  let [spaceTemp, setSpace] = React.useState<TSpace>();
  let [file, setFile] = React.useState<Asset>();

  const divider = (
    <View style={{height: 1, backgroundColor: 'rgba(200,200,200,.5)'}} />
  );

  function loadSpaceFromStore() {
    console.log('------------');
    if (space == undefined) return;
    _recentStoreSpace = spacesManager.myspaces
      .slice()
      .find(v => v.id == space?.id);
    console.log(_recentStoreSpace, 'After Loading ');
    if (_recentStoreSpace != undefined) {
      setName(_recentStoreSpace.title);
      setDescription(_recentStoreSpace.body);
      setPrice(_recentStoreSpace.price ?? 0);
      setSpace(_recentStoreSpace);
      setCategory(_recentStoreSpace.categories ?? []);
      setPhoto(_recentStoreSpace.photo ?? '');
    }

    console.log('------------**');
  }

  React.useEffect(() => {
    loadSpaceFromStore();
  }, []);

  async function pickImage() {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      if (result.assets != undefined) {
        if (result.assets.length >= 1) {
          setFile(result.assets[0]);
        }
      }
    } catch (error) {}
  }

  async function publishChanges() {
    let link = '';
    if (file != undefined) {
      link = (await uploadRoomImage(file)) ?? '';
      console.log(link);
    }
    let obj: TSpace = {
      body: description,
      status: 'draft',
      title: name,
      price: price,
      photo: link,
    };
    if (category != undefined) {
      obj.categories = category;
    }
    if (space == undefined) {
      console.log('creating space');
      spacesManager.createSpace(obj);
    } else {
      console.log('updating space');
      spacesManager.updateSpace({
        ...space,
        ...obj,
      });

      space = {
        ...space,
        ...obj,
      };
    }
  }

  return (
    <Template
      title={space == undefined ? 'Create Space' : 'Edit Space'}
      show_back
      right_icons={
        <Button
          colorScheme="rose"
          rounded={'full'}
          onPress={() => {
            publishChanges();
            navigation.goBack();
          }}
          leftIcon={<Ionicons name="add-outline" color="white" size={20} />}>
          Publish
        </Button>
      }>
      <ScrollView>
        <VStack style={{padding: 24}} space="2">
          <Ripple
            onPress={() => {
              pickImage();
            }}>
            <Box
              style={{aspectRatio: 1 / 1, borderStyle: 'dashed', width: '40%'}}
              borderWidth={1}
              rounded="lg"
              mb="16px">
              {file != undefined ? (
                <FastImage
                  style={{height: '100%', width: '100%'}}
                  source={{uri: file.uri}}
                />
              ) : null}
              {file == undefined ? (
                <FastImage
                  style={{height: '100%', width: '100%'}}
                  source={{uri: photo}}
                />
              ) : null}
              <VStack h="100%" w="100%" position="absolute">
                <Box w="md" p="12px">
                  <Ionicons name="image-outline" size={24} />
                </Box>
              </VStack>
            </Box>
          </Ripple>

          <AppInputDefault
            label="Name your Space"
            value={name}
            onChangeText={setName}
          />

          <AppInputDefault
            label="Price"
            keyboardType="number-pad"
            value={price + ''}
            onChangeText={text => {
              setPrice(parseInt(text));
            }}
          />

          <TextArea
            bg="gray.100"
            placeholder="Describe Space here"
            borderColor={'red.100'}
            _focus={{borderColor: 'rose.900', borderWidth: 0}}
            _hover={{borderColor: 'rose.900'}}
            style={{borderColor: 'red', borderWidth: 0, fontSize: 16}}
            fontSize="16px"
            variant="unstyled"
            value={description}
            onChangeText={setDescription}
          />

          <Box>
            <AppTypographyBody1 style={{marginBottom: 0, fontWeight: '500'}}>
              CATEGORY
            </AppTypographyBody1>

            <Select
              selectedValue={category[0] ?? ''}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              mt={1}
              onValueChange={category => {
                setCategory([category]);
              }}>
              {taxonomiesManager.taxonomies.map(v => {
                return <Select.Item label={v.name} value={v.id} />;
              })}
            </Select>
          </Box>
        </VStack>
      </ScrollView>
    </Template>
  );
};
export default observer(Screen);
