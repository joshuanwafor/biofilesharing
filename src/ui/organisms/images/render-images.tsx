import {Box} from 'native-base';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageView from 'react-native-image-viewing';
import Ripple from 'react-native-material-ripple';

export function RenderImages({
  images,
  enableZoom,
}: {
  images: string[];
  enableZoom: boolean;
}) {
  const [visible, setIsVisible] = React.useState(false);

  const imagess = [
    {
      uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    },
  ];

  if (images.length == 0) {
    return <Box></Box>;
  }
  const Media = (
    <Ripple
      onLongPress={() => {
        if (enableZoom) {
          setIsVisible(true);
        }
      }}
      disabled={!enableZoom}>
      <Box style={{aspectRatio: 1 / 1}} bg="rose.500">
        <FastImage
          style={{width: '100%', height: '100%'}}
          source={{uri: images[0]}}
        />
      </Box>
    </Ripple>
  );

  return (
    <React.Fragment>
      <ImageView
        images={imagess}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      {Media}
    </React.Fragment>
  );
}
