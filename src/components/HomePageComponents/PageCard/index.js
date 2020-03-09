import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { PURPLE } from '../../../utils/colors';

const styles = () => ({
  paper: {
    marginTop: 10,
    padding: 60,
    bottom: '20%',
    width: '30%',
    maxWidth: '22%',
    height: '60%',
    minHeight: '60%',
    maxHeight: '60%',
    minWidth: '10vw',
    display: 'flex',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    'z-index': 3,
    position: 'absolute',
    marginLeft: 90,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  paperRight: {
    marginTop: 10,
    padding: 60,
    bottom: '20%',
    width: '30%',
    maxWidth: '22%',
    height: '60%',
    minHeight: '60%',
    maxHeight: '60%',
    minWidth: '10vw',
    display: 'flex',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    'z-index': 3,
    position: 'absolute',
    marginLeft: 0,
    left: '57%',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
});

class HomePageCard extends PureComponent {
  render() {
    const {
      classes,
      topText,
      middleText,
      bottomText,
      buttomText,
      position,
      color,
    } = this.props;
    let paperStyle = classes.paper;
    if (position === 'right') {
      paperStyle = classes.paperRight;
    }
    return (
      <Paper className={paperStyle}>
        <Typography style={{
          fontFamily: 'GTWalsheim',
          fontSize: 24,
          fontWeight: 'bolder',
          color,
        }}
        >
          {topText}
        </Typography>
        <Typography style={{ fontFamily: 'Arial', fontSize: 30, fontWeight: 'bolder' }}>
          {middleText}
        </Typography>
        <Typography style={{ fontFamily: 'Sans-serif', fontWeight: 'bolder' }}>
          {bottomText}
        </Typography>
        {buttomText}
      </Paper>
    );
  }
}

HomePageCard.propTypes = {
  classes: PropTypes.object.isRequired,
  topText: PropTypes.object.isRequired,
  middleText: PropTypes.object.isRequired,
  bottomText: PropTypes.object.isRequired,
  buttomText: PropTypes.object.isRequired,
  position: PropTypes.string,
  color: PropTypes.string,
};

HomePageCard.defaultProps = {
  position: 'left',
  color: PURPLE,
};


export default withRouter(connect()(withStyles(styles)(HomePageCard)));
