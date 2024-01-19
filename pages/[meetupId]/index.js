import { MongoClient,ObjectId } from "mongodb";
import Meetupdetail from "@/components/meetups/MeetupDetail";

function Meetupdetails(props) {
  return (
    <Meetupdetail
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({},{_id:1}).toArray();
client.close()
  return {
    fallback:false,
    paths:meetups.map(meetup=> ({params: {meetupId: meetup._id.toString()}}))
    
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})
client.close()
  return {
    props: {
      meetupData: {
        id:selectedMeeetup._id.toString(),
        title:selectedMeeetup.title,
        image:selectedMeeetup.image,
        description:selectedMeeetup.description,
        address:selectedMeeetup.address,
      }
    },
  };
}
export default Meetupdetails;
