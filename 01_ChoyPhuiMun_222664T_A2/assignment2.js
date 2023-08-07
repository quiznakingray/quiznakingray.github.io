//select first button (what is it?)
const page1btn = document.querySelector("#page1btn");

// select second button (Types of Tectonic Plates)
const page2btn = document.querySelector("#page2btn");

// select third button (Issues caused by tectonic plates)
const page3btn = document.querySelector("#page3btn");


//selecting all pages 
var allpages = document.querySelectorAll(".page");


//console.log(allpages);
function hideAllPages() {
    for (let onepage of allpages) {
        onepage.classList.add("closed-pages");
        onepage.classList.remove("open");
    }

}


//to show selected page
function changePage(pageno) {
    let pageToShow = document.querySelector("#page" + pageno);
    hideAllPages();
    //resetAllBtns();
    pageToShow.classList.remove("closed-pages");
    pageToShow.classList.add("open");
    console.log(pageToShow.innerHTML);
}


page1btn.addEventListener("click", function () {

    changePage(1);
    
});
page2btn.addEventListener("click", function () {

    changePage(2);
});

page3btn.addEventListener("click", function () {

    changePage(3);
});



const menuIcon = document.querySelector("#menuIcon");
const menuItems = document.querySelector(".menuItems");
function toggleMenuItems() {
    if (menuItems.classList.contains("opened")) {
        menuItems.classList.remove("opened");
        menuItems.classList.add("closed");
    }
    else {
        menuItems.classList.add("opened");
        menuItems.classList.remove("closed");
    }
}
menuIcon.addEventListener("click", toggleMenuItems);

// earthlayer start
var earthLayerPage0 = document.querySelector("#earthLayerPages0");

// crust text
var earthLayerPage1 = document.querySelector("#earthLayerPages1");
// mantle text
var earthLayerPage2 = document.querySelector("#earthLayerPages2");
// outer core text
var earthLayerPage3 = document.querySelector("#earthLayerPages3");

var earthLayerPage4 = document.querySelector("#earthLayerPages4");

var allEarthpages = document.querySelectorAll(".EarthLayerPage");

var nextEarthLayerBtn = document.querySelector("#nextEarthLayerPage");

var earthLayerImg1 = document.querySelector("#earthLayerImg1");

var earthLayerImg2 = document.querySelector("#earthLayerImg2");

var earthLayerImg3 = document.querySelector("#earthLayerImg3");

var earthLayerImg4 = document.querySelector("#earthLayerImg4");

var allEarthLayerImg = document.querySelectorAll(".earthImg");




function hideEarthLayerPages() {
    for (let oneEarthpage of allEarthpages) {
        oneEarthpage.classList.add("closed-EarthLayer");
    }
}

function hideEarthLayerImg() {
    for (let oneEarthImg of allEarthLayerImg) {
        oneEarthImg.classList.add("eImg-NotShown");
    }
}
function showEarthLayerImg() {
    for (let oneEarthImg of allEarthLayerImg) {
        oneEarthImg.classList.remove("eImg-NotShown");
    }
}


//to show selected page
var earthLayerNo = 0;
function changeEarthLayerPageImg() {
    if (earthLayerNo === 4) {
        earthLayerNo = 0;
        showEarthLayerImg();
        nextEarthLayerBtn.innerHTML = "NEXT";
    }
    else {
        earthLayerNo++;
        let imgtoShow = document.querySelector("#earthLayerImg" + earthLayerNo);
        hideEarthLayerImg();
        imgtoShow.classList.remove("eImg-NotShown");
        if (earthLayerNo === 4) {
            nextEarthLayerBtn.innerHTML = "GO BACK";
        }
    }
   
    let pageToShow = document.querySelector("#earthLayerPages" + earthLayerNo);
    hideEarthLayerPages();
    pageToShow.classList.remove("closed-EarthLayer");

    console.log(pageToShow.innerHTML);
}

nextEarthLayerBtn.addEventListener("click", changeEarthLayerPageImg);

var divergentBtn = document.querySelector("#divergent");

var convergentBtn = document.querySelector("#convergent");

var transformBtn = document.querySelector("#transform");

var plateRightImg = document.querySelector("#plateRightImg");

var plateLeftImg = document.querySelector("#plateLeftImg");

var resetBtn = document.querySelector("#reset");

var boundariesInfo1 = document.querySelector("#boundaries-info1");

var boundariesInfo2 = document.querySelector("#boundaries-info2");

var boundariesInfo3 = document.querySelector("#boundaries-info3");

var allBoundariesInfo = document.querySelectorAll(".boundariesInfo");

function hideBtns() {
    divergentBtn.style.display = "none";
    convergentBtn.style.display = "none";
    transformBtn.style.display = "none";
}

function showBtns() {
    divergentBtn.style.display = "inline-block";
    convergentBtn.style.display = "inline-block";
    transformBtn.style.display = "inline-block";
}

function hideAllInfo()
{
    for (let oneBoundariesInfo of allBoundariesInfo) {
        oneBoundariesInfo.classList.add("closed-BoundariesText");
    }
}

function moveDivergent() {
    plateRightImg.classList.add("divergentRight");
    plateLeftImg.classList.add("divergentLeft");
    hideBtns();
    hideAllInfo();
    boundariesInfo1.classList.remove("closed-BoundariesText");
}

function moveConvergent() {
    plateRightImg.classList.add("convergentRight");
    plateLeftImg.classList.add("convergentLeft");
    hideBtns();
    hideAllInfo();
    boundariesInfo2.classList.remove("closed-BoundariesText");
}

function moveTransform() {
    plateRightImg.classList.add("transformRight");
    plateLeftImg.classList.add("transformLeft");
    hideBtns();
    hideAllInfo();
    boundariesInfo3.classList.remove("closed-BoundariesText");

}

function showInfoNReset() {
    resetBtn.style.display = "inline-block";
    
}

function reset() {
    plateRightImg.classList.remove("divergentRight");
    plateLeftImg.classList.remove("divergentLeft");
    plateRightImg.classList.remove("convergentRight");
    plateLeftImg.classList.remove("convergentLeft");
    plateRightImg.classList.remove("transformRight");
    plateLeftImg.classList.remove("transformLeft");
    showBtns();
    resetBtn.style.display = "none";
}



divergentBtn.addEventListener("click", moveDivergent);

convergentBtn.addEventListener("click", moveConvergent);

transformBtn.addEventListener("click", moveTransform);

plateRightImg.addEventListener("animationiteration", showInfoNReset);

resetBtn.addEventListener("click", reset);

console.log(plateRightImg.offsetTop);
