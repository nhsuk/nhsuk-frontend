module.exports = {
  extends: './.stylelintrc.js', // Inherit rules from the main stylelint config
  rules: {
    // Add any custom rules you need specifically for the `tel` folder
    'declaration-block-properties-order': [
      [
        'content',
        'display',
        'grid',
        'flex',
        'justify',
        'align',
        'order',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'border',
        'float',
        'clear',
        'overflow',
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'transform'
      ],
      {
        unspecified: 'bottom'
      }
    ]
  }
}
