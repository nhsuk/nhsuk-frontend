# JavaScript API Reference

Some of our components can be passed JavaScript configuration objects. You can do it both:

- [when configuring instances of specific components](./README.md#configure-instances-of-specific-components-using-the-createall-function)
- [when configuring all components using the `initAll` function](./README.md#configure-all-components-using-the-initall-function)

This page lists the options available for the following components:

- [Button](#button)
- [CharacterCount](#charactercount)
- [ErrorSummary](#errorsummary)
- [NotificationBanner](#notificationbanner)
- [PasswordInput](#passwordinput)

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

## PasswordInput

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
