const Header = require('../../../packages/components/header/header');

describe('Header', () => {
  let header;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="nhsuk-navigation">
        <ul class="nhsuk-header__navigation-list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <button class="nhsuk-header__menu-toggle"></button>
        <div class="nhsuk-mobile-menu-container"></div>
      </div>
    `;

    header = Header;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('mobile menu should open and close properly', () => {
    const mobileMenuToggleButton = document.querySelector('.nhsuk-header__menu-toggle');
    console.log(header)
    expect(header.menuIsOpen).toBe(false);

    // Simulate clicking the mobile menu toggle button
    mobileMenuToggleButton.click();
    expect(header.menuIsOpen).toBe(true);

    // Simulate clicking the mobile menu close button
    header.mobileMenuCloseButton.click();
    expect(header.menuIsOpen).toBe(false);
  });

  test('calculateBreakpoints should set breakpoints correctly', () => {
    header.calculateBreakpoints();
    const expectedBreakpoints = [90, 175, 260]; // These values are based on the provided DOM structure

    expect(header.breakpoints).toEqual(expectedBreakpoints);
  });

  // Add more tests for other methods and functionality
});
