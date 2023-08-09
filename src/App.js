import "./styles.css";
import React, { useEffect, useState } from "react";
import FilterComponent from "./FilterComponent";
import Post from "./Post";

export default function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <FilterComponent onSearch={handleSearch} />
      <Post data={filteredData} />
    </div>
  );
}
