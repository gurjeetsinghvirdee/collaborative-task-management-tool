import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema'
import resolvers from './resolvers'

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});