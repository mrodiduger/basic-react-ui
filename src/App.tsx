import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DataList from "./DataList";

export default function App() {
  const title = "Public APIs";
  const [url, setUrl] = useState<string>("https://api.publicapis.org/entries");
  const [data, setData] = useState<any[]>([]);
  const [visibleData, setVisibleData] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.entries);
        setVisibleData(data.entries);
      })
      .catch((error) => console.error("Error:", error));
  }, [url]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setVisibleData(data);
      return;
    }
    setVisibleData(
      data.filter((item) =>
        item["API"].toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">{title}</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </nav>
      <DataList data={visibleData} />
    </>
  );
}
