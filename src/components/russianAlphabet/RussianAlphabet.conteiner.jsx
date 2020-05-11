import React from 'react'
import { connect } from 'react-redux';

import RussianAlphabet from './RussianAlphabet'
// import { audioAlphabet } from "../../assets/alphabet/alphabet";
import { audioRusianAlphabet } from "../../constants/russianAlphabet";


const RussianAlphabetContainer = (props) => {
    return (<RussianAlphabet {...props} audioAlphabet={audioRusianAlphabet} />)
}

const mapStateToProps = ({ alphabets }) => ({
    alphabet: alphabets.russion
});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RussianAlphabetContainer);