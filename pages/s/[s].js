export default function S(props) {
  return (
    <>
      <p>{JSON.stringify(props)}</p>
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {
      secret: process.env.API_KEY,
    },
  };
}
