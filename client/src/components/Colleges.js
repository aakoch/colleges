import College from "./College";

async function Colleges(props) {
  console.log('props=', props)
  const colleges = props.data.map(college => <College data={college}></College>);

  return (
    <div className="App">
      {colleges}
      <College name="test"></College>
    </div>
  );
}

export default Colleges;
