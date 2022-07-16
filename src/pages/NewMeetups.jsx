import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const navigate = useNavigate();

  function addMeetup(meetupData) {
    //use to send HTTP request
    fetch(
      "https://react-course-95a67-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST', // POST method instead of GET
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/'); // goes to '/' after sending HTTP req
    }); 
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </section>
  );
}

export default NewMeetupsPage;
