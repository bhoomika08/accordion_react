import React from 'react';
import Accordion from './Component/Accordion';
import './App.css';

const products = [
  {
    label: 'label1',
    title: 'Collapsible Item #1',
    detail: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you 
    probably haven't heard of them accusamus labore sustainable VHS.`, 
  },
  {
    label: 'label2',
    title: 'Collapsible Item #2',
    detail: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
    Brunch 3 wolf moon tempor, sunt aliqua putnpm a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident 
    probably haven't heard of them accusamus labore sustainable VHS.`, 
  },
  {
    label: 'label3',
    title: 'Collapsible Item #3',
    detail: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you 
    probably haven't heard of them accusamus labore sustainable VHS.`, 
  },
  {
    label: 'label4',
    title: 'Collapsible Item #4',
    detail: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you 
    probably haven't heard of them accusamus labore sustainable VHS.`,  
  },
]

function App() {
  return (
    <div className='App'>
      <Accordion allowMultipleOpen={false}>
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
