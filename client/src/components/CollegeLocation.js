function CollegeLocation(props) {
  return (
    <div>
      is located
      {props.data.city ? (
        <span>
          {" "}
          in {props.data.city}, {props.data.state} {props.data.distance ? ( <span>{props.data.distance} miles away</span> ) : ''}
        </span>
      ) : (
        <span>
          {" "}
          <em>somewhere</em>
        </span>
      )}
    </div>
  );
}

export default CollegeLocation;
