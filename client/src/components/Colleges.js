import { useState } from 'react';
import ReactDOM from 'react-dom'
import CollegesTable from "./CollegesTable";

function Colleges() {
  const [colleges, setColleges] = useState([])
  fetch("/colleges")
    .then((res) => res.json())
    .then((data) => {
      setColleges(data)
    });

  return <CollegesTable data={colleges}>Loading...</CollegesTable>
}

export default Colleges;
