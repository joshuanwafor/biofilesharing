import React from 'react';
import {Image, View} from 'react-native';

const logo_size = 100;
export const PngBitcoinLogo: React.FC<{size?: number}> = ({
  size = logo_size,
}) => {
  return (
    <Image
      source={require('../../pngs/bitcoin-btc-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngAlgoLogo: React.FC<{size?: number}> = ({size = logo_size}) => {
  return (
    <Image
      source={require('../../pngs/algorand-algo-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngBnbLogo: React.FC<{size?: number}> = ({size = logo_size}) => {
  return (
    <Image
      source={require('../../pngs/binance-coin-bnb-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngBitcoinCashLogo: React.FC<{size?: number}> = ({
  size = logo_size,
}) => {
  return (
    <Image
      source={require('../../pngs/bitcoin-cash-bch-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngDogecoinLogo: React.FC<{size?: number}> = ({
  size = logo_size,
}) => {
  return (
    <Image
      source={require('../../pngs/dogecoin-doge-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngLitcoinLogo: React.FC<{size?: number}> = ({
  size = logo_size,
}) => {
  return (
    <Image
      source={require('../../pngs/litecoin-ltc-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngEtherLogo: React.FC<{size?: number}> = ({size = logo_size}) => {
  return (
    <Image
      source={require('../../pngs/ethereum-eth-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngTronLogo: React.FC<{size?: number}> = ({size = logo_size}) => {
  return (
    <Image
      source={require('../../pngs/tron-trx-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngMaticLogo: React.FC<{size?: number}> = ({size = logo_size}) => {
  return (
    <Image
      source={require('../../pngs/polygon-matic-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export const PngTetherLogo: React.FC<{size?: number}> = ({
  size = logo_size,
}) => {
  return (
    <Image
      source={require('../../pngs/tether-usdt-logo.png')}
      width={size}
      height={size}
      style={{width: size, height: size}}
    />
  );
};

export type PngLogoTypes =
  | 'BTC'
  | 'ALGO'
  | 'TRX'
  | 'DOGE'
  | 'BCH'
  | 'LTC'
  | 'ETH'
  | 'BNB'
  | 'USDT'
  | 'MATIC';

export const RenderPngLogo: React.FC<{size?: number; type: PngLogoTypes}> = ({
  size = logo_size,
  type,
}) => {
  switch (type) {
    case 'ALGO':
      return <PngAlgoLogo size={size} />;
    case 'BNB':
      return <PngBnbLogo size={size} />;
    case 'BTC':
      return <PngBitcoinLogo size={size} />;
    case 'MATIC':
      return <PngMaticLogo size={size} />;
    case 'LTC':
      return <PngLitcoinLogo size={size} />;
    case 'DOGE':
      return <PngDogecoinLogo size={size} />;
    case 'TRX':
      return <PngTronLogo size={size} />;
    case 'ETH':
      return <PngEtherLogo size={size} />;
    case 'USDT':
      return <PngTetherLogo size={size} />;
    default:
      return <View />;
  }
};
