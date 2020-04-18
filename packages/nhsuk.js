// Components
import Header from './components/header/header';
import SkipLink from './components/skip-link/skip-link';
import Details from './components/details/details';
import Radios from './components/radios/radios';
import Checkboxes from './components/checkboxes/checkboxes';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Details();
  Header();
  SkipLink();
  Radios();
  Checkboxes();
});
