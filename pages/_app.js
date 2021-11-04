import "tailwindcss/tailwind.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import UserProvider from "../services/context/userContext";

const progress = new ProgressBar({
  size: 4,
  color: "#2563eb",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);

Router.events.on("routeChangeComplete", progress.finish);

Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
