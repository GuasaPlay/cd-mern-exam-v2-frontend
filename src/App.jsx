import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { RouterApp } from "routers/RouterApp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
