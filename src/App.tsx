import React, { useState } from "react";
import "./App.css";
import CustomerInfo from "./pages/CustomerInfo";
import Loader from "./components/Loader";

function App() {
  const [showLoader, setShowLoader] = useState<Boolean>(false);
  return (
    <div>
      {showLoader && <Loader />}
      <CustomerInfo setShowLoader={setShowLoader} showLoader={showLoader} />
    </div>
  );
}

export default App;
