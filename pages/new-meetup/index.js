import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function AddMeetup(data) {
    console.log(data);
  }
  return (

      <NewMeetupForm onAddMeetup={AddMeetup} />
 
  );
}
