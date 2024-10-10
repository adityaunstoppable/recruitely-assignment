import { createBrowserRouter, Outlet } from "react-router-dom";
import { AUTH_PATH, COMPANIES_LIST_PATH } from "./utils/constants";
import AuthPage from "./components/AuthPage";
import CompaniesList from "./components/CompaniesList";
import { MantineProvider } from "@mantine/core";
import AddCompany from "./components/AddCompany";
const App = () => {
  return (
    <div>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Outlet />
      </MantineProvider>
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: AUTH_PATH,
    element: <App />,
    children: [
      { path: AUTH_PATH, element: <AuthPage /> },
      { path: COMPANIES_LIST_PATH, element: <CompaniesList /> },
      { path: '/add', element: <AddCompany /> },
    ],
  },
]);

export default App;
