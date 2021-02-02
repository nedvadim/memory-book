import React, {useEffect, useState} from 'react';
import { getPersonById } from "../../../../api/persons";
import CircularProgress from '@material-ui/core/CircularProgress';
import classes from './ViewPerson.module.css'
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
        (
          <div className={classes.ProfileCard}>
            <img className={classes.ImageStyling} src={viewedPerson.avatarURL} />
            <div>
              <h2>{viewedPerson.name} {viewedPerson.surname}</h2>
              <p>Home Town: </p> <h4>{viewedPerson.hometown}</h4>
              <p>Age: </p> <h4>{viewedPerson.age}</h4>
            </div>
          </div>
        )
        :
        <CircularProgress />
      }
    </>
  )
};

export default ViewPerson;
