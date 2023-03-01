import sleep from "await-sleep";

export default function Home(props) {
  return (
    <div>
      <h2>Welcome to our homepage.</h2>
      <p>
        This is the best home page in the world. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Earum aspernatur illum architecto cumque
        recusandae fuga sequi necessitatibus deleniti repellat harum nobis,
        dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae,
        dolore.
      </p>
      <p>The weather: {props.forecast}</p>
    </div>
  );
}
// use specific function name - if data is specific, ex. depends on logged in user - this is a server side option like client side asynchronous fetch
export async function getServerSideProps() {
  const response = await fetch(
    "https://api.weather.gov/gridpoints/MFL/109,49/forecast"
  );
  const data = await response.json();

  await sleep(3000);
  return {
    props: {
      forecast: data.properties.periods[0].detailedForecast,
    },
  };
}
