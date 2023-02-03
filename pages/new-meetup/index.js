import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeeupPage = () => {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeeupPage;
