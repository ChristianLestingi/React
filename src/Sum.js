import React from "react";

export function Sum({  numbers=[1,2,3,4,5] }) {
  return (
    <h1>{numbers.map((item) => item).reduce((prev, curr) => prev + curr)}</h1>
  );
}
