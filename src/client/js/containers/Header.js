import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

export default class Header extends Component{
    render(){
        return(
            <nav>
                <h1>HEADER</h1>
            </nav>
        )
    }
}
