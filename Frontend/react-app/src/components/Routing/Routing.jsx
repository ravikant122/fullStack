import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./Dashboard"));
const Landing = lazy(() => import("./Landing"));

function Routing() {
  return (
    <div>
      {
        /*
          we have react-router-app package to do routing in react
          we've to strictly follow the sequence
          <BrowserRouter>
            <Routes>
              <Route path="/some-path" element={<YourComponent />} />
              <Route path="/some-new-path" element={<YourNewComponent />} />
            </Routes>
          </BrowserRouter>

          now with this, everytime we change route whole data comes from server like index.html, js files, css files
          but we don't need this, we can either fetch all files in the starting(takes time when website loads) and do client-side
          routing(client-side routing means changing route on client side and don't bring any files from server)
          for this, we can use useNavigate() hook from react-router-dom

          or we fetch files for the current route only(and store them so that we don't have to fetch them from server again n again)
          for this, we've do lazy loading
          for this, we've to import files in lazy loaded fashion
          const MyComponent = React.lazy(() => import("./MyComponent"))
          and that's it - now when our component gets loaded for the first time, then it fetches the related files from server
          and then it cached them, so that we don't have to fetch again n again

          One more thing: <Suspense fallback={<Loading />}><YourComponent /></Suspense>
          when component gets fetch, its a async operation and that can take time
          so we've to add a loading, we do that by Suspense provided by react
         */
      }
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="loading...">
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback="loading...">
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Landing page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard page</button>
    </div>
  );
}

export default Routing;
