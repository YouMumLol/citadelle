import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import './index.css';
import Home from './Pages/home.tsx'; // Ensure these components exist
import Navbar from './Components/navbar.tsx'; // Create a Navbar component
import Rune from './Pages/rune.tsx'; // Create a Rune component
import DarkSword from './Pages/darksword.tsx'; // Create a DarkSword component
import LightSword from './Pages/lightsword.tsx'; // Create a LightSword component
import LightningSword from './Pages/lightningsword.tsx'; // Create a LightSword component
import FireSword from './Pages/firesword.tsx';

// 404 Error Page
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

// Define the router with a common layout that includes the Navbar
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="rune" element={<Rune />} />
      <Route path="darksword" errorElement={<NotFound />} element={<DarkSword />} />
      <Route path="lightsword" element={<LightSword />} />
      <Route path="lightningsword" element={<LightningSword />} />
      <Route path="firesword" element={<FireSword />} />
      {/* Catch-all route for unmatched paths */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// RootLayout includes the Navbar and renders the child routes
function RootLayout() {
  return (
    <div>
      <Navbar />
      <main className='flex-1 h-screen'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
