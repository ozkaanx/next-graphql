import React from "react";
import { ApolloProvider } from "@apollo/client";
import graphqlClient from "../graphql/client";
import PageLayout from "../layout";
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={graphqlClient}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ApolloProvider>
  );
}

export default MyApp;
