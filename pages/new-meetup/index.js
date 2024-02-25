import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
export default function NewMeetupPage() {
  const router = useRouter();
  async function AddMeetup(data) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const gData = await response.json();

    router.push("/");
  }

  return <NewMeetupForm onAddMeetup={AddMeetup} />;
}
