import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header>
        <h2>Hi, I'm Laura!</h2>
        <div>
          <p>I am a Full Stack Web Developer based in Paris</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel tempor libero, 
            eu finibus lectus. Sed sed consectetur nisl. Ut placerat sagittis magna vel ultricies. 
            Donec felis felis, egestas ut ligula et, gravida sagittis augue. Aenean id vestibulum magna. 
          </p>
        </div>
      </header>

      <main>
        <h3>Recent Work</h3>

        {/* TODO Add loop to add html for each project */}

        <article>
          <img src="https://via.placeholder.com/150" alt="" />
          <div>
            <h4>Project #1</h4>
            <p>Here comes a little description about the project</p>
          </div>
        </article>

      </main>

    </div>
  );
}

export default Home;