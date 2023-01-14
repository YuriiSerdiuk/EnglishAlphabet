import React, {useEffect, useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import HearingIcon from '@mui/icons-material/Hearing';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import _ from "lodash";

import Alphabet from "../../alphabet";
import {useSelector} from "react-redux";
import {makeSound} from "../../../utils/helper";
import { audioAlphabet } from "../../../assets/alphabet/alphabet";

import './EnglishLetterPronunciation.scss';
const EnglishLetterPronunciation = () => {
    const [randomLetter, setRandomLetter] = useState('');
    const [loading, setLoading] = React.useState(false);
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

    const repeatLetterStart = () => {
        setLoading(true);
        randomLetter && makeSound(randomLetter, audioAlphabet, 1);
        setTimeout(()=>{setLoading(false)},1000)
    }

    return <div className="game-wrapper">
        <ModalWindow/>
        <div style={{height:'2em'}} >control panel
            <LoadingButton
                onClick={ repeatLetterStart }
                endIcon={<HearingIcon />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                Repeat letter
            </LoadingButton>

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
const ModalWindow = modal =>{
const [active, setActive] = useState(true);
    return <div className={`modal-window  ${active ? 'active': 'hide'}`}>
        <SlowMotionVideoIcon onClick={()=>{
            setActive(false);
        }
        }/>
           </div>
}
export default  EnglishLetterPronunciation;