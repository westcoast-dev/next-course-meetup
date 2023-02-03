import MeetupList from "../components/meetups/MeetupList";

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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
