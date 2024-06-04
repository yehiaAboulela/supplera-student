import { NewOrUsedPipe } from './new-or-used.pipe';

describe('NewOrUsedPipe', () => {
  it('create an instance', () => {
    const pipe = new NewOrUsedPipe();
    expect(pipe).toBeTruthy();
  });
});
