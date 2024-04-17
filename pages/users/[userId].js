function UserId({ userId }) {
  return <div>{userId}</div>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.userId;

  //   console.log("server side rendering ==========");

  return {
    props: {
      userId: id,
    },
  };
}

export default UserId;
