import Panel from '../../packages/components/panel/panel';

const panelHtml = '<div id="nhsuk-panel" class="nhsuk-panel clickable-panel">'
                  + '  <h3><a href="https://www.nhs.uk">Save a life: give blood</a></h3>'
                  + '  <p>Please register today. Donating blood is easy, and saves lives.</p>'
                  + '</div>';

let panel;
const panelWrapper = 'nhsuk-panel__link-wrapper';

const initTest = (html = '') => {
  document.body.innerHTML = html;
  panel = document.querySelector('.nhsuk-panel');
  Panel();
};

describe('NHS.UK panel', () => {
  describe('should add wrapper class to panel', () => {
    it('if clickable-panel class exists', () => {
      initTest(panelHtml);
      panel.click();
      expect(panel.classList).toContain(panelWrapper);
    });
  });
});
