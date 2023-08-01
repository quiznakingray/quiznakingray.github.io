//select first button (what is it?)
const page1btn = document.querySelector("#page1btn");

// select second button (Types of Tectonic Plates)
const page2btn = document.querySelector("#page2btn");

// select second button (Issues caused by tectonic plates)
const page3btn = document.querySelector("#page3btn");


//selecting all pages 
var allpages = document.querySelectorAll(".page");


//console.log(allpages);
function hideAllPages() {
    for (let onepage of allpages) {
        onepage.classList.add("closed");
        onepage.classList.remove("open");
    }

}


//to show selected page
function changePage(pageno) {
    let pageToShow = document.querySelector("#page" + pageno);
    hideAllPages();
    //resetAllBtns();
    pageToShow.classList.remove("closed");
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


