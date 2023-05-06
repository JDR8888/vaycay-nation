// express
dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const favicon = require('express-favicon');
// apollo server
const { ApolloServer } = require('apollo-server-express');
// database connection
const db = require('./config/connection');

dotenv.config();

// graphql schemas
const { typeDefs, resolvers } = require('./schemas');
// app & port
const app = express();
const PORT = process.env.PORT || 3001;
// new apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cacheControl: {
    defaultMaxAge: 60,
  },
  persistedQueries: {
    cache: 'bounded', // Set cache to "bounded"
  },
});

// middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// point to dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(favicon(__dirname + './favicon.png'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
);

// startserver
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log('server running on http://localhost:3001');
      console.log(`graphql at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};
// start apollo server
// connect express middlewar for apollo

// connect the db
// start the express server
startServer();
