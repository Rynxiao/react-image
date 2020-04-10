import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Image from '.';

const App = () => {
  const [src, setSrc] = useState(
    'http://q8ecjy9yo.bkt.clouddn.com/test.png',
  );
  useEffect(() => {
    setTimeout(() => {
      setSrc(
        'http://q8ecjy9yo.bkt.clouddn.com/th.jpeg',
      );
    });
  }, [src]);

  return (
    <div className="App">
      <Image src={src} errorMessage="some thing bad happen" />
      <Image src="http://q8ecjy9yo.bkt.clouddn.com/th.jpeg" errorMessage="some thing bad happen" />
      <Image src="http://q8ecjy9yo.bkt.clouddn.com/test.png" errorMessage="some thing bad happen" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
