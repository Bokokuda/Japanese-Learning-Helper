import React, {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/hiragana')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  },  [])
  return (
    <div className="App">
      <table>
        <thead>
          <th>Hiragana</th>
          <th>English</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.Hiragana}</td>
              <td>{d.English}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
