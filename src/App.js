import React, { useState, useEffect } from 'react'


function App() {

  let [user, setUser] = useState(null)

  useEffect(() => {
    fetch(' http://127.0.0.1:5000/users', {
      mode: 'cors'
    })
      .then(res => {
        return res.json()
      })
      .then(user => {
        console.log(user)
        return setUser(user)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  // useEffect(() => {
  //   fetch('http://localhost:5000/users', {
  //     mode: 'no-cors'
  //   })

  //     .then(data => {
  //       console.log(data)
  //     })
  // })

  // useEffect(() => {
  //   fetch('http://localhost:5000/users', {
  //     mode: 'no-cors'
  //   }, {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json'
  //     }
  //   })
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //     })
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React and flask</h1>
      </header>
    </div>
  );
}

export default App;