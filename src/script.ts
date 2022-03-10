import fetch from "node-fetch";

export interface IAstroResponse {
  people: Array<{ craft: string; name: string }>;
  message: string;
  number: number;
}

const padRight = (
  value: string,
  desiredLength: number,
  padChar: string
): string => {
  if (value.length <= desiredLength) {
    let returnValue = value;
    for (let index = value.length; index < desiredLength; index++) {
      returnValue += padChar;
    }
    return returnValue;
  } else {
    return value.substring(0, desiredLength);
  }
};

fetch("http://api.open-notify.org/astros.json", {
  method: "GET",
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Failed Request! Status Code: ${res.statusText}`);
    }
    return res.json();
  })
  .then((res: IAstroResponse) => {
    const nameMaxLength = Math.max(...res.people.map((x) => x.name.length));
    const craftMaxLength = Math.max(...res.people.map((x) => x.craft.length));

    console.log(`There are ${res.people.length} people in space right now:`);
    console.log("");
    console.log(`${"Name".padEnd(nameMaxLength, " ")} | ${"Craft"}`);
    console.log(
      `${padRight("", nameMaxLength, "-")} | ${padRight(
        "",
        craftMaxLength,
        "-"
      )}`
    );
    let lastCraft = null;
    for (const { craft, name } of res.people) {
      let craftDisplay = "";
      if (lastCraft !== craft) {
        craftDisplay = craft;
        lastCraft = craft;
      }

      console.log(`${padRight(name, nameMaxLength, " ")} | ${craftDisplay}`);
    }
  })
  .catch((err) => console.log(err));
