'use strict';

//const express = require('express');
import { graphqlHTTP } from 'express-graphql';  
import express from 'express';
import { graphql, buildSchema }  from 'graphql'


const app = express();
const port = process.env.port || 3000;

//const { graphql, buildSchema } = require('graphql');

//definiendo el esquema

const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`);

//resolvers
const resolvers = {
  hello: () => {
    return 'hola mundo';
  },
  saludo: () => {
    return 'chau a todos';
  },
};

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
