import React, {useEffect, useState} from 'react';
import { getPersonById } from "../../../../api/persons";
import CircularProgress from '@material-ui/core/CircularProgress';
const ViewPerson = (props) => {
  const [viewedPerson, setViewedPerson] = useState(null);
  useEffect(() => {
    getPerson();
  }, []);
  const getPerson = async () => {
    const personId = props.match.params.id;
    if (personId) {
      try {
        const {data} = await getPersonById(personId);
        setViewedPerson(data);
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error('No person ID in params');
    }
  };
  const personsKeys = viewedPerson ? Object.keys(viewedPerson) : [];
  return (
    <>
      <h1 className="MainHeadersMB">Person Overview</h1>
      {viewedPerson ?
        (personsKeys.map(key => {
          if(key !== 'avatarURL') {
            return <p key={key} ><strong>{key}:</strong> {viewedPerson[key]}</p>
          } else {
            return <img  width={100} src={viewedPerson[key]} />
          }
        }))
        :
        <CircularProgress />
      }
    </>
  )
};

export default ViewPerson;
