import foodRecipe from "../assets/foodRecipe.png";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a
            doloribus ipsum facilis praesentium voluptate possimus quis in,
            consectetur delectus repellat libero enim mollitia minus deserunt
            nobis similique hic reiciendis? Obcaecati voluptates quos doloremque
            ipsam. Enim numquam nemo temporibus, obcaecati cupiditate fuga.
            Numquam voluptas, aperiam architecto fuga dolorem amet sapiente.
          </h5>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img src={foodRecipe} width="320px" height="300px" />
        </div>
      </section>
      <div>
        <div className="bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fc8803"
              fill-opacity="1"
              d="M0,64L40,64C80,64,160,64,240,96C320,128,400,192,480,192C560,192,640,128,720,133.3C800,139,880,213,960,229.3C1040,245,1120,203,1200,176C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Home;
