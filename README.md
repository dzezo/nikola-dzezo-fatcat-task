## Complete the following tasks

### Transfer the project to TypeScript

The process of transitioning the project from JavaScript to TypeScript involved the following steps:

1. **Installation of Necessary Packages**: Installed the following packages:

    - `typescript` for adding TypeScript support.
    - `eslint-import-resolver-typescript` to resolve import errors with ESLint in TypeScript files.
    - `@types/node` to provide TypeScript types for the Node.js `process` object.

2. **Script Updates**: Added a `fix:lint` script in `package.json` to automatically fix ESLint errors. Also updated the build script to include TypeScript compilation.

3. **TypeScript Configuration**: Created `tsconfig.json` and `tsconfig.node.json` files. In `tsconfig.json`, declared all required options and added a path alias `@homework-task` for the `src` directory.

4. **Vite Configuration**: Changed the `vite.config` file type to `.ts` and specified an alias resolver so that Vite can understand how to handle imports using the `@homework-task` alias.

5. **ESLint Configuration**: Updated `.eslintrc.cjs` to ignore `vite.config.ts` and to utilize the TypeScript import resolver.

6. **Type Declaration**: Added a `vite-env` type declaration file in the `src` directory and declared the `__CWD__` global constant, which was defined in `vite.config`.

7. **HTML Update**: Updated `index.html` to load the `main.tsx` script instead of the previous JavaScript file.

8. **File Type Conversion**: Converted all relevant files to `.tsx`, fixed imports to use the new `@homework-task` alias, and declared prop types for TypeScript.

### Create a List Component

### Create a Form Generator Component

### Create a Page Generator Component

### Additional Requirements
