const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question one

/* 

  Let code object this start different then a array 
  This start using braces and then not a Brackets 
  and variabl is only name of the variable then colon.
  the break comma 

*/

// object called cat
const cat = {
  //variable saving string
  complain: "Meow!",
  //the function call complains
  comsplains() {
    /* this will log complain and im using this becouse of this will tell the function in this object look for complain */
    console.log(this.complain);
  },
};
// calling the function.
cat.comsplains();

// Question Two

// Need to make variable and use querySelector.
const heading = document.querySelector("h3");

// class list add is for add a class for
heading.classList.add("heading");

// Question Tree

// Let make a variable and getting the heading,

// using const becouse am not goint to edit, after make new variable for testing at classlist, but cold use heading
const headingSize = document.querySelector(".heading");

headingSize.style.fontSize = "2em";

// Question Four

heading.classList.add("subheading");

// Question five

// in this im using querySelectorAll this is for getting alle element instede of only first.
const paragraphs = document.querySelectorAll("p");

// am using a for loop
for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question Six

const resultsContainer = document.querySelector(".results");

resultsContainer.style.backgroundColor = "yellow";

resultsContainer.innerHTML += `<p> New paragraph</p>`;

// Question Seven

function x(list) {
  for (b = 0; b < list.length; b++) {
    console.log(list[b]);
  }
}

// Question Eith

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  for (d = 0; d < cats.length; d++) {
    if (cats[d].age == null) {
      cats[d].age = "age unknown";
    }
    if (cats[d].age !== null) {
      catContainer.innerHTML += `
      
        <h5> ${cats[d].name} </h5>
        <p> ${cats[d].age} </p>
      `;
    }
  }
}

createCats(cats);
