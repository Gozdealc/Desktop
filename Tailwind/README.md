# Miuul Tailwind

------

[Tailwind Github](https://github.com/Gozdealc/Desktop/tree/master/Tailwind)


## CDN

```sh
Font Awesome
```
[Font Awesome](<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />)

----------------------------------------------


## Install

```sh
npm init -y 
npm install -D tailwindcss
npx tailwindcss init

```


-------------------------------------------



## tailwind.config.js


```sh
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

---------------------------------------------


## input.css

```sh

@tailwind base;
@tailwind components;
@tailwind utilities;

```

----------------------------------------------------


## watch

```sh
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

npm run watch

```

-----------------------------------------------------


## Template out.css

```sh
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

```

