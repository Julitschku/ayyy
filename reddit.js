const Discord = require("discord.js");
var bot = new Discord.Client();
const puppeteer = require("puppeteer");
const amount = 5
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
var  url = "https://www.reddit.com/r/" + args +"/"
let postsObject = {};
console.log("Getting posts from Reddit");

const browser = await puppeteer.launch({
  headless: false
});

const page = await browser.newPage();
await page.goto(url, { waitUntil: "load" });
const root = (await page.$$(`.rpBJOHq2PR60pnwJlUyP0`))[0];
const posts = [];


for (let i = 0; i < amount; i++) {

  // Get all the posts in this chunk
  const chunk = await (await root.$$("._1poyrkZ7g36PawDueRza-J"));

  // Add all the posts in this chunk to the posts array
posts.push(...chunk);

    await sleep(1000);
  

  // Scroll to the next chunk
  await page.evaluate(() => {
      window.scrollBy(0, (632 * 12));
});
}

for (const post of posts) {

  try {

      // Get the title
      const title = await getProperty(post, "textContent", "_eYtD2XCVieq6emjKBH3m");

      // Get the image jokesObject
      const image = await getProperty(post, "src", "ImageBox-image");


      await sleep(1000);
      // Add the post to the jokes object
      postsObject[title] = { image: image };

  } catch (error) {

  }

}


console.log("Converting posts into an array");

// Convert the jokes object into an array
const postsarr = [];
for (const joke in postsObject) {
  postsarr.push({
        title: joke,
        image: postsObject[joke].image
    })
}







console.log(postsarr)


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
module.exports.help = {
  name: "reddit"
}