import React from "react";
import "./styles/App.css";
import { useState } from "react";
import { Form } from "./components/form/Form";
import { Table } from "./components/table/Table";
import Papa from "papaparse";

function App() {
  const [data, setData] = useState(localStorage.table ? JSON.parse(localStorage.table) : []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      encoding: "cp1251",
      // transformHeader: (header) => {
      //   if (!headers2.includes(header) && !header.includes('undefined') && header) headers2.push(header)
      // return header
      // },
      complete: (results) => {
        localStorage.setItem("table", JSON.stringify(results.data));
        setData(results.data);
        // setHeaders(headers2)
      },
    });
  };

  return (
    <div className="App">
      {!data.length ? (
        <Form handleFileUpload={handleFileUpload} />
      ) : (
        <Table handleFileUpload={handleFileUpload} data={data} />
      )}
    </div>
  );
}

export default App;
