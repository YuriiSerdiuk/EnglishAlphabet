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

    const repeatLetter = (letter) => {
        makeSound(letter, audioAlphabet, 1);
    }

    return <div>
        <div style={{height:'2em'}} >control panel
        <button
        onClick={()=>randomLetter && repeatLetter(randomLetter)}
        > Repeat word </button>

        </div>
        <div>
            <Alphabet
                hideLogo={true}
                withWinsIcons={true}
                randomLetter={randomLetter}
                callback = {(letter)=>{
                    if(randomLetter === letter) {
                        setTimeout(()=>{startGameLetterVoice(alphabets)},1000)
                    }
                }}
            />
        </div>
    </div>
}

export default  EnglishLetterPronunciation;