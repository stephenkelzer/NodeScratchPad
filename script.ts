import fetch from "node-fetch";

interface AstroResponse {
  people: Array<{ craft: string; name: string }>;
  message: string;
  number: number;
}

fetch("http://api.open-notify.org/astros.json")
  .then((r) => {
    if (!r.ok) {
      throw new Error(r.statusText);
    }
    return r;
  })
  .then((x) => x.json())
  .then((results: AstroResponse) => {
    console.log(results);
  });
