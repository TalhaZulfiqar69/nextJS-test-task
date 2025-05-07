import { GetServerSideProps } from 'next';
import Head from 'next/head';
import UserCard from '@/components/Users/User';
import usersData from '@/data/users.json';

type User = {
  id: number;
  name: string;
  description: string;
  image: string;
  jobTitle: string;
  imageAlt: string;
};

type Props = {
  users: User[];
};

export default function Home({ users }: Props) {
  return (
    <>
      <Head>
        <title>User List Page | SEO & WCAG</title>
        <meta name="Meet Our Users | Discover Unique Profiles & Talents" content="A user list page optimized for SEO and accessibility." />
      </Head>
      <main>
        <h1 tabIndex={0} style={{marginBottom: "50px"}}>Explore Handpicked US-Based Professionals with Proven Expertise</h1>
        <ul>

        <div style={{ display: "flex", justifyContent: 'space-between', gap: "20px", flexWrap: "nowrap" }}>
          {users.map((user) => (
            <UserCard 
              key={user.id} 
              id={user.id} 
              name={user.name} 
              description={user.description} 
              image={user.image} 
              jobTitle={user.jobTitle} 
              imageAlt={user.imageAlt}
            />
          ))}
          </div>
        </ul>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Simulate fetching static data (SSR)
  const users = usersData;
  return { props: { users } };
};
