import 'web-audio-test-api';
import Timer from '../src/';
import assert from 'power-assert';

describe('Timer', () => {
  const audioCtx = new AudioContext();

  beforeEach(() => {
    audioCtx.$reset();
  });

  describe('#setTimeout', () => {
    it('calls given callback', () => {
      const t = new Timer(audioCtx);
      var called = false;

      t.setTimeout(() => {
        called = true;
      }, 1000);

      audioCtx.$processTo('00:00.500');

      assert(!called);

      audioCtx.$processTo('00:01.000');

      assert(called);
    });

    it('returns id for canceling', () => {
      const t = new Timer(audioCtx);
      var called = false;
      const id = t.setTimeout(() => {
        called = true;
      }, 1000);

      audioCtx.$processTo('00:00.500');

      assert(!called);

      t.clearTimeout(id);

      audioCtx.$processTo('00:01.000');

      assert(!called);
    });
  });

  describe('#setInterval', () => {
    it('calls given callback', () => {
      const t = new Timer(audioCtx);
      var numCalls = 0;

      t.setInterval(() => {
        numCalls += 1;
      }, 1000);

      audioCtx.$processTo('00:00.500');

      assert(numCalls === 0);

      audioCtx.$processTo('00:01.000');

      assert(numCalls === 1);

      audioCtx.$processTo('00:02.000');

      assert(numCalls === 2);
    });

    it('returns id for canceling', () => {
      const t = new Timer(audioCtx);
      var numCalls = 0;
      const id = t.setInterval(() => {
        numCalls++;
      }, 1000);

      audioCtx.$processTo('00:00.500');

      assert(numCalls === 0);

      audioCtx.$processTo('00:01.000');

      assert(numCalls === 1);

      t.clearTimeout(id);

      audioCtx.$processTo('00:02.000');

      assert(numCalls === 1);
    });
  });
});
