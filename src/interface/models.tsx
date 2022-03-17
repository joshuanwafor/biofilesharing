import {Asset} from 'react-native-image-picker';



export interface Request {
  user_id: string;

  type: 'sell' | 'buy';
  token_id: string;
  token_network: string;

  token_unit_rate: number; // 1 USDT for 540
  token_units: number; // 1000 USDT

  is_native_token: boolean;
  fiat_amount: number;

  created_at: number;
  updated_at: number;

  config: {
    allow_fragments: boolean;
    start_limit: number;
    stop_limit: number;
    payment_method: 'bank-transfer' | '-';
    bank_details: {};
    instructions: string;
  };
}



export interface NewRequestItem {
  label?: string;
  description?: string;
  amount?: string;
  category?: string;
  assets: Asset[];
}

export interface NewRequest {
  items: NewRequestItem;
  priority: string;
  delivery: string;
  type: string;
}








