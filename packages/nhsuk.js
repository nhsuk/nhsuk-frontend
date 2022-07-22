// Components
import Card from './components/card/card';
import CharacterCount from './components/character-count/character-count';
import Checkboxes from './components/checkboxes/checkboxes';
import Details from './components/details/details';
import ErrorSummary from './components/error-summary/error-summary';
import Header from './components/header/header';
import Radios from './components/radios/radios';
import SkipLink from './components/skip-link/skip-link';
import Tabs from './components/tabs/tabs';

import './polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Card();
  CharacterCount();
  Checkboxes();
  Details();
  ErrorSummary();
  Header();
  Radios();
  SkipLink();
  Tabs();
});
