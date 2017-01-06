# taimaa

Yet another stable timer implementation using `ended` event fired by AudioBufferSourceNode

## install

```
$ npm install taimaa
```

## Usage

```javascript
import Timer from 'taimaa';

var t = new Timer(new AudioContext());

var id = t.setTimeout(fn, ms);
t.clearTimeout(id);

id = t.setInterval(fn, ms);
t.clearInterval(id);
```
