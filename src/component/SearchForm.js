import React, { useState } from "react";
import { axios } from "../axios";
import "./../component/component.scss";
import "./../App.scss";

function SearchForm() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData.sort((a, b) => a.text.localeCompare(b.text)));
  const [info, setInfo] = useState(null);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      console.log(data, 'data')
      return data.text.match(value)
    });
    setFilteredData(result);
  };
  
  const handleFocus = (value) => {
    setInfo(value);
  };
  const handleExit = () => {
    setInfo(null);
  };
  React.useEffect(() => {
    axios
      .get("/todo")
      .then((response) => {
        setAllData(response.data);
        setFilteredData(response.data);
        console.log("info:", info);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [info]);
  console.log(filteredData, 'filteredData');
  console.log(allData, 'allData');
  return (
    <div className="todo-list">
      <div>
        <label>Search:</label>
        <input
          type="text"
          placeholder="Text"
          onChange={(event) => handleSearch(event)}
        />
      </div>
      {info != null && (
        <div className="infor">
          <button className="exit" onClick={() => handleExit()}>
            Exit
          </button>
          <br />
          {String(info.id)}
          <br />
          {String(info.isCompleted)}
          <br />
          {info.text}
        </div>
      )}
      <div>
        {filteredData.map((value, index) => {
          return (
            <div key={value.id}>
              <span className="todo-span">
                {value.text}
                <button onClick={() => handleFocus(value)}>Show</button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchForm;