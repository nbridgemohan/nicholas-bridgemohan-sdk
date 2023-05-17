## About this SDK Design

The main intention behind this SDK design is simplicity and ease of use for developers with minimal usage of code abstraction and packages.

This project was done in Typescript because of its type checking and additional features which cover the downsides of vanilla Javascript. Using this also allows our code to be more uniform and easy to understand.

The codebase uses a library called Axios to fetch data form the API. If more functions need to be added for API requests, it can be done using index.ts.

There is also a sub directory called testing which can be used to test the SDK.
