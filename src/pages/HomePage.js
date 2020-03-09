import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import HomePages from '../components/HomePageComponents';
import { content } from '../components/HomePageComponents/PageCard/content';
import PresentationPage from '../components/HomePageComponents/PresentationPage';

const styles = () => ({
  root: {
    justifyContent: 'center',
    justifyItens: 'center',
    maxHeight: '100%',
    width: '100%',
    minWidth: '100%',
    backgroundColor: '#e3e8eb',
    flexDirection: 'column',
  },
});

class HomePage extends PureComponent {
  render() {
    const { classes } = this.props;
    const Page = ({
      position,
      color, topText,
      middleText,
      bottomText,
      buttomText,
    }) => (
      <HomePages
        topText={topText}
        middleText={middleText}
        bottomText={bottomText}
        buttomText={buttomText}
        position={position}
        color={color}
      />
    );
    return (
      <div className={classes.root}>
        <PresentationPage />
        {content.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <Page
                position="left"
                color={item.color}
                topText={item.topText}
                middleText={item.middleText}
                bottomText={item.bottomText}
                buttomText={item.buttomText}
              />
            );
          }
          return (
            <Page
              position="right"
              color={item.color}
              topText={item.topText}
              middleText={item.middleText}
              bottomText={item.bottomText}
              buttomText={item.buttomText}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ info }) => ({
  info,
});

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(HomePage)));
