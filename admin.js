const password = "memotix123";

document
.getElementById("loginBtn")
.addEventListener("click", () => {

  const value =
    document.getElementById(
      "adminPassword"
    ).value;

  if(value === password){

    document
    .getElementById("loginPage")
    .style.display = "none";

    document
    .getElementById("adminPanel")
    .style.display = "flex";

  }else{

    alert("Wrong Password");

  }

});


// TAB SYSTEM
document
.querySelectorAll(".sidebar button")
.forEach(btn => {

  btn.addEventListener("click", () => {

    document
    .querySelectorAll(".admin-tab")
    .forEach(tab => {

      tab.classList.remove("active");

    });

    document
    .getElementById(
      btn.dataset.tab
    )
    .classList.add("active");

  });

});
