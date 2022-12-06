import React from "react";

export function Sum({ numbers }) {


  return <h1>{numbers.map((item)=> item).reduce((prev,curr)=>prev+curr)}</h1>;
}
