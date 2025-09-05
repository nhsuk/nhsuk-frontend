# JavaScript API Reference

Some of our components can be passed JavaScript configuration objects. You can do it both:

- [when configuring instances of specific components](./README.md#configure-instances-of-specific-components-using-the-createall-function)
- [when configuring all components using the `initAll` function](./README.md#configure-all-components-using-the-initall-function)

This page lists the options available for the following components:

- [Button](#button)
- [CharacterCount](#charactercount)
- [ErrorSummary](#errorsummary)
- [NotificationBanner](#notificationbanner)

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
