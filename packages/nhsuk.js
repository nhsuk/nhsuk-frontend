// Components
import nhsuk_header from './components/header/header';
import nhsuk_skipLink from './components/skip-link/skip-link';
import autocomplete from './components/header/autocomplete';

// HTML5 polyfills
import './components/details/details.polyfill';

// Initialize components
document.addEventListener('DOMContentLoaded', function() {
  nhsuk_header();
  nhsuk_skipLink();
  autocomplete();
})
