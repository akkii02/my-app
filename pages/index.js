import { MongoClient } from "mongodb";
import MeetupList from "@/components/meetups/MeetupList";



function HomePage(props){
  return  <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//   return {
//     props:{
//       meetups:DUMMY_MEETUP_DATA
//     }
//   }
// }


export async function getStaticProps (){

  const client = await MongoClient.connect(
    "mongodb+srv://akshaysable097:oJ6cxgSayX54WHzY@cluster0.roilqpl.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray()

  client.close()
  return {
    props: {
      meetups:meetups.map(meetup=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString,
      }))
    },
    revalidate:1
  }
}

export default HomePage;