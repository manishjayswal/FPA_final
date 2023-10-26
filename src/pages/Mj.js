import React, { useEffect, useState } from 'react'

function Mj() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:5000/members").then(
      res => res.json()
    ).then(data =>{
      setData(data.members)
      console.log(data)
    })
  },[])
  return (
    <div className="container">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="columns">
          {data.map((member, i) => (
            <div key={i} className="column">
              {member}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Mj













// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
