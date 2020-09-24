import Header from './header';

describe('HSE header()', () => {
    describe('Does not throw an error', () => {
        it('if no document exists', () => {
            Header();
        });
    });
});