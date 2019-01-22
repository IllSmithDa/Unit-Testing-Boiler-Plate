# Testing TDD Development

# axios-mock-adapter
  1. https://github.com/ctimmerm/axios-mock-adapter
# Jest Docs
  1. https://jestjs.io/
  2. https://jestjs.io/docs/en/tutorial-react
# React testing libraray
# Jest parsing issue potential fix
https://stackoverflow.com/questions/51639885/testing-react-components-jest-encountered-an-unexpected-token

# Notes for Setting up React component testing with Chai, Enzyme 

# Required libraries for setting up basic react app testing ( use npm i )
  1.  babel-core
  2. babel-preset-env
  3. babel-preset-react
  4. chai
  5. enzyme

# Enzyme libaray docs
  1. https://airbnb.io/enzyme/docs/api/

# Steps for setting up Unit testing using Enzyme, Chai and Jest
  1. install needed libraries mentioned above
  2. create .babelrc file as included in this project
  3. If mocking css, create a __mocks__ folder like in this boiler plate project
  4. create __tests__ folder and keep test in there for now.
  5. Change package.json with test script to just 'jest'
  6. Add a jest section in the package.json file as it is in this boiler plate project
  7. Match test file to how the test file are set up here include setting up an Adapter
  8. Use Enzyme documentation to create specific tests before writing up code and make sure 
     to know how app is supposed to look ahead of time to make test writing easier
     https://airbnb.io/enzyme/docs/api/
     https://jestjs.io/docs/en/tutorial-react

    