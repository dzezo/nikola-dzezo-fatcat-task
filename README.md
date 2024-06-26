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

Created a `<List />` component that serves as the foundational component for all list-based displays within our application. This component accepts three props: `data`, `status`, and `render`.

-   `data`: This prop represents the array of data that the list will render.
-   `status`: This prop indicates the current status of the data fetching operation. It can be 'pending', 'error', or 'success'.
-   `render`: This is a function prop (often referred to as a "render prop") that allows users to define the appearance of individual list items.

By designing the `List` component in this way, we've ensured that it remains agnostic to the specific technology stack used for data fetching. The responsibility for data retrieval is delegated to a parent component, promoting separation of concerns. The `render` prop provides flexibility, allowing users to customize the rendering of list items as needed.

### Create a Form Generator Component

1. **InputField and TextField Components**: These components are wrappers around the HTML `input` and `textarea` elements, respectively. They include an error label to display validation errors and a properly forwarded ref, which is necessary for the `react-hook-form` library to function correctly. The `ref` is used by `react-hook-form` to register the input and textarea fields, enabling it to track their values and validation status.
2. **CreateForm Component**: This is a reusable, generic component where the generic type represents the form state. The component is responsible for managing form state, handling form validation, and executing a mutation function on form submission.
3. **PostForm Component**: The `PostForm` component is a specific implementation of `CreateForm`. It is responsible for preparing and providing custom properties.

### Create a Page Generator Component

-   The Page Generator consists of two primary logical units: Layout and Component. These units are implemented in the `PageComponent.tsx` and `PageLayout.tsx` files respectively. While their implementations are similar, the key distinction lies in the fact that the Layout component can contain `components` which are rendered as its children.
-   To ensure scalability, each component is associated with a mapping record. This record uses the component name as a key and the component itself as a value. Adding support for new layouts or components is straightforward - simply add a new entry to this record. This record is also used to generate configuration types, eliminating the need to manually add types each time a new component is introduced.
-   It's important to note that the `children` prop from layout components is omitted. This is because components are rendered as children of the Layout component, rather than being passed as props.

### Additional Requirements
