# Angular Library Example

This repo consists of two parts:

- demo-library: Demonstrates a way how to write a (probably company internal) Angular library. For a way how to write a public library, please visit: https://github.com/dherges/ng-packagr
- example-consumer: A small demo of how to use the library

It is also important to understand how the demo-library is setup itself.
It's basically a regular Angular application:

```
src/app
  libex (libex is the module name)
  ...
  app.component.ts
  app.module.ts
build.js
```

**Only what's inside of libex will get published to npm.** That makes `app.module.ts` just a **playground** for you to test out your library. It's ideal to develop against, as all the components from your library are imported directly and you can work with hot reload and don't have to publish to npm (or run npm link) each time you want to implement or test a feature.

The only difference between the app.module.ts in `example-consumer/src/app` and `demo-library/src/app` is that `example-consumer` actually gets the published library from npm. This just serves the purpose for everyone reading the tutorial to see how exactly to use the published library. **Notice the modified tsconfig.json of the example-consumer!** If you want to test auto-import in IDE, I suggest opening `exmaple-consumer` as a separate project, otherwise the IDE will import the TypeScript classes from the demo-library.

## How are things published?
All the library-building and -publishing logic is in `demo-library/build.js`. It's a lot less complex than in other library-generators, since it **just publishes TypeScript source files**. However, this requires an extra step on the side of the consumer, which is to add `node_modules/libex/index.ts` as sources to the tsconfig.json. You can run the script with `node build.js` from the demo-library folder.

## More cool things (optional)

To build real world libraries, a bit more than the minimal example can be helpful.


### Theming

Additionally to what's minimally required to build a library, I've added a way to "theme" your library. The implementation is done in an equivalent way to the theming of Angular's Material Design library.

### Lerna

The `example-consumer` and the `demo-library` are in one repository. This is commonly referred to as a "Monorepo". This is quite useful to speed up development, as you can simply run `lerna bootstrap` (once you've installed `lerna`: https://github.com/lerna/lerna), which will symlink everything. Then you'll have the demo library as a **symlink** in the `node_modules` of `example-consumer`. If you now update something in `demo-library`, the project auto-refreshes even when started from `example-consumer`.
