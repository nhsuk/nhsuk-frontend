const nhsuk_panel = require("../../packages/components/panel/panel");

test('should add wrapper class to panel', () => {
  document.body.innerHTML =
    '<div id="nhsuk-panel" class="nhsuk-panel clickable-panel">' +
    '  <h3><a href="https://www.nhs.uk">Save a life: give blood</a></h3>' +
    '  <p>Please register today. Donating blood is easy, and saves lives.</p>' +
    '</div>';
  nhsuk_panel();
  expect(document.getElementById('nhsuk-panel').classList).toContain('nhsuk-panel__link-wrapper');
});

test('should not add wrapper class to panel', () => {
  document.body.innerHTML =
    '<div id="nhsuk-panel" class="nhsuk-panel">' +
    '  <h3><a href="https://www.nhs.uk">Save a life: give blood</a></h3>' +
    '  <p>Please register today. Donating blood is easy, and saves lives.</p>' +
    '</div>';
  nhsuk_panel();
  expect(document.getElementById('nhsuk-panel').classList). not.toContain('nhsuk-panel__link-wrapper');
});
