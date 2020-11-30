import React from 'react';
const ViewPerson = (props) => {
  return (
    <>
      <h3>View person: {JSON.stringify(props.match.params.id)}</h3>
    </>
  )
};

export default ViewPerson;
