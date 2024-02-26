import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetails from "@/components/meetups/MeetUpDetails";
export default function MeetupId(props) {
  return (
    <div>
      <MeetUpDetails
        image={props.details.image}
        title={props.details.title}
        description={props.details.description}
        address={props.details.address}
      />
    </div>
  );
}
export async function getStaticPaths() {
  // we describe all the dynamic segment values. So all the meetup IDs in this case, for which this page should be pre-generated.

  const client = await MongoClient.connect(
    `mongodb+srv://marikanik1999:Hr1VRVqN6jXovg57@meetup.t9mwjet.mongodb.net/?retryWrites=true&w=majority&appName=Meetup`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  //gives us all the meetups by id
  const meetups = await meetupsCollection
    .find(
      //all meetups
      {},
      // define which fields should be extracted for every document.
      //only include the ID but no other field values.
      { _id: 1 }
    )
    .toArray();
  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}
export async function getStaticProps(context) {
  const id = context.params.meetupId;

  const client = await MongoClient.connect(
    `mongodb+srv://marikanik1999:Hr1VRVqN6jXovg57@meetup.t9mwjet.mongodb.net/?retryWrites=true&w=majority&appName=Meetup`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const { title, image, address, description, _id } =
    await meetupsCollection.findOne({ _id: new ObjectId(id) });
  client.close();
  return {
    props: {
      details: {
        title,
        image,
        address,
        description,
        id: _id.toString(),
      },
    },
    // is the number of seconds NextJS will wait until it regenerates this pagefor an incoming request.
    revalidate: 10,
  };
}
