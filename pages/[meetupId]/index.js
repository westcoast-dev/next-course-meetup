import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
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
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Fa%C3%A7ade_cath%C3%A9drale_Florence.jpg/1024px-Fa%C3%A7ade_cath%C3%A9drale_Florence.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some address 7, 32758 Some City",
        description: "This is a first meetup",
      },
    },
  };
};

export default MeetupDetails;
