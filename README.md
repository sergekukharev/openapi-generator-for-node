# openapi-generator-for-node

An example of using `openapi-generator` to generate DTOs and dummy client

## Setup 

1. Make sure you have Java
1. Install `openapi-generator` using npm package wrapper:
    `npm install @openapitools/openapi-generator-cli -g`
1. Clone repository
1. `npm install`
1. `npm run build` will generate client using openapi.yaml and transpile TS
1. `npm run start` will run express
1. Go to http://localhost:3000

## Resources

- [openapi-generator website](https://openapi-generator.tech/)
- [openapi-generator GitHub](https://github.com/OpenAPITools/openapi-generator)
- [openapi-generator installation](https://openapi-generator.tech/docs/installation)
- [typescript generator for openapi-generator](https://openapi-generator.tech/docs/generators/typescript-node)