import { Colors } from './colors';
import { Frequency } from '../models/constants';

type ButtonState = {
  noAddress: boolean;
  invalidChain: boolean;
  insufficientLiquidity: boolean;
  priceImpact: boolean;
  insufficientBalance: boolean;
  approvalNotReady: boolean;
  isZeroDonation: boolean;
  default: any;
};

const BUTTON_STATE = {
  noAddress: {
    copy: 'Confirm',
    bgColor: Colors.gray[1000],
    textColor: Colors.gray[300],
  },
  invalidChain: {
    copy: 'Confirm',
    bgColor: Colors.gray[1000],
    textColor: Colors.gray[300],
  },
  insufficientLiquidity: {
    copy: 'Confirm',
    bgColor: Colors.gray[1000],
    textColor: Colors.gray[300],
  },
  priceImpact: {
    copy: 'Confirm & Swap Anyway',
    bgColor: Colors.orange[100],
    textColor: Colors.black,
  },
  insufficientBalance: {
    copy: 'Confirm',
    bgColor: Colors.gray[1000],
    textColor: Colors.gray[300],
  },
  approvalNotReady: {
    copy: 'Confirm',
    bgColor: Colors.gray[1000],
    textColor: Colors.gray[300],
  },
  isZeroDonation: {
    copy: 'Confirm',
    bgColor: Colors.gray[1000],
    textColor: Colors.gray[300],
  },
  default: {
    copy: 'Confirm',
    bgColor: Colors.green[100],
    textColor: Colors.green[200],
  },
};

type DonateStylesResult = {
  buttonCopy: string;
  buttonBgColor: string;
  buttonTextColor: string;
};

export function getDonateStyles(state: ButtonState): DonateStylesResult {
  let buttonStateKey: keyof typeof BUTTON_STATE = 'default';

  // Determine which key in BUTTON_STATE matches the current state
  for (const key of Object.keys(BUTTON_STATE) as Array<keyof typeof BUTTON_STATE>) {
    if (state[key]) {
      buttonStateKey = key;
      break;
    }
  }

  // Access the styles from BUTTON_STATE for the determined key
  const styledResult: DonateStylesResult = {
    buttonCopy: BUTTON_STATE[buttonStateKey].copy,
    buttonBgColor: BUTTON_STATE[buttonStateKey].bgColor,
    buttonTextColor: BUTTON_STATE[buttonStateKey].textColor,
  };

  return styledResult;
}

export function getFrequencyPlural(frequency: Frequency) {
  switch (frequency) {
    case 'Monthly':
      return 'Months';
  }
}
