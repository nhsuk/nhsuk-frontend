# JavaScript API Reference

Some of our components can be passed JavaScript configuration objects. You can do it both:

- [when configuring instances of specific components](./README.md#configure-instances-of-specific-components-using-the-createall-function)
- [when configuring all components using the `initAll` function](./README.md#configure-all-components-using-the-initall-function)

This page lists the options available for the following components:

- [Button](#button)
- [CharacterCount](#charactercount)
- [Checkboxes](#checkboxes)
- [ErrorSummary](#errorsummary)
- [Header](#header)
- [NotificationBanner](#notificationbanner)
- [PasswordInput](#passwordinput)
- [Radios](#radios)
- [SkipLink](#skiplink)
- [Tabs](#tabs)

## Button

### preventDoubleClick

Type: boolean

Prevent accidental double clicks on submit buttons from submitting forms multiple times.

Default:

```json5
false
```

## CharacterCount

### maxlength

Type: number

The maximum number of characters. If `maxwords` is provided, the `maxlength` option will be ignored.

### maxwords

Type: number

The maximum number of words. If `maxwords` is provided, the `maxlength` option will be ignored.

### threshold

Type: number

The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.

Default:

```json5
0
```

### textareaDescriptionClass

Type: string

Class name used to locate the message made available to assistive technologies, to describe that the component accepts only a limited amount of content

Default:

```json5
  'nhsuk-character-count__message'
```

### visibleCountMessageClass

Type: string

Class name added to the visible count message.

Default:

```json5
  'nhsuk-character-count__status'
```

### screenReaderCountMessageClass

Type: string

Class name added to the visually hidden screen reader count message.

Default:

```json5
  'nhsuk-character-count__sr-status'
```

### i18n

Type: object

Messages shown to users as they type. It provides feedback on how many words or
characters they have remaining or if they are over the limit. This also includes
a message used as an accessible description for the textarea.

Default: see properties

#### Properties

##### charactersUnderLimit

Type: object

Message displayed when the number of characters is under the configured maximum,
`maxlength`. This message is displayed visually and through assistive
technologies. The component will replace the `%{count}` placeholder with the
number of remaining characters. This is a [pluralised list of
messages](./localisation.md).

Default:

```json5
{
  one: 'You have %{count} character remaining',
  other: 'You have %{count} characters remaining'
}
```

##### charactersAtLimit

Type: string

Message displayed when the number of characters reaches the configured maximum,
`maxlength`. This message is displayed visually and through assistive
technologies.

Default:

```json5
'You have 0 characters remaining'
```

##### charactersOverLimit

Type: object

Message displayed when the number of characters is over the configured maximum,
`maxlength`. This message is displayed visually and through assistive
technologies. The component will replace the `%{count}` placeholder with the
number of remaining characters. This is a [pluralised list of
messages](./localisation.md).

Default:

```json5
{
  one: 'You have %{count} character too many',
  other: 'You have %{count} characters too many'
}
```

##### wordsUnderLimit

Type: object

Message displayed when the number of words is under the configured maximum,
`maxwords`. This message is displayed visually and through assistive
technologies. The component will replace the `%{count}` placeholder with the
number of remaining words. This is a [pluralised list of
messages](./localisation.md).

Default:

```json5
{
  one: 'You have %{count} word remaining',
  other: 'You have %{count} words remaining'
}
```

##### wordsAtLimit

Type: string

Message displayed when the number of words reaches the configured maximum,
`maxwords`. This message is displayed visually and through assistive
technologies.

Default:

```json5
'You have 0 words remaining'
```

##### wordsOverLimit

Type: object

Message displayed when the number of words is over the configured maximum,
`maxwords`. This message is displayed visually and through assistive
technologies. The component will replace the `%{count}` placeholder with the
number of remaining words. This is a [pluralised list of
messages](./localisation.md).

Default:

```json5
{
  one: 'You have %{count} word too many',
  other: 'You have %{count} words too many'
}
```

##### textareaDescription

Type: object

Message made available to assistive technologies, if none is already present in the HTML, to describe that the component accepts only a limited amount of content. The component will replace the `%{count}` placeholder with the value of the `maxlength` or `maxwords` option.

Default:

```json5
{
  other: ''
}
```

## Checkboxes

### conditionalClass

Type: string

Class name used to locate conditionally revealed content for checkboxes.

Default:

```json5
  'nhsuk-checkboxes__conditional'
```

## ErrorSummary

### disableAutoFocus

If set to `true` the error summary will not be focussed when the page loads.

Type: boolean

Default

```json5
false
```

## NotificationBanner

### disableAutoFocus

Type: boolean

If set to `true` the notification banner will not be focussed when the page loads. This only applies if the component has a `role` of `alert` – in other cases the component will not be focused on page load, regardless of this option.

Default:

```json5
false
```

## Header

### navigationClass

Type: string

Class name used to locate the header navigation.

Default:

```json5
  'nhsuk-header__navigation'
```

### navigationListClass

Type: string

Class name used to locate the header navigation list.

Default:

```json5
  'nhsuk-header__navigation-list'
```

### navigationItemClass

Type: string

Class name used to locate the header navigation list items.

Default:

```json5
  'nhsuk-header__navigation-item'
```

### menuClass

Type: string

Class name used to locate the header menu item.

Default:

```json5
  'nhsuk-header__menu'
```

### menuToggleClass

Type: string

Class name used to locate the header menu toggle button.

Default:

```json5
  'nhsuk-header__menu-toggle'
```

### menuListClass

Type: string

Class name used to locate the header menu list.

Default:

```json5
  'nhsuk-header__menu-list'
```

## PasswordInput

### screenReaderStatusMessageClass

Type: string

Class name added to the visually hidden screen reader status message.

Default:

```json5
  'nhsuk-password-input__sr-status'
```

### i18n

#### Properties

##### hidePassword

Type: string

Visible text of the button when the password is currently visible.

Default:

```json5
  'Hide'
```

##### hidePasswordAriaLabel

Type: string

aria-label of the button when the password is currently visible.

Default:

```json5
  'Hide password'
```

##### passwordHiddenAnnouncement

Type: string

Screen reader announcement to make when the password has just been hidden.

Default:

```json5
  'Your password is hidden'
```

##### passwordShownAnnouncement

Type: string

Screen reader announcement to make when the password has just become visible.

Default:

```json5
  'Your password is visible'
```

##### showPassword

Type: string

Visible text of the button when the password is currently hidden.

Default:

```json5
  'Show'
```

##### showPasswordAriaLabel

Type: string

aria-label of the button when the password is currently hidden.

Default:

```json5
  'Show password'
```

## Radios

### conditionalClass

Type: string

Class name used to locate conditionally revealed content for radio buttons.

Default:

```json5
  'nhsuk-radios__conditional'
```

## SkipLink

### focusedElementClassList

Type: array

Class names added to the linked element focused by the skip link. Used to remove the visible focus indicator because the user cannot interact with it.

Default:

```json5
  ['nhsuk-skip-link-focused-element']
```

## Tabs

### panelClass

Type: string

Class name used to locate the tab panels.

Default:

```json5
  'nhsuk-tabs__panel'
```

### listClass

Type: string

Class name used to locate the tab link list.

Default:

```json5
  'nhsuk-tabs__list'
```

### listItemClass

Type: string

Class name used to locate the tab link list items.

Default:

```json5
  'nhsuk-tabs__list-item'
```

### tabClass

Type: string

Class name used to locate the tab links.

Default:

```json5
  'nhsuk-tabs__tab'
```
