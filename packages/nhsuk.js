// Components
import FeedbackBanner from './components/feedback-banner/feedback-banner';
import Header from './components/header/header';
import SkipLink from './components/skip-link/skip-link';
import AutoComplete from './components/header/autocomplete';
import Details from './components/details/details';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Details();
  FeedbackBanner(3000);
  Header();
  SkipLink();
  AutoComplete();
});
