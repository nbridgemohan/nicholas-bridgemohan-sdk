## About the Project?

This is the my The Lord of the Rings SDK take home project for LibLab done by Nicholas Bridgemohan.

### Prerequisites

You will need a API Key (Or you can just use the one in the project)

- Api Key
  ```sh
  https://the-one-api.dev/sign-up
  ```

## Getting Started

- NPM

  ```sh
  npm init -y
  ```

- Install Package

  ```sh
  npm install lotrsdkv2
  ```

- Create index.js

  ```sh
  touch index.js
  ```

- Enter sample code

  ```sh
    const lotrsdkv2 = require('lotrsdkv2');

    // set api key
    lotrsdkv2.setApiKey('_ZcZ8yD-p5ZomLh2uB1X');

    lotrsdkv2.getMovies().then((movies) => {
    console.log(movies);
    });

    lotrsdkv2.getMovieById('5cd95395de30eff6ebccde5d').then((movie) => {
    console.log(movie);
    });

    lotrsdkv2.getMovieByIdQuote('5cd95395de30eff6ebccde5d').then((movieQuote) => {
    console.log(movieQuote);
    });

    lotrsdkv2.getMovieQuote().then((quote) => {
    console.log(quote);
    });

    lotrsdkv2.getMovieQuoteById('5cd96e05de30eff6ebcce846').then((quote) => {
    console.log(quote);
    });

  ```

  - Create index.js

  ```sh
  node index.js
  ```
