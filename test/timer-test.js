import 'web-audio-test-api';
import Timer from '../src/';
import assert from 'power-assert';

describe('Timer', () => {
  const audioCtx = new AudioContext();

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
});
