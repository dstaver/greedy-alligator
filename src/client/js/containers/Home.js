import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


function mapStateToProps(store) {
  return {
      data:store.indexReducer,
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions:bindActionCreators(Actions,dispatch)
  };
}


class Home extends Component {
  componentWillMount(){
    this.props.actions.initApp()
  }

  render() {
    return(
        <div>
            <h1>BODY</h1>
        </div>
   );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
