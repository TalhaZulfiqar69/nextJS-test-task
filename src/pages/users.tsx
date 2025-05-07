import { GetServerSideProps } from 'next';
import Head from 'next/head';
import UserCard from '@/components/Users/User';
import usersData from '@/data/users.json';
import Image from 'next/image';
import DataTable, { TableColumn } from 'react-data-table-component';

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

const columns: TableColumn<User>[] = [
  {
    name: 'Name',
    selector: row => row.name,
    width: "300px",
  },
  {
    name: 'Job Title',
    selector: row => row.jobTitle,
    width: "300px",
  },
  {
    name: 'Image',
    selector: row =>  row.image,
    width: "300px",
    cell: (row) => (
        <Image
          src={row.image}
          alt={row.imageAlt}
          width={80}
          height={80}
          loading="lazy"
        />
    ),
  },
  {
    name: 'Description',
    width: "300px",
    selector: row => row.description,
  },
];

export default function Home({ users }: Props) {
  return (
    <>
      <Head>
        <title>User List Page | SEO & WCAG</title>
        <meta name="Meet Our Users | Discover Unique Profiles & Talents" content="A user list page optimized for SEO and accessibility." />
      </Head>
      <main>
        <h1 tabIndex={0} style={{marginBottom: "50px"}}>Explore Handpicked US-Based Professionals with Proven Expertise</h1>
        <DataTable columns={columns} data={users} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Simulate fetching static data (SSR)
  const users = usersData;
  return { props: { users } };
};
