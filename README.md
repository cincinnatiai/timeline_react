# timeline_react

This library contains the horizontal timeline component

## Installation

To install run the next command

```
npm install @cincinnatiai/timeline_react@1.0.2
```

> [!WARNING]  
> If there any Error when you try to use this library follow the steps that are in Set it up

To use it you must do it in this way

```
import { HorizontalTimeline, TimelineItem } from "@cincinnatiai/timeline_react";
import "@cincinnatiai/timeline_react/dist/esm/index.css";
```

### Build

Builds the app for publish to the `dist` folder.\

```
npm run build -- --bundleConfigAsCjs
```

### Publish

Publish a new version

```
npm publish
```

### Set it up

We have to configure our NPM itself to be authorized to publish/use this library, the configuration is into the `.npmrc` file.

In Mac/Linux it goes

```
~/.npmrc
```

Once it's located we have to include the next lines:

```
registry=https://registry.npmjs.org/
@cincinnatiai:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

Where `YOUR_AUTH_TOKEN` is going to be the token generated in Github:
Settings -> Developer Setting -> Personal access tokens -> Tokens (classic)

- Click Generate new token.
- Give it the name `horizontal-timeline`
- Give it an expiry date.
- Click the write:packages access value.

Once you are done you can click to create token. Github will ONLY SHOW YOU THE TOKEN ONCE, copy it and paste it in `.npmrc` as `YOUR_AUTH_TOKEN`.
