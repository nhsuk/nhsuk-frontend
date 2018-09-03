# Footer

## Introduction

Website footer with copyright information and useful links.

## Guidance

Find out when to use the footer component in the [Digital service manual]().

## Example

[Preview the footer component]()

#### Markup

    <footer role="contentinfo">
      <div class="nhsuk-global-footer">
        <div class="nhsuk-o-width-container">
          <ul>
            <li class="nhsuk-global-footer__logo">
              <a href="/" class="global-footer__link">
                <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
                  <g fill-rule="nonzero" fill="none">
                    <path fill="#FFF" d="M0 39.842h98.203V0H0z"></path>
                    <path fill="#0058AD" d="M9.548 3.817H20.16l6.52 22.08h.09l4.465-22.08h8.021l-6.74 31.84H21.939l-6.65-22.032h-.09l-4.424 22.031H2.754l6.794-31.84M42.4 3.817h8.518l-2.502 12.18h10.069l2.508-12.18h8.519l-6.61 31.84h-8.518l2.826-13.638H47.135L44.31 35.656h-8.518L42.4 3.816M91.93 11.025c-1.64-.773-3.873-1.457-7.016-1.457-3.37 0-6.106.498-6.106 3.056 0 4.512 12.35 2.828 12.35 12.499 0 8.802-8.16 11.085-15.54 11.085-3.281 0-7.065-.78-9.842-1.648l2.006-6.477c1.682 1.096 5.058 1.827 7.835 1.827 2.646 0 6.789-.503 6.789-3.786 0-5.111-12.35-3.194-12.35-12.176 0-8.214 7.202-10.676 14.176-10.676 3.92 0 7.608.413 9.75 1.413l-2.052 6.34"></path>
                  </g>
                  <image class="nhsuk-logo nhsuk-logo__fallback" src="core/assets/images/fallback/nhs-logo.png" xlink:href=""></image>
                </svg>
                <span class="visually-hidden">NHS homepage</span>
              </a>
            </li>
            <li><a href="https://www.nhs.uk/Pages/nhs-sites.aspx">NHS sites</a></li>
            <li><a href="https://www.nhs.uk/about-us">About us</a></li>
            <li><a href="https://www.nhs.uk/Pages/contact-us.aspx">Contact us</a></li>
            <li><a href="https://www.nhs.uk/Personalisation/Login.aspx">Profile editor login</a></li>
          </ul>
          <ul>
            <li><a href="https://www.nhs.uk/choices/pages/sitemap.aspx">Sitemap</a></li>
            <li><a href="https://www.nhs.uk/accessibility/">Accessibility</a></li>
            <li><a href="https://www.nhs.uk/our-policies/">Our policies</a></li>
            <li>&copy; Crown Copyright</li>
          </ul>
        </div>
      </div>
    </footer>

#### Macro

    {% from 'components/footer/macro.njk' import footer %}

    {% set primaryLinks = [
        {
          'url'  : 'https://www.nhs.uk/Pages/nhs-sites.aspx',
          'label' : 'NHS sites'
        },
        {
          'url' : 'https://www.nhs.uk/about-us',
          'label' : 'About us'        
        },
        {
          'url'  : 'https://www.nhs.uk/Pages/contact-us.aspx',
          'label' : 'Contact us'    
        },
        {
          'url'  : 'https://www.nhs.uk/Personalisation/Login.aspx',
          'label' : 'Profile editor login'    
        }
      ]
    %}

    {% set secondaryLinks = [
        {
          'url'  : 'https://www.nhs.uk/choices/pages/sitemap.aspx',
          'label' : 'Sitemap'
        },
        {
          'url' : 'https://www.nhs.uk/accessibility/',
          'label' : 'Accessibility'
        },
        {
          'url'  : 'https://www.nhs.uk/our-policies/',
          'label' : 'Our policies'
        }
      ]
    %}

    {{ footer(primaryLinks, secondaryLinks) }}
