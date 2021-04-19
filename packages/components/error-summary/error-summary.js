export default () => {
  // Error summary component
  const errorSummary = document.querySelector('.nhsuk-error-summary');

  if (errorSummary) {
    // Focus error summary component if it exists
    errorSummary.focus();
  }
};
