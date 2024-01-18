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
  },
  {
    id:'m3',
    title:'A Third  Meetup',
    image:'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
    address:'Some address',
    description:'This is third meetup',
  }
]

function HomePage(){
  return  <MeetupList meetups={DUMMY_MEETUP_DATA} />
}
export default HomePage;