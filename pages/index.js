import Link from "next/link";
import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <Fragment>
      {/* //Head -> a component which allows you to add Head elements to the Head
      section of your page. */}
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Meetups" />
      </Head>
      <h1>the home page</h1>
      <Link href={"/news"}>Link to news page</Link>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://marikanik1999:Hr1VRVqN6jXovg57@meetup.t9mwjet.mongodb.net/?retryWrites=true&w=majority&appName=Meetup`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  //inserting one new document into this collection.
  const result = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: result.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          description: meetup.description,
        };
      }),
    },
    // is the number of seconds NextJS will wait until it regenerates this pagefor an incoming request.
    revalidate: 10,
  };
}
