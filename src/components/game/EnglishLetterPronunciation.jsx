import React, {useEffect, useState} from 'react';
import _ from "lodash";

import Alphabet from "../alphabet";
import {useSelector} from "react-redux";
import {makeSound} from "../../utils/helper";
import { audioAlphabet } from "../../assets/alphabet/alphabet";

const EnglishLetterPronunciation = () => {
    const [randomLetter, setRandomLetter] = useState('');
    const alphabets =  useSelector(store => store.alphabets);
    useEffect(()=>{
        if (!_.isEmpty(alphabets)) {
         startGameLetterVoice(alphabets);
        }
    },[alphabets]);

    const startGameLetterVoice = (alphabets) => {
        const randomNum =  Math.round(Math.random()*25)
        const letter = alphabets.english[randomNum].letter;
        setRandomLetter(letter);
        setTimeout(()=>{
            makeSound(letter, audioAlphabet, 1);
        },2000);
    }

    return <div>
        <div>control panel
        <button>start</button>
        <button>pause</button>
        <button>repeat</button>
            <span> 0 i_n_t_e_r_v_a_l 10</span>
        </div>
        <div>
            <Alphabet
                hideLogo={true}
                callback = {(letter)=>{
                    if(randomLetter === letter) {
                        console.log('correct');
                        startGameLetterVoice(alphabets);
                    }else {
                        console.log('correct');
                    }
                }}
            />
        </div>
    </div>
}

export default  EnglishLetterPronunciation;