import Tabs from "../../packages/components/tabs/tabs";

const validTabsMarkup = `
<div class="nhsuk-tabs" data-module="nhsuk-tabs">
	<h2 class="nhsuk-tabs__title">Contents</h2>
	<ul class="nhsuk-tabs__list">
		<li class="nhsuk-tabs__list-item nhsuk-tabs__list-item--selected">
			<a class="nhsuk-tabs__tab" href="#tab-one">Tab one</a>
		</li>
		<li class="nhsuk-tabs__list-item">
			<a class="nhsuk-tabs__tab" href="#tab-two">Tab two</a>
		</li>
		<li class="nhsuk-tabs__list-item">
			<a class="nhsuk-tabs__tab" href="#tab-three">Tab three</a>
		</li>
	</ul>
	<div class="nhsuk-tabs__panel" id="tab-one"><p>Tab one content</p></div>
	<div class="nhsuk-tabs__panel nhsuk-tabs__panel--hidden" id="tab-two"><p>Tab two content</p></div>
	<div class="nhsuk-tabs__panel nhsuk-tabs__panel--hidden" id="tab-three"><p>Tab three content</p></div>
</div>`;

const setupTest = () => {
  document.body.innerHTML = "";
  document.body.innerHTML = validTabsMarkup;
  Tabs();
};

describe("NHS.UK Tabs()", () => {
  describe("Basics", () => {
    it("should be exported as a function", () => {
      expect(typeof Tabs).toBe("function");
    });
    it("does not throw an error if the required dom nodes are not present", () => {
      Tabs();
    });
  });

  describe("Initialisation", () => {
    it("should match the snapshot before and after initialisation", () => {
      document.body.innerHTML = validTabsMarkup;
      expect(document.body.innerHTML).toMatchSnapshot();
      Tabs();
      expect(document.body.innerHTML).toMatchSnapshot();
    });
  });

  describe("Tab selection and activation", () => {
    it("should activate first tab on initialisation", () => {
      setupTest();
      const links = document.querySelectorAll("ul.nhsuk-tabs__list li a");
      expect(links[0].getAttribute("aria-selected")).toBe("true");
    });

    it("should activate a selected tab when selecting it", () => {
      setupTest();
      const links = document.querySelectorAll("ul.nhsuk-tabs__list li a");
      expect(links[0].getAttribute("aria-selected")).toBe("true");
      links[2].click();
      expect(links[0].getAttribute("aria-selected")).toBe("false");
      expect(links[2].getAttribute("aria-selected")).toBe("true");
    });

    it("should activate the selected panel content when a tab is selected", () => {
      setupTest();
      const panels = document.querySelectorAll(".nhsuk-tabs__panel");
      console.log(document.body.innerHTML);
      console.log(panels[0].outerHTML);
      // Expect the first panel to be visible
      expect(panels[0].classList.contains("nhsuk-tabs__panel--hidden")).toBe(
        true
      );
      expect(panels[1].classList.contains("nhsuk-tabs__panel--hidden")).toBe(
        true
      );
      expect(panels[2].classList.contains("nhsuk-tabs__panel--hidden")).toBe(
        false
      );
    });
  });

  test.todo("Accessibility");

  test.todo("Responsive behaviour");

  test.todo("Teardown");

  test.todo("Event methods"); // Hide, show, get, tabs, panels
});
