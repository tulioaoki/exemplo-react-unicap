import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import TopBar from '../TopBar';
import bg from '../../../static/images/presentatiopaper.jpg';

const styles = () => ({
  container: {
    height: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundImage: `url(${bg})`,
    'background-repeat': 'no-repeat',
    'background-position': 'center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    marginBottom: 100,
    opacity: '0.9',
    alignItens: 'flex-start',
    alignContent: 'flex-start',
    flexShrink: 1,
  },
});

class PresentationPaper extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TopBar style={{ alignSelf: 'flex-start' }} />
        <Typography style={{
          color: 'white',
          fontSize: 40,
          fontWeight: 'bolder',
          alignSelf: 'center',
          textShadow: '2px 2px 2px #8E8E8E',
        }}
        >
          Este é um exemplo em React para Márcio.
        </Typography>
        <Typography style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bolder',
          alignSelf: 'center',
          marginTop: 20,
          textShadow: '2px 2px 2px #8E8E8E',
        }}
        >
          Tópicos Avançados em Engenharia de Software.
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info,
});

PresentationPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(PresentationPaper)));
