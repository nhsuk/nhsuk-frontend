import {
  Button,
  CharacterCount,
  Checkboxes,
  Code,
  Component,
  type Config,
  type ConfigKey,
  ConfigurableComponent,
  ErrorSummary,
  FileUpload,
  Header,
  I18n,
  NotificationBanner,
  type OnErrorCallback,
  PasswordInput,
  Radios,
  Scroll,
  SkipLink,
  Table,
  Tabs,
  createAll,
  initAll,
  isSupported
} from 'nhsuk-frontend'

const $root = document.createElement('div')

const i18n = new I18n({ age: 'I am %{age} years old' }, { locale: 'en' })

i18n.t('age', { age: 2000 })

new Button($root)
new Button($root, Button.defaults)

new CharacterCount($root)
new CharacterCount($root, CharacterCount.defaults)

new Checkboxes($root)
new Checkboxes($root, Checkboxes.defaults)

new Code($root)
new Code($root, Code.defaults)

new ErrorSummary($root)
new ErrorSummary($root, ErrorSummary.defaults)

new FileUpload($root)
new FileUpload($root, FileUpload.defaults)

new Header($root)
new Header($root, Header.defaults)

new NotificationBanner($root)
new NotificationBanner($root, NotificationBanner.defaults)

new Radios($root)
new Radios($root, Radios.defaults)

new Scroll($root)
new Scroll($root, Scroll.defaults)

new SkipLink($root)
new SkipLink($root, SkipLink.defaults)

new Tabs($root)
new Tabs($root, Tabs.defaults)

class MyComponent1 extends Component {
  static moduleName = 'MyComponent1'
}

class MyComponent2 extends Component<HTMLVideoElement> {
  constructor($root: Element | null) {
    super($root)

    this.$root instanceof HTMLVideoElement
  }

  static moduleName = 'MyComponent2'
}

class MyComponent3 extends ConfigurableComponent<
  MyComponentConfig,
  HTMLVideoElement
> {
  constructor($root: Element | null, config?: MyComponentConfig) {
    super($root, config)

    this.$root instanceof HTMLVideoElement
    typeof this.config.anOption === 'string'
    typeof this.config.aNumberOption === 'number'
    typeof this.config.aBooleanOption === 'boolean'
    typeof this.config.anOptionWithNesting === 'object'
  }

  static moduleName = 'MyComponent3'

  static defaults: MyComponentConfig = {
    anOption: 'itsValue',
    aNumberOption: 1,
    aBooleanOption: false,
    anOptionWithNesting: {
      aNestedOption: 'itsValue',
      anotherLevel: {
        aDeeplyNestedOption: true
      }
    }
  }
}

interface MyComponentConfig {
  anOption?: string
  aNumberOption?: number
  aBooleanOption?: boolean
  anOptionWithNesting?: {
    aNestedOption?: string
    anotherLevel?: {
      aDeeplyNestedOption: boolean
    }
  }
}

new MyComponent1($root)
// @ts-expect-error - Component is not configurable
new MyComponent1($root, {})

new MyComponent2($root)
// @ts-expect-error - Component is not configurable
new MyComponent2($root, {})

new MyComponent3($root)
new MyComponent3($root, MyComponent3.defaults)
new MyComponent3($root, {
  anOption: 'overridden',
  aNumberOption: 12345
})

Code.checkSupport()
Code.checkSupport($root)
// @ts-expect-error - Component config is invalid
Code.checkSupport($root, { invalid: 'option' })
Code.checkSupport($root, Code.defaults)

MyComponent1.checkSupport()
MyComponent1.checkSupport($root)
// @ts-expect-error - Component is not configurable
MyComponent1.checkSupport($root, {})

MyComponent2.checkSupport()
MyComponent2.checkSupport($root)
// @ts-expect-error - Component is not configurable
MyComponent2.checkSupport($root, {})

MyComponent3.checkSupport()
MyComponent3.checkSupport($root)
// @ts-expect-error - Component config is invalid
MyComponent3.checkSupport($root, { invalid: 'option' })
MyComponent3.checkSupport($root, MyComponent3.defaults)

isSupported()
isSupported($root)
isSupported(null)

const onError: OnErrorCallback = (error, context) => {
  error instanceof Error
  context.element
  context.component?.moduleName
  context.config
}

const onErrorButton: OnErrorCallback<typeof Button> = (error, context) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === Button
  context.config?.preventDoubleClick
}

createAll(Button)
createAll(Button, Button.defaults)
createAll(Button, Button.defaults, null)
createAll(Button, Button.defaults, undefined)
createAll(Button, Button.defaults, document)
createAll(Button, Button.defaults, $root)
createAll(Button, Button.defaults, console.error)
createAll(Button, Button.defaults, onError)
createAll(Button, Button.defaults, onErrorButton)
createAll(Button, Button.defaults, {
  scope: $root,
  onError: onErrorButton
})

const onErrorCharacterCount: OnErrorCallback<typeof CharacterCount> = (
  error,
  context
) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === CharacterCount
  context.config?.i18n
  context.config?.maxlength
  context.config?.threshold
  context.config?.countFunction
  context.config?.countType
  context.config?.screenReaderCountMessageClass
  context.config?.textareaDescriptionClass
  context.config?.visibleCountMessageClass
}

createAll(CharacterCount)
createAll(CharacterCount, CharacterCount.defaults)
createAll(CharacterCount, CharacterCount.defaults, null)
createAll(CharacterCount, CharacterCount.defaults, undefined)
createAll(CharacterCount, CharacterCount.defaults, document)
createAll(CharacterCount, CharacterCount.defaults, $root)
createAll(CharacterCount, CharacterCount.defaults, console.error)
createAll(CharacterCount, CharacterCount.defaults, onError)
createAll(CharacterCount, CharacterCount.defaults, onErrorCharacterCount)
createAll(CharacterCount, CharacterCount.defaults, {
  scope: $root,
  onError: onErrorCharacterCount
})

const onErrorCheckboxes: OnErrorCallback<typeof Checkboxes> = (
  error,
  context
) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === Checkboxes
  context.config?.conditionalClass
}

createAll(Checkboxes)
createAll(Checkboxes, Checkboxes.defaults)
createAll(Checkboxes, Checkboxes.defaults, null)
createAll(Checkboxes, Checkboxes.defaults, undefined)
createAll(Checkboxes, Checkboxes.defaults, document)
createAll(Checkboxes, Checkboxes.defaults, $root)
createAll(Checkboxes, Checkboxes.defaults, console.error)
createAll(Checkboxes, Checkboxes.defaults, onError)
createAll(Checkboxes, Checkboxes.defaults, onErrorCheckboxes)
createAll(Checkboxes, Checkboxes.defaults, {
  scope: $root,
  onError: onErrorCheckboxes
})

const onErrorCode: OnErrorCallback<typeof Code> = (error, context) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === Code
  context.config?.i18n
  context.config?.containerClass
  context.config?.contentClass
  context.config?.screenReaderStatusMessageClass
}

createAll(Code)
createAll(Code, Code.defaults)
createAll(Code, Code.defaults, null)
createAll(Code, Code.defaults, undefined)
createAll(Code, Code.defaults, document)
createAll(Code, Code.defaults, $root)
createAll(Code, Code.defaults, console.error)
createAll(Code, Code.defaults, onError)
createAll(Code, Code.defaults, onErrorCode)
createAll(Code, Code.defaults, {
  scope: $root,
  onError: onErrorCode
})

const onErrorErrorSummary: OnErrorCallback<typeof ErrorSummary> = (
  error,
  context
) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === ErrorSummary
  context.config
  context.config?.disableAutoFocus
}

createAll(ErrorSummary)
createAll(ErrorSummary, ErrorSummary.defaults)
createAll(ErrorSummary, ErrorSummary.defaults, null)
createAll(ErrorSummary, ErrorSummary.defaults, undefined)
createAll(ErrorSummary, ErrorSummary.defaults, document)
createAll(ErrorSummary, ErrorSummary.defaults, $root)
createAll(ErrorSummary, ErrorSummary.defaults, console.error)
createAll(ErrorSummary, ErrorSummary.defaults, onError)
createAll(ErrorSummary, ErrorSummary.defaults, onErrorErrorSummary)
createAll(ErrorSummary, undefined, {
  scope: $root,
  onError: onErrorErrorSummary
})

const onErrorFileUpload: OnErrorCallback<typeof FileUpload> = (
  error,
  context
) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === FileUpload
  context.config
  context.config?.i18n
  context.config?.announcementsClass
  context.config?.chooseFilesButtonClass
  context.config?.chooseFilesButtonClassList
  context.config?.dropButtonClass
  context.config?.dropButtonGroupClass
  context.config?.dropInstructionClass
  context.config?.dropZoneClass
  context.config?.statusClass
}

createAll(FileUpload)
createAll(FileUpload, FileUpload.defaults)
createAll(FileUpload, FileUpload.defaults, null)
createAll(FileUpload, FileUpload.defaults, undefined)
createAll(FileUpload, FileUpload.defaults, document)
createAll(FileUpload, FileUpload.defaults, $root)
createAll(FileUpload, FileUpload.defaults, console.error)
createAll(FileUpload, FileUpload.defaults, onError)
createAll(FileUpload, FileUpload.defaults, onErrorFileUpload)
createAll(FileUpload, undefined, {
  scope: $root,
  onError: onErrorFileUpload
})

const onErrorHeader: OnErrorCallback<typeof Header> = (error, context) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === Header
  context.config?.menuClass
  context.config?.menuListClass
  context.config?.menuToggleClass
  context.config?.navigationClass
  context.config?.navigationItemClass
  context.config?.navigationListClass
}

createAll(Header)
createAll(Header, Header.defaults)
createAll(Header, Header.defaults, null)
createAll(Header, Header.defaults, undefined)
createAll(Header, Header.defaults, document)
createAll(Header, Header.defaults, $root)
createAll(Header, Header.defaults, console.error)
createAll(Header, Header.defaults, onError)
createAll(Header, Header.defaults, onErrorHeader)
createAll(Header, undefined, {
  scope: $root,
  onError: onErrorHeader
})

const onErrorNotificationBanner: OnErrorCallback<typeof NotificationBanner> = (
  error,
  context
) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === NotificationBanner
  context.config
  context.config?.disableAutoFocus
}

createAll(NotificationBanner)
createAll(NotificationBanner, NotificationBanner.defaults)
createAll(NotificationBanner, NotificationBanner.defaults, null)
createAll(NotificationBanner, NotificationBanner.defaults, undefined)
createAll(NotificationBanner, NotificationBanner.defaults, document)
createAll(NotificationBanner, NotificationBanner.defaults, $root)
createAll(NotificationBanner, NotificationBanner.defaults, console.error)
createAll(NotificationBanner, NotificationBanner.defaults, onError)
createAll(
  NotificationBanner,
  NotificationBanner.defaults,
  onErrorNotificationBanner
)
createAll(NotificationBanner, undefined, {
  scope: $root,
  onError: onErrorNotificationBanner
})

const onErrorPasswordInput: OnErrorCallback<typeof PasswordInput> = (
  error,
  context
) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === PasswordInput
  context.config
  context.config?.i18n
  context.config?.screenReaderStatusMessageClass
}

createAll(PasswordInput)
createAll(PasswordInput, PasswordInput.defaults)
createAll(PasswordInput, PasswordInput.defaults, null)
createAll(PasswordInput, PasswordInput.defaults, undefined)
createAll(PasswordInput, PasswordInput.defaults, document)
createAll(PasswordInput, PasswordInput.defaults, $root)
createAll(PasswordInput, PasswordInput.defaults, console.error)
createAll(PasswordInput, PasswordInput.defaults, onError)
createAll(PasswordInput, PasswordInput.defaults, onErrorPasswordInput)
createAll(PasswordInput, undefined, {
  scope: $root,
  onError: onErrorPasswordInput
})

const onErrorRadios: OnErrorCallback<typeof Radios> = (error, context) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === Radios
  context.config?.conditionalClass
}

createAll(Radios)
createAll(Radios, Radios.defaults)
createAll(Radios, Radios.defaults, null)
createAll(Radios, Radios.defaults, undefined)
createAll(Radios, Radios.defaults, document)
createAll(Radios, Radios.defaults, $root)
createAll(Radios, Radios.defaults, console.error)
createAll(Radios, Radios.defaults, onError)
createAll(Radios, Radios.defaults, onErrorRadios)
createAll(Radios, Radios.defaults, {
  scope: $root,
  onError: onErrorRadios
})

const onErrorSkipLink: OnErrorCallback<typeof SkipLink> = (error, context) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === SkipLink
  context.config?.focusedElementClassList
}

createAll(SkipLink)
createAll(SkipLink, SkipLink.defaults)
createAll(SkipLink, SkipLink.defaults, null)
createAll(SkipLink, SkipLink.defaults, undefined)
createAll(SkipLink, SkipLink.defaults, document)
createAll(SkipLink, SkipLink.defaults, $root)
createAll(SkipLink, SkipLink.defaults, console.error)
createAll(SkipLink, SkipLink.defaults, onError)
createAll(SkipLink, SkipLink.defaults, onErrorSkipLink)
createAll(SkipLink, SkipLink.defaults, {
  scope: $root,
  onError: onErrorSkipLink
})

const onErrorTabs: OnErrorCallback<typeof Tabs> = (error, context) => {
  error instanceof Error
  context.element
  context.component?.defaults
  context.component?.moduleName
  context.component === Tabs
  context.config?.listClass
  context.config?.listItemClass
  context.config?.panelClass
  context.config?.tabClass
}

createAll(Tabs)
createAll(Tabs, Tabs.defaults)
createAll(Tabs, Tabs.defaults, null)
createAll(Tabs, Tabs.defaults, undefined)
createAll(Tabs, Tabs.defaults, document)
createAll(Tabs, Tabs.defaults, $root)
createAll(Tabs, Tabs.defaults, console.error)
createAll(Tabs, Tabs.defaults, onError)
createAll(Tabs, Tabs.defaults, onErrorTabs)
createAll(Tabs, Tabs.defaults, {
  scope: $root,
  onError: onErrorTabs
})

createAll(MyComponent1)
// @ts-expect-error - Component is not configurable
createAll(MyComponent1, {})
createAll(MyComponent1, undefined)
createAll(MyComponent1, undefined, null)
createAll(MyComponent1, undefined, document)
createAll(MyComponent1, undefined, $root)
createAll(MyComponent1, undefined, console.error)
createAll(MyComponent1, undefined, {
  scope: $root,
  onError(error, context) {
    error instanceof Error
    context.element
    context.component?.moduleName
    context.component === MyComponent1
  }
})

createAll(MyComponent2)
// @ts-expect-error - Component is not configurable
createAll(MyComponent2, {})
createAll(MyComponent2, undefined)
createAll(MyComponent2, undefined, null)
createAll(MyComponent2, undefined, document)
createAll(MyComponent2, undefined, $root)
createAll(MyComponent2, undefined, console.error)
createAll(MyComponent2, undefined, {
  scope: $root,
  onError(error, context) {
    error instanceof Error
    context.element
    context.component?.moduleName
    context.component === MyComponent2
  }
})

