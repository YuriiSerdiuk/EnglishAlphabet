import  React from 'react';

import {Route, Routes} from "react-router-dom";
import EnglishAlphabet from "../components/alphabet/Alphabet.container";
import UkraineAlphabet from "../components/ukraineAlphabet/UkraineAlphabet.container";
import RussianAlphabet from "../components/russianAlphabet/RussianAlphabet.conteiner";
import Numbers from "../components/numbers/Numbers.container";
import Games from "../components/games/Games.container";
import Game from "../components/game";
import Setting from "../components/setting/Setting.container";
import Contacts from "../components/contacts/Contacts.container";

const RoutesComponent = () => {
    return  <Routes>
        <Route path="/" element={<EnglishAlphabet />} />
        <Route path="/english" element={<EnglishAlphabet />} />
        <Route path="/ukraine" element={<UkraineAlphabet />} />
        <Route path="/russian" element={<RussianAlphabet />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/games" element={<Games />} />
        <Route path="games/:gamesId" element={<Game/>} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/contacts" element={<Contacts />} />
    </Routes>
}

export default RoutesComponent;