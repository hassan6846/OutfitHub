// Modules and Library
import React from "react";
import AllRoutes from "./Routing";
// Auth
import { AuthProvider } from "react-auth-kit"
import "./app.css"

/**
 * react query for cache and Fetched Data Manegment From client side.
 * Canceling un-autherized requests.
 */
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query"
// main
function App() {
  const ClientProvider = new  QueryClient()
  return (
    <QueryClientProvider client={ClientProvider}>
      <AuthProvider authType={'cookie'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
     
        <AllRoutes />
      </AuthProvider>
    </QueryClientProvider>
  );
}
export default App;
