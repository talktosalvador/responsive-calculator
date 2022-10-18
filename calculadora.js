const inTop = document.querySelector("#top");
const inRight = document.querySelector("#right");
const inBottom = document.querySelector("#bottom");
const inLeft = document.querySelector("#left");
const inWidth = document.querySelector("#width");
const inHeight = document.querySelector("#height");

const fullTop = document.querySelector("#fullTop");
const deskTop = document.querySelector("#deskTop");
const mobileTop = document.querySelector("#mobileTop");

const fullRight = document.querySelector("#fullRight");
const deskRight = document.querySelector("#deskRight");
const mobileRight = document.querySelector("#mobileRight");

const fullBottom = document.querySelector("#fullBottom");
const deskBottom = document.querySelector("#deskBottom");
const mobileBottom = document.querySelector("#mobileBottom");

const fullLeft = document.querySelector("#fullLeft");
const deskLeft = document.querySelector("#deskLeft");
const mobileLeft = document.querySelector("#mobileLeft");

const fullWidth = document.querySelector("#fullWidth");
const deskWidth = document.querySelector("#deskWidth");
const mobileWidth = document.querySelector("#mobileWidth");

const fullHeight = document.querySelector("#fullHeight");
const deskHeight = document.querySelector("#deskHeight");
const mobileHeight = document.querySelector("#mobileHeight");

inTop.addEventListener("input", (event) => {
  fullTop.textContent = `${((event.target.value / 1440) * 100).toFixed(2)}vw`;
  deskTop.textContent = `${((event.target.value / 1024) * 100).toFixed(2)}vw`;
  mobileTop.textContent = `${((event.target.value / 390) * 100).toFixed(2)}vw`;
});

inRight.addEventListener("input", (event) => {
  fullRight.textContent = `${((event.target.value / 1440) * 100).toFixed(2)}vw`;
  deskRight.textContent = `${((event.target.value / 1024) * 100).toFixed(2)}vw`;
  mobileRight.textContent = `${((event.target.value / 390) * 100).toFixed(
    2
  )}vw`;
});

inBottom.addEventListener("input", (event) => {
  fullBottom.textContent = `${((event.target.value / 1440) * 100).toFixed(
    2
  )}vw`;
  deskBottom.textContent = `${((event.target.value / 1024) * 100).toFixed(
    2
  )}vw`;
  mobileBottom.textContent = `${((event.target.value / 390) * 100).toFixed(
    2
  )}vw`;
});

inLeft.addEventListener("input", (event) => {
  fullLeft.textContent = `${((event.target.value / 1440) * 100).toFixed(2)}vw`;
  deskLeft.textContent = `${((event.target.value / 1024) * 100).toFixed(2)}vw`;
  mobileLeft.textContent = `${((event.target.value / 390) * 100).toFixed(2)}vw`;
});

inWidth.addEventListener("input", (event) => {
  fullWidth.textContent = `${((event.target.value / 1440) * 100).toFixed(2)}vw`;
  deskWidth.textContent = `${((event.target.value / 1024) * 100).toFixed(2)}vw`;
  mobileWidth.textContent = `${((event.target.value / 390) * 100).toFixed(
    2
  )}vw`;
});

inHeight.addEventListener("input", (event) => {
  fullHeight.textContent = `${((event.target.value / 1440) * 100).toFixed(
    2
  )}vw`;
  deskHeight.textContent = `${((event.target.value / 1024) * 100).toFixed(
    2
  )}vw`;
  mobileHeight.textContent = `${((event.target.value / 390) * 100).toFixed(
    2
  )}vw`;
});

let calcResponsive = (sizeLongPlus, sizeDesktop, sizePortrait) => {
  let portrait = 390;
  let desktop = 1024;
  let long = 1280;
  let longPlus = 1440;

  let sizeLong = (long / longPlus) * sizeLongPlus;

  let finalLong = ((sizeLong / long) * 100).toFixed(3);
  let finalDesktop = ((sizeDesktop / desktop) * 100).toFixed(3);
  let finalPortrait = ((sizePortrait / portrait) * 100).toFixed(3);
  console.log(
    `LONG    ${finalLong}vw    DESKTOP    ${finalDesktop}vw    PORTRAIT    ${finalPortrait}vw`
  );
};
// console.log(`************SIZE************`);
// calcResponsive(315,250,32)
