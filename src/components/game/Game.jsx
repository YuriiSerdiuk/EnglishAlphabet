import React from "react";
import { useParams, Navigate, useLocation} from 'react-router-dom';
import {GamesConfig} from "../../constants/constant";

const GameContainer = () => {
    let params = useParams();
    let location = useLocation();

const gamesId = params.gamesId;

return GamesConfig[gamesId] || <Navigate to="/games" state={{ from: location }} replace />
}

export default GameContainer;