// Components
import Card from './components/card/card';
import Checkboxes from './components/checkboxes/checkboxes';
import Details from './components/details/details';
import ErrorSummary from './components/error-summary/error-summary';
import Header from './components/header/header';
import Radios from './components/radios/radios';
import SkipLink from './components/skip-link/skip-link';

import './polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Card();
  Checkboxes();
  Details();
  ErrorSummary();
  Header();
  Radios();
  SkipLink();
});
