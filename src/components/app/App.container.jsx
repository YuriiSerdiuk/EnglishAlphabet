import React, { useEffect } from "react";
import { connect } from 'react-redux';

import App from './App'
import { init } from '../../store/actions/alphabet'

const AppContainer = ({ initLanguage, otherProps }) => {
    useEffect(() => {
        initLanguage();
    }, [initLanguage]);

    return (<App {...otherProps} />)
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    initLanguage: init,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppContainer);