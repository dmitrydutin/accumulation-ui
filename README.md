# Accumulation-UI (Alpha)

Super fast and modern framework for web application development

## Features

- The core is built on css variables.
- Support for many themes.
- Designed for Angular 12.

## Install

```sh
npm install accumulation-ui
```

## Import

```typescript
// app.module.ts
import { AccumulationUICoreModule } from 'accumulation-ui';
...
imports: [
  AccumulationUICoreModule,
]
```

```scss
// styles.scss
@import '~accumulation-ui/src/lib/sass/baseline.scss';
@import '~accumulation-ui/src/lib/sass/theme.scss';
```

## Usage

```html
// *.component.html
<acc-button class="button">Test</acc-button>
<acc-button class="button" icon="github">Test</acc-button>
<acc-button class="button" [disabled]="true">Test</acc-button>
<acc-divider></acc-divider>
```
