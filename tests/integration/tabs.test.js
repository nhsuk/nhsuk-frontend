import Tabs from "../../packages/components/tabs/tabs";

// helpers

function dqs(selector) {
	return document.querySelector(selector);
}

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

	describe("Accessibility", () => {
		// beforeEach(() => {
		// 	// Set up markup and initialise tabs
		// 	document.body.innerHTML = validTabsMarkup;
		// 	Tabs();
		// });
		// afterEach(() => {
		// 	// Reset the dom after each test
		// 	document.body.innerHTML = null;
		// });
		// todo: Keyboard - left right etc
		// todo: ARIA updates
	});

	describe("Responsive behaviour", () => {});

	describe("Teardown", () => {});

	describe("Event methods", () => {}); // Hide, show, get, tabs, panels
});
