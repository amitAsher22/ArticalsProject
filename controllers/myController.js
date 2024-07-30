const { Router } = require("express");
const client = require("../database");
const router = Router();

/// Use Puppeteer
const puppeteer = require("puppeteer");

const homePage = async (req, res) => {
  res.status(200).send("Home Page");
};
const getTableWebsites = async (req, res) => {
  const result = await client.query("select * from websites");
  console.log(result);
  res.status(200).send("get information from Table websites");
};

const getTableStatistics = async (req, res) => {
  const result = await client.query("select * from statistics");
  console.log(result);
  res.status(200).send("get information from Table statistics");
};
const getTableData = async (req, res) => {
  const result = await client.query("select * from data");
  console.log(result);
  res.status(200).send("get information from Table Data");
};
const showMainArticalFromYnet = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.ynet.co.il/home/0,7340,L-8,00.html", {
    timeout: 0,
  });
  const imageUrl = await page.$eval(".mediaItems img", (img) => img.src);
  const getTitle = await page.$eval(
    ".slotTitle span",
    (title) => title.innerHTML
  );
  const getDescription = await page.$eval(
    ".slotSubTitle span",
    (title) => title.innerHTML
  );
  const getLinkOfMainArtial = await page.$eval(
    ".mediaItems a",
    (elm) => elm.href
  );
  const get4Articals = await page.$eval(".layoutContainer ", (elm) => elm.href);

  console.log(imageUrl);
  console.log(getTitle);
  console.log(getDescription);
  console.log(getLinkOfMainArtial);

  await browser.close();

  res.status(200).send("Ynet");
};
const show4SubArticals = async (req, res) => {
  const browser = await puppeteer.launch({ handless: "new" });
  const page = await browser.newPage();
  await page.goto("https://www.ynet.co.il/home/0,7340,L-8,00.html", {
    timeout: 0,
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  const ONEartical = [];
  const ONEtitle = await page.$eval(
    ".slotTitle.medium span",
    (title) => title.innerHTML
  );
  const ONEDescription = await page.$eval(
    ".slotSubTitle span",
    (title) => title.innerHTML
  );
  const ONElink = await page.$eval(".mediaItems span a", (elm) => elm.href);
  const imageUrl = await page.$eval(".SiteImageMedia ", (img) => img.src);
  ONEartical.push(ONEtitle, ONEDescription, ONElink, imageUrl); //// push into ONEartical array

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // ///////////////////////////////////////////////////////////////////////////////////////////////////
  const TWOartical = [];

  const dataMap = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".textDiv "), (info) => ({
      title: info.querySelector(".slotTitle span").innerHTML,
    }))
  );
  const descriptionMap = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".textDiv "), (info) => ({
      description: info.querySelector(".slotSubTitle span").innerHTML,
    }))
  );

  console.log(dataMap);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  await browser.close();

  res.status(200).send(" 5 articals Ynet");
};

// Export of all methods as object
module.exports = {
  getTableWebsites,
  getTableData,
  getTableStatistics,
  homePage,
  showMainArticalFromYnet,
  show4SubArticals,
};
