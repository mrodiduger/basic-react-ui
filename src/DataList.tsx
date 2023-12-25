import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

interface DataListProps {
  data: Array<any>;
}

const DataList: React.FC<DataListProps> = (props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">API</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">AUTH</th>
            <th scope="col">HTTPS</th>
            <th scope="col">CORS</th>
            <th scope="col">LINK</th>
            <th scope="col">CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>{item["API"]}</td>
              <td>{item["Description"]}</td>
              <td>{item["Auth"]}</td>
              <td>{item["HTTPS"]}</td>
              <td>{item["Cors"]}</td>
              <td>{item["Link"]}</td>
              <td>{item["Category"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataList;
