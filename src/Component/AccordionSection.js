import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './accordionSection.css';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const {
      props: { isOpen, title, label},
    } = this;

    return (
      <div className='accordion'>
        <div className='details' onClick={() => this.props.onClick(label)} className='tab'>
          {title}
          <div className='collapse'>
            {!isOpen && <span>&#43;</span>}
            {isOpen && <span>&#45;</span>}
          </div>
        </div>
        {isOpen && (
          <div className='section'>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;