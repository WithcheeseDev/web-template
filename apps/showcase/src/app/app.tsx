import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Spinner } from '../components/Spinner';

const HomePage = lazy(() => import('../pages/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const PlaygroundPage = lazy(() => import('../pages/PlaygroundPage'));

export function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/catalog"
            element={
              <Suspense fallback={<Spinner />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path="/playground/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <PlaygroundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
