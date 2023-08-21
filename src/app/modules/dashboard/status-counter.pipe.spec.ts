import { StatusCounterPipe } from './status-counter.pipe';

describe('StatusCounterPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusCounterPipe();
    expect(pipe).toBeTruthy();
  });
});
