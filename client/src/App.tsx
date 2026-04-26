import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Beckenbodenstuhl from "./pages/Beckenbodenstuhl";
import UeberUns from "./pages/UeberUns";
import Erfahrungen from "./pages/Erfahrungen";
import Kontakt from "./pages/Kontakt";
import AnfrageStep1 from "./pages/AnfrageStep1";
import AnfrageStep2 from "./pages/AnfrageStep2";
import AnfrageStep3 from "./pages/AnfrageStep3";
import Danke from "./pages/Danke";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/beckenbodenstuhl" component={Beckenbodenstuhl} />
        <Route path="/ueber-uns" component={UeberUns} />
        <Route path="/erfahrungen" component={Erfahrungen} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/anfrage/dein-anliegen" component={AnfrageStep1} />
        <Route path="/anfrage/deine-daten" component={AnfrageStep2} />
        <Route path="/anfrage/termin" component={AnfrageStep3} />
        <Route path="/danke" component={Danke} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