createAll(MyComponent3)
// @ts-expect-error - Component config is invalid
createAll(MyComponent3, { invalid: 'option' })
createAll(MyComponent3, { anOption: 'overridden' })
createAll(MyComponent3, { anOption: 'overridden' }, null)
createAll(MyComponent3, { anOption: 'overridden' }, undefined)
createAll(MyComponent3, { anOption: 'overridden' }, document)
createAll(MyComponent3, { anOption: 'overridden' }, $root)
createAll(MyComponent3, { anOption: 'overridden' }, console.error)
createAll(
  MyComponent3,
  { anOption: 'overridden' },
  {
    scope: $root,
    onError(error, context) {
      error instanceof Error
      context.element
      context.component?.defaults
      context.component?.moduleName
      context.component === MyComponent3
      context.config
      context.config?.anOption
      context.config?.aNumberOption
      context.config?.aBooleanOption
      context.config?.anOptionWithNesting
      context.config?.anOptionWithNesting?.aNestedOption
      context.config?.anOptionWithNesting?.anotherLevel
    }
  }
)

createAll(MyComponent3)
createAll(MyComponent3, MyComponent3.defaults)
createAll(MyComponent3, MyComponent3.defaults, null)
createAll(MyComponent3, MyComponent3.defaults, undefined)
createAll(MyComponent3, MyComponent3.defaults, document)
createAll(MyComponent3, MyComponent3.defaults, $root)
createAll(MyComponent3, MyComponent3.defaults, console.error)
createAll(MyComponent3, MyComponent3.defaults, {
  scope: $root,
  onError(error, context) {
    error instanceof Error
    context.element
    context.component?.defaults
    context.component?.moduleName
    context.component === MyComponent3
    context.config
    context.config?.anOption
    context.config?.aNumberOption
    context.config?.aBooleanOption
    context.config?.anOptionWithNesting
    context.config?.anOptionWithNesting?.aNestedOption
    context.config?.anOptionWithNesting?.anotherLevel
  }
})

const config = {
  button: Button.defaults,
  characterCount: CharacterCount.defaults,
  checkboxes: Checkboxes.defaults,
  code: Code.defaults,
  errorSummary: ErrorSummary.defaults,
  fileUpload: FileUpload.defaults,
  header: Header.defaults,
  notificationBanner: NotificationBanner.defaults,
  passwordInput: PasswordInput.defaults,
  radios: Radios.defaults,
  scroll: Scroll.defaults,
  skipLink: SkipLink.defaults,
  table: Table.defaults,
  tabs: Tabs.defaults,
  onError
} satisfies Config

const buttonConfig: Config[ConfigKey] = config.button
const characterCountConfig: Config[ConfigKey] = config.characterCount
const checkboxesConfig: Config[ConfigKey] = config.checkboxes
const codeConfig: Config[ConfigKey] = config.code
const errorSummaryConfig: Config[ConfigKey] = config.errorSummary
const fileUploadConfig: Config[ConfigKey] = config.fileUpload
const headerConfig: Config[ConfigKey] = config.header
const notificationBannerConfig: Config[ConfigKey] = config.notificationBanner
const passwordInputConfig: Config[ConfigKey] = config.passwordInput
const radiosConfig: Config[ConfigKey] = config.radios
const scrollConfig: Config[ConfigKey] = config.scroll
const skipLinkConfig: Config[ConfigKey] = config.skipLink
const tableConfig: Config[ConfigKey] = config.table
const tabsConfig: Config[ConfigKey] = config.tabs

initAll()
initAll(null)
initAll(undefined)
initAll(document)
initAll($root)

initAll({
  scope: $root,
  onError(error, context) {
    error instanceof Error
    context.element
    context.component?.moduleName
    context.config
  }
})

initAll({
  button: buttonConfig,
  characterCount: characterCountConfig,
  checkboxes: checkboxesConfig,
  code: codeConfig,
  errorSummary: errorSummaryConfig,
  fileUpload: fileUploadConfig,
  header: headerConfig,
  notificationBanner: notificationBannerConfig,
  passwordInput: passwordInputConfig,
  radios: radiosConfig,
  scroll: scrollConfig,
  skipLink: skipLinkConfig,
  table: tableConfig,
  tabs: tabsConfig,
  onError(error, context) {
    error instanceof Error
    context.element
    context.component?.moduleName
    context.config
  }
})

initAll(config)

// @ts-expect-error - Config is invalid
initAll({ invalid: 'option' })
