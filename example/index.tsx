// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import Image from 'rt-image';

const App = () => {
  const [src, setSrc] = useState(
    'https://p3.pstatp.com/large/6c2a0008d4bf2b6df897',
  );
  useEffect(() => {
    setTimeout(() => {
      setSrc(
        'https://cdn131.picsart.com/319977743108201.jpg?type=webp&to=crop&r=256',
      );
    });
  }, [src]);

  return (
    <div className="App">
      <Image src={src} errorMessage="some thing bad happen" />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
);
