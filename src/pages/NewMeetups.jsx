import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetup(meetupData){
    
  }

  return <section>
    <h1>Add new Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetup} />
  </section>
}

export default NewMeetupsPage;
