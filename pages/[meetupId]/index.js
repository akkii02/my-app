import Meetupdetail from "@/components/meetups/MeetupDetail";

function Meetupdetails() {
  return (
    <Meetupdetail
      title="A First  Meetup"
      image="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg"
      address="Some address"
      description="This is first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback:false,
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
      }
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A Frist  Meetup",
        image:
          "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
        address: "Some address",
        description: "This is First meetup",
      },
    },
  };
}
export default Meetupdetails;
