export default class Timer {
  constructor(audioCtx) {
    var frameCount = 1000;

    this.audioCtx = audioCtx;
    this.id = 0;
    this.status = {};
    this.arrayBuffer = this.audioCtx.createBuffer(2, frameCount, this.audioCtx.sampleRate);
  }

  setTimeout(fn, ms) {
    var id = this.id ++;
    var source = this.audioCtx.createBufferSource();

    this.status[id] = true;

    source.buffer = this.arrayBuffer;
    source.loop = true;
    source.connect(this.audioCtx.destination);
    source.onended = () => {
      if (this.status[id]) {
        fn();
        this.clearTimeout(id);
      }
    };

    source.start();
    source.stop(this.audioCtx.currentTime + (ms / 1000));

    return id;
  }

  setInterval(fn, ms) {
    var id = this.id ++;
    var compositeFn = () => {
      if (this.status[id]) {
        fn();
        this.setTimeout(compositeFn, ms);
      }
    };

    this.status[id] = true;
    this.setTimeout(compositeFn, ms);

    return id;
  }

  clearTimeout(id) {
    delete this.status[id];
  }

  clearInterval(id) {
    this.clearTimeout(id);
  }
}
