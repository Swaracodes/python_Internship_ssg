// Student data
const student = {
  name: "Sneha Sanjay Gaikwad",
  age: 20,
  course: "Information Technology",
  Blood_Group: "AB+",
  photo: "S.png"
};

// Card
let card = document.createElement("div");
card.style.width = "300px";
card.style.margin = "50px auto";
card.style.border = "2px solid black";
card.style.textAlign = "center";
card.style.padding = "10px";
card.style.borderRadius= "2rem";
card.style.backgroundColor = "lightBlue";
document.body.appendChild(card);

// Title
let title = document.createElement("h2");
title.textContent = "My Self";
title.style.backgroundColor = "blue";
title.style.color = "white";
title.style.margin = "0";
title.style.padding = "10px";
title.style.border = "2px dashed black"
title.style.borderRadius = "2rem";
card.appendChild(title);

// Photo
let img = document.createElement("img");
img.src = student.photo;
img.style.margin = "10px 0";
img.style.height = "200px";
card.appendChild(img);

// Name
let name = document.createElement("h3");
name.textContent = "Name: " + student.name;
card.appendChild(name);

// Age
let age = document.createElement("h3");
age.textContent = "Age: " + student.age;
card.appendChild(age);

// Course
let course = document.createElement("h3");
course.textContent = "Course: " + student.course;
card.appendChild(course);

// ID
let Blood_Group = document.createElement("h3");
Blood_Group.textContent = "Blood Group: " + student.Blood_Group;
card.appendChild(Blood_Group);

// Label
let label = document.createElement("div");
label.textContent = "STUDENT";
label.style.backgroundColor = "blue";
label.style.border = "2px dashed black";
label.style.borderRadius = "2rem";
label.style.color = "white";
label.style.padding = "5px";
card.appendChild(label);
