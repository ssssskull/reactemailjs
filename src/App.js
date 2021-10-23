import React from "react";
import ContactForm from "./ContactForm.js";
import "./App.css";

function App() {
  return (
    <div className="App mx-auto py-8 px-8 max-w-sm bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:items-center sm:space-y-0 sm:space-x-6">
      <ContactForm />
    </div>
  );
}
export default App;
