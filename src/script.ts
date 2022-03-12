import axios from "axios";
import { IAstroResponse } from "./IAstroResponse";
import { padRight } from "./padRight";

axios
  .get<IAstroResponse>("http://api.open-notify.org/astros.json")
  .then(({ data }) => {
    const nameMaxLength = Math.max(...data.people.map((x) => x.name.length));
    const craftMaxLength = Math.max(...data.people.map((x) => x.craft.length));

    console.log(`There are ${data.people.length} people in space right now:`);
    console.log("");
    console.log(`${padRight("Name", nameMaxLength, " ")} | ${"Craft"}`);
    console.log(
      `${padRight("", nameMaxLength, "-")} | ${padRight(
        "",
        craftMaxLength,
        "-"
      )}`
    );
    let lastCraft = null;
    for (const { craft, name } of data.people) {
      let craftDisplay = "";
      if (lastCraft !== craft) {
        craftDisplay = craft;
        lastCraft = craft;
      }

      console.log(`${padRight(name, nameMaxLength, " ")} | ${craftDisplay}`);
    }
  })
  .catch((err: Error) => console.log(err));
