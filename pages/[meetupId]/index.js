import { useRouter } from "next/router";
import MeetUpDetails from "@/components/meetups/MeetUpDetails";
export default function MeetupId(props) {
  const router = useRouter(); 
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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const id = context.params.meetupId;
  return {
    props: {
      details: {
        image: "",
        title: "hello",
        id,
        description: "it's descr",
        address: "geolocation",
      },
    },
    // is the number of seconds NextJS will wait until it regenerates this pagefor an incoming request.
    revalidate: 10,
  };
}
