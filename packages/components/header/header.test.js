import Header from './header';

describe('NHS.UK header()', () => {
  describe('Does not throw an error', () => {
    it('if no document exists', () => {
      Header();
    });
  });
});
