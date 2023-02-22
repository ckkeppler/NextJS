export default function About(props) {
  return (
    <>
      <h2>About Us</h2>
      <p>
        Welcome to this amazing about page. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Porro dolore officiis atque voluptas,
        quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam
        maxime laborum? Quae omnis eius impedit et?
      </p>
      <p>I have {props.repoCount} public repos on GitHub.</p>
    </>
  );
}
// this function name is required to get props
export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users/ckkeppler");
  const data = await response.json();
  console.log(data);
  return {
    // return specific props property
    props: {
      repoCount: data.public_repos,
    },
    // fetches a new updated static copy of the page
    revalidate: 10,
  };
}
