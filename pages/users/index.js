import Link from "next/link";

function UserProfile({ users }) {
  return (
    <div>
      <Link href={`/users/${users.id}`}>Go to {users.name}</Link>
    </div>
  );
}

export default UserProfile;
// -  SSR (pre-render a page HTML on the server on every request)
// - only excuted on server after deployment
// - should use getServerSideProps if you need to render a page that relies on personalized user data,
// or information that can only be known at request time.
// For example, authorization headers or a geolocation.
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  return {
    props: { users: { name: "max", id: 2 } },
  };
}
