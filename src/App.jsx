import "./App.css";
import Header from "./components/Header/Header";
import Firstsection from "./components/Main/Firstsection/Firstsection";
import AllDayLocksmithServices from "./components/AlldayLocksmithServices/AllDayLocksmithServices";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import RunningLine from "./components/RunningLine/RunningLine";
import ProcedureSection from "./components/ProcedureSection/ProcedureSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Firstsection />
      <RunningLine />
      <ProcedureSection />
      <AllDayLocksmithServices />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default App;
