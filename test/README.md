# ya-stable-timer

Yet another stable timer implementation using `ended` event fired by AudioBufferSourceNode

## Usage

```javascript
import Timer from 'ya-stable-timer';

var t = new Timer(new AudioContext());

var id = t.setTimeout(fn, ms);
t.clearTimeout(id);

id = t.setInterval(fn, ms);
t.clearInterval(id);
```
