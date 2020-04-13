# React-Image

basic image preview component with headers

![react](https://img.shields.io/badge/react-v16.13.1-%234FC829)
![node-current](https://img.shields.io/badge/node-v12.13.0-%234FC829)
[![NPM](https://img.shields.io/npm/l/react-image?color=%234FC829&logoColor=%235E5E5E)](https://github.com/Rynxiao/react-image/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/Rynxiao/react-image.svg?branch=master)](https://travis-ci.org/Rynxiao/react-image)
[![NPM Downloads](https://img.shields.io/npm/dw/rt-image)](https://www.npmjs.com/package/rt-image)

## Usage

```shell script
npm install rt-image

# yarn add rt-image
```

### examples

```typescript jsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Image from 'rt-image';

const images = [
  'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
  'https://images.pexels.com/users/avatars/454176/naturally-beautiful-inspiration-893.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress',
  'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const App = () => {
  const [src, setSrc] = useState(images[0]);
  useEffect(() => { setTimeout(() => setSrc(images[1])); }, [src]);

  return (
    <div className="App">
      <Image style={{ marginRight: '5px' }} src={src} errorMessage="some thing bad happen" />
      <Image style={{ marginRight: '5px' }} src={images[2]} errorMessage="load image error" />
      <Image src={images[3]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

#### request image width headers

```typescript jsx
<Image src="https://xxx.images.com/11111" headers={{ Authorization: 'xxx' }} />
```
#### custom image loader

```typescript jsx
<Image src="https://xxx.images.com/11111" loader={() => <div>loading...</div>} />
```
#### custom error displayer
```typescript jsx
<Image src="https://xxx.images.com/11111" renderError={() => <div>some error happens</div>} />
```

![example](./example/example.gif)

### Properties

|   | type  | description  | required |
|:---|:---|:---|:---|
| src  | string  | image url  | true |
| width  | number  | image component width   | false |
| height  | number  | image component height, default same with width  | false |
| className  | string  | custom className to image component  | false |
| style  | React.CSSProperties  | styles  | false |
| description  | string  | used as image `alt` currently  | false |
| errorMessage  | string  | custom error message  | false |
| headers  | object  | request headers  | false |
| loader  | () => React.ReactNode / null  | custom image loader  | false |
| renderError  |() => React.ReactNode / null   | custom error displayer  | false |

## License

MIT © [Rynxiao/react-image](https://github.com/Rynxiao/react-image)


