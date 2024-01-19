import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUP_DATA = [
  {
    id:'m1',
    title:'A First  Meetup',
    image:'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
    address:'Some address',
    description:'This is first meetup',
  },
  {
    id:'m2',
    title:'A Second  Meetup',
    image:'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
    address:'Some address',
    description:'This is second meetup',
  }
]

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
  return {
    props: {
      meetups:DUMMY_MEETUP_DATA
    },
    revalidate:1
  }
}

export default HomePage;