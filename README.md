# react-mallog

React login form in bootstrap

```shell
$ npm install bootstrap@5.2.0-beta1 @schoi-godaddy/react-mallog

...
```

```typescript
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "@schoi-godaddy/react-mallog";

function App {
  return (
    <Form
      logoImageUrl="image url or path"
      onCheckBoxChange={...}
      onEmailChange={...}
      onFormSubmit={...}
      onPasswordChange={...}
      onSignInClick={...}
    />
  );
};
```

![latest login page image](./img/v1.2.x.png)

## DISCLAIMER ⚠️

PLEASE DO NOT USE THIS - This package is for demo purpose.

## Deploy

```shell
$ npm run rollup
...

$ npm publish
...
```

## Citations

- https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
- https://getbootstrap.com/
