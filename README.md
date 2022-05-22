# taimaa [![Node.js CI](https://github.com/youpy/taimaa/actions/workflows/main.yml/badge.svg)](https://github.com/youpy/taimaa/actions/workflows/main.yml)

![taima](https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Cannabis_leaf_2.svg/150px-Cannabis_leaf_2.svg.png)

Yet another stable timer implementation using `ended` event fired by AudioBufferSourceNode

## install

```
$ npm install taimaa
```

## Usage

```javascript
import Timer from "taimaa";

var t = new Timer(new AudioContext());
var id;

id = t.setTimeout(fn, ms);
t.clearTimeout(id);

id = t.setInterval(fn, ms);
t.clearInterval(id);
```
