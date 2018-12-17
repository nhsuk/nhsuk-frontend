// Components
import nhsuk_feedbackBanner from './components/feedback-banner/feedback-banner';
import nhsuk_header from './components/header/header';
import nhsuk_skipLink from './components/skip-link/skip-link';

// HTML5 polyfills
import './components/details/details.polyfill';

// Initialize components
nhsuk_feedbackBanner(3000);
nhsuk_header();
nhsuk_skipLink();
