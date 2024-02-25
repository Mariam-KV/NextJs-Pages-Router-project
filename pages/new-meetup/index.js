import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
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
  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta name="description" content="Meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={AddMeetup} />
    </Fragment>
  );
}
