$.getJSON("../emoji.json", async function(emoji) {
  await getRecent();

  let groups = document.getElementsByClassName("emoji-span-container");

  await attachEmoji(emoji, groups);
  await copy();

  if (localStorage.getItem("copy") == "auto") {
    await autocopy();
  }
});

function attachEmoji(emoji, groups) {
  emoji.forEach(async function(data) {
    let span = document.createElement("span");
    span.setAttribute("class", "emoji-span");
    span.setAttribute("title", data.name);
    span.innerHTML = twemoji.parse(data.char);

    if (data.category == "people") {
      if (data.name.includes("skin-tone")) {
        let size = localStorage.getItem("emojiSize");
        if (size == "small") {
          span.setAttribute("style", "height: 20px; display:none;");
        } else if (size == "normal") {
          span.setAttribute("style", "height: 40px; display:none;");
        } else if (size == "big") {
          span.setAttribute("style", "height: 80px; display:none;");
        }
      }
      await groups[1].appendChild(span);
    } else if (data.category == "nature") {
      await groups[2].appendChild(span);
    } else if (data.category == "foodAndDrink") {
      await groups[3].appendChild(span);
    } else if (data.category == "activity") {
      await groups[4].appendChild(span);
    } else if (data.category == "places") {
      await groups[5].appendChild(span);
    } else if (data.category == "objects") {
      await groups[6].appendChild(span);
    } else if (data.category == "symbols") {
      await groups[7].appendChild(span);
    } else if (data.category == "flags") {
      await groups[8].appendChild(span);
    }
  });
}
