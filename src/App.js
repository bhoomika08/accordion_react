import React from 'react';
import Accordion from './Component/Accordion';
import './App.css';

const products = [
  {
    label: 'label1',
    title: 'Title 1',
    detail: 'Detail 1', 
  },
  {
    label: 'label2',
    title: 'Title 2',
    detail: 'Detail 2', 
  },
  {
    label: 'label3',
    title: 'Title 3',
    detail: 'Detail 3', 
  },
  {
    label: 'label4',
    title: 'Title 4',
    detail: 'Detail 4', 
  },
]

function App() {
  return (
    <div className='App'>
      <Accordion allowMultipleOpen={true}>
        {products.map((product, index) => {
          return (
          <div key={index} label={product.label} title={product.title}>
            <p>
              {product.detail}
            </p>
          </div>
          );
        })
        }
      </Accordion>
    </div>
  );
}

export default App;
