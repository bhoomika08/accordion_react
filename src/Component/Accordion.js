import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AccordionSection from './AccordionSection';
import './accordion.css';
import * as actionTypes from '../store/actions.js';

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };

  // onClick = label => {
  //   const {
  //     props: { allowMultipleOpen },
  //     state: { openTabs },
  //   } = this;

  //   const isOpen = !!openTabs[label];
    
  //   if (allowMultipleOpen) {
  //     this.setState({
  //       openTabs: {
  //         ...openTabs,
  //         [label]: !isOpen
  //       }
  //     });
  //   } else {
  //     this.setState({
  //       openTabs: {
  //         [label]: !isOpen
  //       }
  //     });
  //   }
  // };

  render() {
    const {
      props: { children },
    } = this;

    return (
      <div className='mainContainer'>
        {children.map((child,index) => (
          <AccordionSection key={index}
            isOpen={!!this.props.openTabs[child.props.label]}
            label={child.props.label}
            title={child.props.title}
            onClick={() => this.props.toggleTab(child.props.label, this.props)}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    openTabs: state.openTabs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTab: (tabLabel, props) => dispatch({ type: actionTypes.TOGGLE, payload: {props: props, label: tabLabel }})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
