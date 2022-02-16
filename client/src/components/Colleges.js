import ReactDOM from 'react-dom'
import CollegesTable from "./CollegesTable";

function Colleges() {
  fetch("/colleges")
    .then((res) => res.json())
    .then((data) => {
      console.log('data=', data)
      ReactDOM.render(
        <CollegesTable data={data} />,
        document.getElementById("colleges-table")
      );
    });

  return <div id="colleges-table"></div>;
}

export default Colleges;
