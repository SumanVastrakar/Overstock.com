import React from "react";
import { useEffect, useState } from "react";
import "./SearchDebouncing.css";

export default function DebouncingSearch() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "http://localhost:8080/HomeGoods"
      ).then((d) => d.json());
      setProduct(data);
    }
    getData();
  }, []);
  return <div></div>;
}
