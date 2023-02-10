import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//import ReduxProvider from "redux/reduxProvider";
//import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/global.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    // <ReduxProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
    // </ReduxProvider>
  );
}
