import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion components
import PageHeader from "./header/PageHeader";
import MainPage from "./tables/MainPage";
import WhatWeDoPage from "./tables/WhatWeDoPage";
import GetInTouchTable from "./tables/GetInTouchTable";
import SearchPage from "./tables/SearchPage";
import PagesFooter from "./footer/PagesFooter";
import PageHeadersPage from './header/PageHeadersPage';
import ProtectedTable from './private/ProtectedTable'
import './App.css'; // Import your styles for transitions

function App() {
  const location = useLocation(); // Access the current location

  // Define the transition variants
  const pageVariants = {
    initial: { opacity: 0, x: "100%", backgroundColor: "transparent" },
    animate: { opacity: 1, x: 0, backgroundColor: "white" }, // Change color here
    exit: { opacity: 0, x: "-100%", backgroundColor: "transparent" },
  };

  return (
    <>
      <PageHeader />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>

          <Route 
            path="/contact" 
            element={
              <motion.div 
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <GetInTouchTable />
              </motion.div>
            } 
          />
          <Route 
            path="/PrivateAccesTableForVoxelWebPage" 
            element={
              <motion.div 
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <ProtectedTable />
              </motion.div>
            } 
          />
          <Route 
            path="/" 
            element={
              <motion.div 
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <MainPage />
              </motion.div>
            } 
          />
          <Route 
            path="/what-we-do" 
            element={
              <motion.div 
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <WhatWeDoPage />
              </motion.div>
            } 
          />
          <Route 
            path="/our-catalog" 
            element={
              <motion.div 
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <SearchPage />
              </motion.div>
            } 
          />
          <Route 
            path="/PageHeadersPage" 
            element={
              <motion.div 
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <PageHeadersPage />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>

      <PagesFooter />
    </>
  );
}

export default App;
