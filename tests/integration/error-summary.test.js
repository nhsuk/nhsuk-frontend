import ErrorSummary from '../../packages/components/error-summary/error-summary';

describe('Error summary module', () => {
  describe('if no error summary elements exists', () => {
    it('should not throw an error', () => {
      ErrorSummary();
    });
  });

  describe('if an error summary exists', () => {
    beforeEach(() => {
      document.body.innerHTML =
        '<div role="alert" tabindex="-1" class="nhsuk-error-summary"></div>';
      ErrorSummary();
    });

    it('should focus on the error summary', () => {
      const errorSummary = document.querySelector('.nhsuk-error-summary');

      expect(document.activeElement).toBe(errorSummary);
    });

    it('should focus only on the first instance of the error summary', () => {
      const div = document.createElement('div');
      div.innerHTML =
        '<div role="alert" tabindex="-1" class="nhsuk-error-summary"></div>';

      document.body.appendChild(div.firstChild);

      expect(document.body.childElementCount).toBe(2);

      ErrorSummary();

      expect(document.activeElement).toBe(document.body.firstElementChild);
      expect(document.activeElement).not.toBe(document.body.children[1]);
    });
  });
});
