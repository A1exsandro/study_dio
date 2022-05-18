import Layout from "./components/Layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img source="https://avatars.githubusercontent.com/u/83672739?v=4" alt="Avatar of user" />
          <h1>Alexsandro Antônio</h1>
          <h3>UserName: </h3>
          <span>a1exsandro</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
