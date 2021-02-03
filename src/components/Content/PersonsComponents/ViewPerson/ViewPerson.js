import React, {useEffect, useState} from 'react';
import { getPersonById } from "../../../../api/persons";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CustomDialog from "../../../common/CustomDialog/CustomDialog";
import classes from './ViewPerson.module.css'
const ViewPerson = (props) => {
  const [viewedPerson, setViewedPerson] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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
            <img className={classes.ProfileCardImage} src={viewedPerson.avatarURL} />
            <div className={classes.ProfileCardDescription}>
              <h2 className="mb-1">{viewedPerson.name} {viewedPerson.surname}</h2>
              <Button
                color="primary"
                className={classes.ProfileCardAddMoreBtn}
                startIcon={<AddIcon />}
                onClick={() => { setIsOpen(!isOpen) }}
              >
                Add More
              </Button>
              <div className={classes.ProfileCardDescriptionCells}>
                <div className={classes.ProfileCardDescriptionCell}>
                  <p className="secondaryArticleText">Home Town </p>
                  <h4 className="mainArticleText">{viewedPerson.hometown}</h4>
                </div>
                <div className={classes.ProfileCardDescriptionCell}>
                  <p className="secondaryArticleText">Age </p>
                  <h4 className="mainArticleText">{viewedPerson.age}</h4>
                </div>
              </div>
            </div>
            <CustomDialog isOpen={isOpen} />
          </div>
        )
        :
        <CircularProgress />
      }
    </>
  )
};

export default ViewPerson;
