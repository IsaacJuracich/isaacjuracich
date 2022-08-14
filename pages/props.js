export default function Props(props) {
  return (
    <>
      <p>{JSON.stringify(props)}</p>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      secret: "secret",
    },
  };
}
