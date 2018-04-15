import React, { Component } from 'react';
import Api from './API/api';
import { withStyles } from 'material-ui/styles';

console.log(Api.getCurrentWeather('Tilburg'));

class Projects extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: false,
      };
    }
  
    render() {
      const { classes } = this.props;
  
      return (
        <div>test</div>
      );
    }
  }

export default Projects;