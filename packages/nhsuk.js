// Components
import Header from './components/header/header';
import SkipLink from './components/skip-link/skip-link';
import Details from './components/details/details';
import nhsuk_card from './components/card/card';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Details();
  Header();
  SkipLink();
  nhsuk_card();
});