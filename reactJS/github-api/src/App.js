import React from 'react';
import Layout from "./components/Layout";
import Profile from "./components/profile";


function App() {
  return (
    <main>
      
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
