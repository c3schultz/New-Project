
const homeTab = document.querySelector("#hometab");
const homePage = document.getElementById("home");
homeTab.onclick=function(){
  if (homePage.style.display !== 'none'){
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
    shopPage.style.display ='none';
  } else {
    homePage.style.display = 'block';
    aboutPage.style.display = 'none';
    shopPage.style.display = 'none';
  }
}

const aboutTab = document.querySelector("#abouttab");
const aboutPage = document.getElementById("about");
aboutTab.onclick=function(){
  if (aboutPage.style.display !== 'none'){
    aboutPage.style.display = 'none';
    shopPage.style.display = 'none';
    homePage.style.display = 'none';
  } else {
    aboutPage.style.display = 'block';
    shopPage.style.display = 'none';
    homePage.style.display = 'none';
  }
}

const shopTab = document.querySelector("#shoptab");
const shopPage = document.getElementById("shop");
shopTab.onclick=function(){
  if (shopPage.style.display !== 'none'){
    shopPage.style.display = 'none';
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
  } else {
    shopPage.style.display = 'block';
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
  }
}

const p1 = document.querySelector("#p1");
p1.onclick=function(){
  if (homePage.style.display !== 'none'){
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
    shopPage.style.display ='none';
  } else {
    homePage.style.display = 'block';
    aboutPage.style.display = 'none';
    shopPage.style.display = 'none';
  }
}

const p2 = document.querySelector("#p2");
p2.onclick=function(){
  if (aboutPage.style.display !== 'none'){
    aboutPage.style.display = 'none';
    shopPage.style.display = 'none';
    homePage.style.display = 'none';
  } else {
    aboutPage.style.display = 'block';
    shopPage.style.display = 'none';
    homePage.style.display = 'none';
  }
}

const p3 = document.querySelector("#p3");
p3.onclick=function(){
  if (shopPage.style.display !== 'none'){
    shopPage.style.display = 'none';
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
  } else {
    shopPage.style.display = 'block';
    homePage.style.display = 'none';
    aboutPage.style.display = 'none';
  }
}

function play(){
  document.getElementById('mySong').play();
}

const loginBtn = document.querySelector('#login');
const loginForm = document.querySelector('#loginPage');
console.log(loginBtn);
console.log(loginForm);
loginBtn.onclick=function(){
  if (loginForm.style.display !== 'none'){
    loginForm.style.display = 'none';
  } else {
    loginForm.style.display = 'block';
  }
}

