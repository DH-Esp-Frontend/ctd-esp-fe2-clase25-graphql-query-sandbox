import { useQuery } from "@apollo/client";

import INFO_PERSON from "./querys/index";

import "./App.css";

function App() {
  const { loading, error, data } = useQuery(INFO_PERSON);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <div className="container">
        <img src="logo.svg" alt="logo rick and morty" className="logo"/>
        <section className="parent">

          <div className="card">
            <img src="" alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4>
                <b></b>
              </h4>
              <p>
                <b>GENDER:</b> 
              </p>
              <p>
                <b>SPECIE:</b> 
              </p>
            </div>
          </div>

      </section>
    </div>
  );
}

export default App;
