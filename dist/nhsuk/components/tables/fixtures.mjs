import { outdent } from 'outdent';
import { components } from '#lib';

let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;

/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 'm',
      head: [{
        text: 'Skin symptoms'
      }, {
        text: 'Possible cause'
      }],
      rows: [[{
        text: 'Blisters on lips or around the mouth'
      }, {
        text: 'Cold sores'
      }], [{
        text: 'Itchy, dry, cracked, sore'
      }, {
        text: 'Eczema'
      }], [{
        text: 'Itchy blisters'
      }, {
        text: 'Shingles, chickenpox'
      }]]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with empty items': {
    context: {
      caption: 'Vaccinations given',
      captionSize: 'm',
      head: [{
        text: 'Date'
      }, {
        text: 'Vaccine'
      }, false],
      rows: [[{
        text: '10 July 2024'
      }, {
        text: 'RSV'
      }, false], false]
    }
  },
  'with missing data': {
    context: {
      caption: 'Vaccinations given',
      captionSize: 'm',
      head: [{
        text: 'Date'
      }, {
        text: 'Vaccine'
      }, {
        text: 'Product'
      }],
      rows: [[{
        text: '10 July 2024'
      }, {
        text: 'RSV'
      }, {
        text: 'Abrysvo'
      }], [{
        text: '6 September 2023'
      }, {
        text: 'Flu'
      }, {
        text: 'No data',
        classes: 'nhsuk-u-secondary-text-colour'
      }]]
    }
  },
  'with numeric data': {
    context: {
      caption: 'Prescription prepayment certificate (PPC) charges',
      captionSize: 'm',
      head: [{
        text: 'Item'
      }, {
        text: 'Current charge',
        format: 'numeric'
      }, {
        text: 'New charge',
        format: 'numeric'
      }],
      rows: [[{
        text: '3-month'
      }, {
        text: '£31.25',
        format: 'numeric'
      }, {
        text: '£32.05',
        format: 'numeric'
      }], [{
        text: '12-month'
      }, {
        text: '£111.60',
        format: 'numeric'
      }, {
        text: '£114.50',
        format: 'numeric'
      }], [{
        text: 'HRT'
      }, {
        text: '£19.30',
        format: 'numeric'
      }, {
        text: '£19.80',
        format: 'numeric'
      }]]
    }
  },
  'with numeric data, sortable': {
    context: {
      caption: 'Childhood vaccination coverage',
      captionSize: 'm',
      head: [{
        text: 'Nation',
        attributes: {
          'aria-sort': 'ascending'
        }
      }, {
        text: 'MMR',
        format: 'numeric',
        attributes: {
          'aria-sort': 'none'
        }
      }, {
        text: '6-in-1',
        format: 'numeric',
        attributes: {
          'aria-sort': 'none'
        }
      }, {
        text: 'Rotavirus',
        format: 'numeric',
        attributes: {
          'aria-sort': 'none'
        }
      }],
      rows: [[{
        text: 'England'
      }, {
        text: '83.7%',
        format: 'numeric'
      }, {
        text: '92.8%',
        format: 'numeric'
      }, {
        text: '88.8%',
        format: 'numeric'
      }], [{
        text: 'Northern Ireland'
      }, {
        text: '86.4%',
        format: 'numeric'
      }, {
        text: '94.6%',
        format: 'numeric'
      }, {
        text: '88.0%',
        format: 'numeric'
      }], [{
        text: 'Scotland'
      }, {
        text: '89.2%',
        format: 'numeric'
      }, {
        text: '96.9%',
        format: 'numeric'
      }, {
        text: '92.2%',
        format: 'numeric'
      }], [{
        text: 'Wales'
      }, {
        text: '89.5%',
        format: 'numeric'
      }, {
        text: '95.4%',
        format: 'numeric'
      }, {
        text: '92.0%',
        format: 'numeric'
      }]]
    }
  },
  'with names and dates, sortable': {
    context: {
      caption: 'Screening schedule',
      head: [{
        text: 'Name',
        attributes: {
          'aria-sort': 'none'
        }
      }, {
        text: 'NHS number',
        format: 'numeric'
      }, {
        text: 'Next screening',
        attributes: {
          'aria-sort': 'ascending'
        }
      }],
      rows: [[{
        text: 'Laura Stone'
      }, {
        html: '<span class="nhsuk-u-nowrap">999 123 4567</span>',
        format: 'numeric'
      }, {
        text: '4 January 2027',
        attributes: {
          'data-sort-value': '2027-01-04'
        }
      }], [{
        text: 'Michael Thompson'
      }, {
        html: '<span class="nhsuk-u-nowrap">999 856 2341</span>',
        format: 'numeric'
      }, {
        text: '15 March 2027',
        attributes: {
          'data-sort-value': '2027-03-15'
        }
      }], [{
        text: 'Sarah Louise Williams'
      }, {
        html: '<span class="nhsuk-u-nowrap">999 512 7834</span>',
        format: 'numeric'
      }, {
        text: '22 June 2026',
        attributes: {
          'data-sort-value': '2026-06-22'
        }
      }], [{
        text: 'David Chen'
      }, {
        html: '<span class="nhsuk-u-nowrap">999 234 9876</span>',
        format: 'numeric'
      }, {
        text: '8 September 2027',
        attributes: {
          'data-sort-value': '2027-09-08'
        }
      }], [{
        text: 'Emma Katie-Brown'
      }, {
        html: '<span class="nhsuk-u-nowrap">999 678 4512</span>',
        format: 'numeric'
      }, {
        text: '30 November 2026',
        attributes: {
          'data-sort-value': '2026-11-30'
        }
      }], [{
        text: 'Juan Martinez'
      }, {
        html: '<span class="nhsuk-u-nowrap">999 345 1298</span>',
        format: 'numeric'
      }, {
        text: '17 February 2028',
        attributes: {
          'data-sort-value': '2028-02-17'
        }
      }]]
    }
  },
  'with responsive layout': {
    context: {
      caption: 'Ibuprofen syrup dosages for children',
      captionSize: 'm',
      responsive: true,
      head: [{
        text: 'Age',
        classes: 'nhsuk-u-width-one-half'
      }, {
        text: 'How much?',
        classes: 'nhsuk-u-width-one-quarter'
      }, {
        text: 'How often?',
        classes: 'nhsuk-u-width-one-quarter'
      }],
      rows: [[{
        header: 'Age',
        text: '3 to 5 months (weighing more than 5kg)'
      }, {
        header: 'How much?',
        text: '2.5ml'
      }, {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }], [{
        header: 'Age',
        text: '6 to 11 months'
      }, {
        header: 'How much?',
        text: '2.5ml'
      }, {
        header: 'How often?',
        text: 'Max 3 to 4 times in 24 hours'
      }], [{
        header: 'Age',
        text: '1 to 3 years'
      }, {
        header: 'How much?',
        text: '5ml'
      }, {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }], [{
        header: 'Age',
        text: '4 to 6 years'
      }, {
        header: 'How much?',
        text: '7.5ml'
      }, {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }], [{
        header: 'Age',
        text: '7 to 9 years'
      }, {
        header: 'How much?',
        text: '10ml'
      }, {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }], [{
        header: 'Age',
        text: '10 to 11 years'
      }, {
        header: 'How much?',
        text: '15ml'
      }, {
        header: 'How often?',
        text: 'Max 3 times in 24 hours'
      }], [{
        header: 'Age',
        text: '12 to 17 years'
      }, {
        header: 'How much?',
        text: '15ml to 20ml'
      }, {
        header: 'How often?',
        text: 'Max 3 to 4 times in 24 hours'
      }]]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'with responsive layout and custom HTML': {
    context: {
      caption: 'Nunjucks macro options',
      firstCellIsHeader: true,
      responsive: true,
      head: [{
        text: 'Name'
      }, {
        text: 'Type'
      }, {
        text: 'Description'
      }],
      rows: [[{
        header: 'Name',
        text: 'id'
      }, {
        header: 'Type',
        text: 'string'
      }, {
        header: 'Description',
        text: 'The ID of the table.'
      }], [{
        header: 'Name',
        text: 'rows'
      }, {
        header: 'Type',
        text: 'array'
      }, {
        header: 'Description',
        html: outdent(_t || (_t = _`
              <strong>Required.</strong> The rows within the table component.
              <a href="#/macro-options">See macro options for rows</a>.
            `))
      }], [{
        header: 'Name',
        text: 'head'
      }, {
        header: 'Type',
        text: 'array'
      }, {
        header: 'Description',
        html: outdent(_t2 || (_t2 = _`
              Can be used to add a row of table header cells (<code class="app-code">&lt;th&gt;</code>) at the top of the table component.
              <a href="#/macro-options">See macro options for head</a>.
            `))
      }], [{
        header: 'Name',
        text: 'caption'
      }, {
        header: 'Type',
        text: 'string'
      }, {
        header: 'Description',
        text: 'Caption text.'
      }], [{
        header: 'Name',
        text: 'captionClasses'
      }, {
        header: 'Type',
        text: 'string'
      }, {
        header: 'Description',
        text: 'Classes for caption text size. Classes should correspond to the available typography heading classes.'
      }], [{
        header: 'Name',
        text: 'firstCellIsHeader'
      }, {
        header: 'Type',
        text: 'string'
      }, {
        header: 'Description',
        html: outdent(_t3 || (_t3 = _`
              If set to <code class="app-code">true</code>, the first cell in each row will be a table header (<code class="app-code">&lt;th&gt;</code>).
            `))
      }], [{
        header: 'Name',
        text: 'classes'
      }, {
        header: 'Type',
        text: 'string'
      }, {
        header: 'Description',
        text: 'Classes to add to the table container.'
      }], [{
        header: 'Name',
        text: 'attributes'
      }, {
        header: 'Type',
        text: 'object'
      }, {
        header: 'Description',
        text: '	HTML attributes (for example data attributes) to add to the table container.'
      }]]
    }
  },
  'with word breaks': {
    context: {
      caption: 'Users',
      captionSize: 'm',
      head: [{
        text: 'Name'
      }, {
        text: 'Email address'
      }, {
        text: 'Status'
      }, {
        html: outdent(_t4 || (_t4 = _`
            <span class="nhsuk-u-visually-hidden">Actions</span>
          `))
      }],
      rows: [[{
        text: 'Stephanie Meyer',
        classes: 'nhsuk-u-text-break-word'
      }, {
        text: 'stephanie.meyer9@test.com',
        classes: 'nhsuk-u-text-break-word'
      }, {
        html: components.render('tag', {
          context: {
            text: 'Active',
            classes: 'nhsuk-tag--green'
          }
        })
      }], [{
        text: 'Aleksandrina Featherstonehaugh-Whitehead',
        classes: 'nhsuk-u-text-break-word'
      }, {
        text: 'aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com',
        classes: 'nhsuk-u-text-break-word'
      }, {
        html: components.render('tag', {
          context: {
            text: 'Inactive',
            classes: 'nhsuk-tag--grey'
          }
        })
      }]]
    }
  },
  'with first cell as header': {
    context: {
      firstCellIsHeader: true,
      head: [{
        text: 'Day of the week'
      }, {
        text: 'Opening hours'
      }],
      rows: [[{
        text: 'Monday'
      }, {
        text: '9am to 6pm'
      }], [{
        text: 'Tuesday'
      }, {
        text: '9am to 6pm'
      }], [{
        text: 'Wednesday'
      }, {
        text: '9am to 6pm'
      }], [{
        text: 'Thursday'
      }, {
        text: '9am to 6pm'
      }], [{
        text: 'Friday'
      }, {
        text: '9am to 6pm'
      }], [{
        text: 'Saturday'
      }, {
        text: '9am to 1pm'
      }], [{
        text: 'Sunday'
      }, {
        text: 'Closed'
      }]]
    }
  },
  'as a card': {
    context: {
      card: true,
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 'm',
      head: [{
        text: 'Skin symptoms'
      }, {
        text: 'Possible cause'
      }],
      rows: [[{
        text: 'Blisters on lips or around the mouth'
      }, {
        text: 'Cold sores'
      }], [{
        text: 'Itchy, dry, cracked, sore'
      }, {
        text: 'Eczema'
      }], [{
        text: 'Itchy blisters'
      }, {
        text: 'Shingles, chickenpox'
      }]]
    }
  },
  'as a card (feature)': {
    context: {
      card: {
        heading: 'Other conditions like impetigo',
        headingSize: 'm',
        feature: true
      },
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 's',
      head: [{
        text: 'Skin symptoms'
      }, {
        text: 'Possible cause'
      }],
      rows: [[{
        text: 'Blisters on lips or around the mouth'
      }, {
        text: 'Cold sores'
      }], [{
        text: 'Itchy, dry, cracked, sore'
      }, {
        text: 'Eczema'
      }], [{
        text: 'Itchy blisters'
      }, {
        text: 'Shingles, chickenpox'
      }]]
    },
    screenshot: {
      viewports: ['mobile', 'tablet', 'desktop']
    }
  },
  'as a card (feature) with responsive layout': {
    context: {
      card: {
        heading: 'Other conditions like impetigo',
        headingSize: 'm',
        feature: true
      },
      caption: 'Impetigo can look similar to other skin conditions',
      captionSize: 's',
      responsive: true,
      head: [{
        text: 'Skin symptoms'
      }, {
        text: 'Possible cause'
      }],
      rows: [[{
        header: 'Skin problems',
        text: 'Blisters on lips or around the mouth'
      }, {
        header: 'Possible cause',
        text: 'Cold sores'
      }], [{
        header: 'Skin problems',
        text: 'Itchy, dry, cracked, sore'
      }, {
        header: 'Possible cause',
        text: 'Eczema'
      }], [{
        header: 'Skin problems',
        text: 'Itchy blisters'
      }, {
        header: 'Possible cause',
        text: 'Shingles, chickenpox'
      }]]
    }
  }
};

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
const examples = fixtures;

/**
 * @import { MacroExample } from '#lib'
 */

export { examples };
//# sourceMappingURL=fixtures.mjs.map
