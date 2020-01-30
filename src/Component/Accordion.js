import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionSection from './AccordionSection';
import './accordion.css';

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { 
      openTabs: {}
    };
  }

  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openTabs },
    } = this;

    const isOpen = !!openTabs[label];
    
    if (allowMultipleOpen) {
      this.setState({
        openTabs: {
          ...openTabs,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openTabs: {
          [label]: !isOpen
        }
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openTabs },
    } = this;

    return (
      <div className='mainContainer'>
        {children.map((child,index) => (
          <AccordionSection key={index}
            isOpen={!!openTabs[child.props.label]}
            label={child.props.label}
            title={child.props.title}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;
