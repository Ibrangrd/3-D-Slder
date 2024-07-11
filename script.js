let design = document.getElementById("back");
let col = document.getElementById("name")
let current_design = document.getElementsByClassName("box")[0];
 
design.addEventListener("change" , () => {
  if(design.value === "1"){
   current_design.style.backgroundImage = "url('3d1.jpg')";
  }
  else if (design.value === "2"){
    current_design.style.backgroundImage = "url('3d2.jpg')";
  }
  else if (design.value === "3"){
    current_design.style.backgroundImage = "url('3d3.jpg')";
    col.style.color = "red";
  }
  else if (design.value === "4"){
    current_design.style.backgroundImage = "url('3d4.jpg')";
  }
  else if (design.value === "5"){
    current_design.style.backgroundImage = "url('3d5.jpg')";
  }
  else if (design.value === "6"){
    current_design.style.backgroundImage = "url('3d6.jpg')";
  }
  else if (design.value === "7"){
    current_design.style.backgroundImage = "url('3d7.jpg')";
  }
  else
  {
    current_design.style.backgroundImage = "url('3d8.jpg')";
  }
})
