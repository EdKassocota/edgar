/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import ProductWork from './components/ProductWork';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import About from './components/About';
import Technology from './components/Technology';
import AdditionalWork from './components/AdditionalWork';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function AppContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-neutral-950 text-neutral-100 selection:bg-neutral-100 selection:text-neutral-950' 
        : 'bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-neutral-50'
    } font-sans`}>
      <Navigation />
      <main>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <ProductWork />
        <Process />
        <About />
        <Technology />
        <AdditionalWork />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}
