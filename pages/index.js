import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Fa%C3%A7ade_cath%C3%A9drale_Florence.jpg/1024px-Fa%C3%A7ade_cath%C3%A9drale_Florence.jpg",
    address: "Some address 7, 32758 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Hallstatt_-_Zentrum_.JPG/1920px-Hallstatt_-_Zentrum_.JPG",
    address: "Some address 174, 93632 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  const client = await MongoClient.connect(
    "mongodb+srv://weco:UiLmj2kXYYuchF5x@cluster0.xfpldic.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
};

export default HomePage;
