// Components
import FeedbackBanner from './components/feedback-banner/feedback-banner';
import Header from './components/header/header';
import SkipLink from './components/skip-link/skip-link';
import AutoComplete from './components/header/autocomplete';

// HTML5 polyfills
import './components/details/details.polyfill';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  FeedbackBanner(3000);
  Header();
  SkipLink();
  AutoComplete();
});
