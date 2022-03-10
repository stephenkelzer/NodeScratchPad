import fetch from "node-fetch";
import { IAstroResponse } from "./constants";

fetch("http://api.open-notify.org/astros.json")
  .then((r) => {
    if (!r.ok) {
      throw new Error(r.statusText);
    }
    return r;
  })
  .then((x) => x.json())
  .then((results: IAstroResponse) => {
    console.log(results);
  });
