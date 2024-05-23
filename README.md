# TaskFocus API

This project is a TodoList application built for a class test to evaluate the mastery of the NestJS framework. It is built using TypeScript, SQL, TypeORM, and NPM.

The project, which you will need to fork, contains a number of automated tests. Each of these tests covers a specific feature: creating a user, creating a task, verifying that the server returns an error in certain cases, etc.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

- Node.js
- NPM
- Docker

### Installing
1. Clone the repo
2. Install NPM packages
 ```sh
   npm ci 
  ```
3. Start the server with docker
 ```sh
  # In windows
   npm run start:postgres:win
  # In linux
  npm run start:postgres
  ```

You can run the tests with the following command:
 ```sh
  # without docker
   npm run test
  # with docker on windows
   npm run test:e2e:postgres:win
  # With docker on linux
  npm run test:e2e:postgres
  ```


## Build with
- TypeScript
- PostgreSQL
- TypeORM

## Authors
- [Zlahrouni](https://ziadlahrouni.com) - Master Dev Manager Full stack @ EFREI

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
 - Project forked from [nestjs-final-test](https://github.com/pviara/nestjs-final-test) for educational purposes.
