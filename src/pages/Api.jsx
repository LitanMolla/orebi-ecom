import React, { useEffect, useState } from "react";
import Container from "../components/Container";

const Api = () => {
  //   const [email, setEmail] = useState([]);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => setEmail(data));
  //     // console.log(email);
  //   }, []);
  //   let namex = email.map((item)=>item.name);
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, []);
  // console.log(value);

  return (
    <>
      <Container>
        <h1>Im From Api</h1>
        <select className="bg-amber-500 p-8 rounded-3xl">
          {value.map((item) => {
            return <option> {item.region} </option>;
          })}
        </select>
      </Container>
    </>
  );
};

export default Api;
