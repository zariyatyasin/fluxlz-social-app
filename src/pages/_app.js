import Header from "@/components/Header";
import UploadImage from "@/components/UploadImage";
import { persistor, store } from "@/Redux/Store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === "/signup" ? false : true;
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={"loading"} persistor={persistor}>
          {showHeader && <Header></Header>}
          <UploadImage></UploadImage>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
