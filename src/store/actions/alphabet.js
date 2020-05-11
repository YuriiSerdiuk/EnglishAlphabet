import { INIT_LANGUAGES } from '../types'
import { russianAlphabet } from '../../constants/russianAlphabet';
import { styleAlphabet } from '../../assets/alphabet/alphabet';



export const init = () => {
  return {
    type: INIT_LANGUAGES,
    payload: { english: styleAlphabet, russion: russianAlphabet },
  };
};
