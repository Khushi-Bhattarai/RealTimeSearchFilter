const users = [
  {
    name : "Hari Sapkota",
    hobby: "coding with coffee",
    pic: "https://images.pexels.com/photos/35981066/pexels-photo-35981066.jpeg",
  },
  {
    name: "Harish Archarya",
    hobby: "coding with tea",
    pic: "https://images.pexels.com/photos/16129705/pexels-photo-16129705.jpeg",
  },
  {
    name: "Harish Archarya",
    hobby: "coding with coffee",
    pic: "https://images.pexels.com/photos/6803522/pexels-photo-6803522.jpeg",
  },
];

function showUser(arr){
  arr.forEach(function(user){

    const card = document.createElement("div");
    card.classList.add("card");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.hobby;

    const img = document.createElement("img");
    img.src = user.pic;

    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(img);

    card.appendChild(content);

    document.querySelector(".cards").appendChild(card);
  });
}
showUser(users);

const inpSearch = document.querySelector(".inp");
inpSearch.addEventListener("input",function(){
  let newUser = users.filter(function(user){
    return user.name.toLowerCase().startsWith(inpSearch.value.toLowerCase());
  });
  document.querySelector(".cards").innerHTML = "";
  if(newUser.length !== 0){
    showUser(newUser);
  }else{
     document.querySelector(".cards").innerHTML = "<p style='color: white'>No user found</p>";
  }
})