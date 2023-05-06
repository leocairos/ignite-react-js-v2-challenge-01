# 🚀 How the challenge was resolved
  
## 1. Create a new Vite Project with TypeScript

  ```shell
  npm create vite@latest
  Need to install the following packages:
    create-vite@latest
  Ok to proceed? (y) y
  ✔ Project name: … ignite-react-js-v2-challenge-01
  ✔ Select a framework: › React
  ✔ Select a variant: › TypeScript

  Scaffolding project in ./ ignite-react-js-v2-challenge-01...

  Done. Now run:

    cd  ignite-react-js-v2-challenge-01
    npm install
    npm run dev

  ```

## 2. Simplify initial project

1. Delete all files from ./scr (except App.tsx, main.tsx and vite-env.d.ts).

2. Delete all assets from ./src/assets

3. Remove unused imports from App.tsx and main.tsx

4. Simplify App.tsx with only return (<h1>ToDo List</h1>)


## 3. Create a global.css

Create a global.css style:

  ```css

  ```

Add import './global.css' into App.tsx;


## 4. Update index.html 

Update index.html with the font commands, title and icon (icon by figma)

  ```html
  ...
    <head>
      <meta charset="UTF-8" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      
      <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet"/>
      
      <title>ToDo List</title>
    </head>
  ...
  ```

  ## Other customs

  Edit vite.config.json to custom app port:

    ```js
    ...
      plugins: [react()],
      server: {
        port: 3002
      }
    ...
    ```