import React from 'react'
import { connect } from 'react-redux';

import RussianAlphabet from './RussianAlphabet'

const RussianAlphabetContainer = (props) => {
    return (<RussianAlphabet {...props} />)
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