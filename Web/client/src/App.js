// Modules and Library
import React from "react";
import AllRoutes from "./Routing";
// Auth
import {AuthProvider} from "react-auth-kit"
// main
function App() {
  return (
    <AuthProvider  authType = {'cookie'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    >
<AllRoutes />
</AuthProvider>
  );
}
export default App;
