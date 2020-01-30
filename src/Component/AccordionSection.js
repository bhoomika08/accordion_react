import React from 'react';
import PropTypes from 'prop-types';
import './accordionSection.css';

function AccordionSection(props) {
  return (
    <div className='accordion'>
      <div onClick={() => props.onClick(props.label)} className='tab'>
        {props.title}
        <div className='collapse'>
          {!props.isOpen && <span>&#43;</span>}
          {props.isOpen && <span>&#45;</span>}
        </div>
      </div>
      {props.isOpen && (
        <div className='section'>
          {props.children}
        </div>
      )}
    </div>
  );
}

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default AccordionSection;