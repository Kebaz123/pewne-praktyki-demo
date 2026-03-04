import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from '@/components/Layout';
import PageWrapper from '@/components/PageWrapper';

import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Tips from '@/pages/Tips';
import Contact from '@/pages/Contact';
import Offer from '@/pages/Offer';
import NotFound from '@/pages/NotFound';

import '@/styles/App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="search"
            element={
              <PageWrapper>
                <Search />
              </PageWrapper>
            }
          />
          <Route
            path="wyszukiwarka"
            element={
              <PageWrapper>
                <Search />
              </PageWrapper>
            }
          />
          <Route
            path="tips"
            element={
              <PageWrapper>
                <Tips />
              </PageWrapper>
            }
          />
          <Route
            path="rady"
            element={
              <PageWrapper>
                <Tips />
              </PageWrapper>
            }
          />
          <Route
            path="contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="kontakt"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="offer/:id"
            element={
              <PageWrapper>
                <Offer />
              </PageWrapper>
            }
          />
          <Route
            path="oferta/:id"
            element={
              <PageWrapper>
                <Offer />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
