// Modules and Library
import React from "react";
import AllRoutes from "./Routing";
// Auth
import { AuthProvider } from "react-auth-kit"
import { Toaster } from "react-hot-toast"
//cookie consent
import { CookieConsent } from "react-cookie-consent"
//css
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
        <Toaster />
        <AllRoutes />
        <CookieConsent
          acceptOnScroll={true}
          acceptOnScrollPercentage={5}
          location="bottom"
          buttonText="Accept."
          cookieName="consent"
          buttonStyle={{ color: "#4e503b", fontSize: "13px", padding: "0.2rem 1rem", right: "0" }}
          expires={150}
          style={{ right: '5px' }}
        >
          This website uses cookies to ensure you get best experience at out webiste{" "}
          <span style={{ fontSize: "10px", textDecoration: "underline", marginLeft: "0.3rem", color: "#4BB497", fontWeight: "bold", cursor: "pointer" }}>learn more about privacy policiy.</span>

        </CookieConsent>
      </AuthProvider>
    </QueryClientProvider>
  );
}
export default App;
