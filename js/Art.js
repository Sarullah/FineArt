

// <!-- /* ......................................Gallery....................................... */ -->



const places = [
    {
        id: 1,
        name: "Painting (نقاشی)",
        description: "Painting is a visual art, which is characterized by the practice of applying paint\
        pigment, color or other medium to a solid surface called the matrix or support The medium is commonly\
         applied to the base with a brush, but other implements, such as knives, sponges, and airbrushes, can be used.\
         ",
        src : "img/l1.jpg",
    },


    {
        id: 2,
        name: "SCULPTURE (مجسمه سازی)",
        description: " Sculpture is the branch of the visual arts that operates in three dimensions.\
         Sculpture is the three-dimensional art work which is physically presented in the dimensions \
         of height, width and depth. It is one of the plastic arts.\  ",
        src: "img/l2.jpg",
    },


    {
        id: 3,
        name: "MUSIC (موسیقی)",
        description: "In the most general of terms, music is the arrangement of sound to create some combination of form,\
         harmony, melody, rhythm, or otherwise expressive content.[1][2][3] Definitions of music vary depending on culture,\
         though it is an aspect of all human societies and a cultural universal.[5] While scholars agree that music is defined\
          by a few specific elements, there is no consensus on their precise definitions",
        src: "img/l3.jpg",
    },


    {
        id: 4,
        name: "OIL COLOR PAINTING (نقاشی با رنگ و روغن)",
        description: "Color charge, in particle physics, a property of quarks and gluons\
        Color index, in astronomy, a simple numerical expression that determines the color of an object\
        Color temperature, the temperature of a radiating black body corresponding to a given color of light\
        Color vision, the ability of an organism or machine to distinguish objects based on light wavelength",
        src: "img/l4.jpg",
    },



    {
        id: 5,
        name: "ِDECORATION AND DESIGNING (دیزایین و دکوراسیون)",
        description: " A design is a concept of or proposal for an object, a process, or a system.\
         Design refers to something that is or has been intentionally created by a thinking agent,\
          though it is sometimes used to refer to the nature of something - its design.\
           The verb to design expresses the process of developing a design. In some cases, ",
        src: "img/l5.jpg",
    }


]


const imgs = document.querySelectorAll(".all-imgs img");
const currentImage = document.querySelector(".current-img");
const titleImage = document.querySelector(".image-title");
const descImage = document.querySelector(".image-desc");


imgs.forEach((image, index) => {
    image.src = places[index].src;


    image.addEventListener("click", function () {
        currentImage.src = places[index].src;
        titleImage.innerHTML = places[index].name;
        descImage.innerHTML = places[index].description;

        currentImage.classList.add("animate-imgs");

        setTimeout(function () {
            currentImage.classList.remove("animate-imgs")
        }, 400)

    })

})


currentImage.src = places[0].src;
titleImage.innerHTML = places[0].name;
descImage.innerHTML = places[0].description;










// <!-- /* ......................................FORM....................................... */ -->







function addData() {

    let title = document.getElementById('titleInput').value;
    let paragraph = document.getElementById('paragraphInput').value;
    let skill = document.getElementById('skillInput').value;
    let personalInput = document.getElementById('personalInput').value;
    let checkbox = document.getElementById('exampleCheckbox').value;
    let experience = document.getElementById('experienceInput').value;
    // let  = document.getElementById('imageInput').value;

    let dataObject = {
        title : title,
        paragraph : paragraph,
        skill : skill,
        peronal : personalInput,
        checkbox : checkbox,
        experience : experience, 
    }

    displayData(dataObject);
}


function displayData(dataObject) {

    let table = document.getElementById('dataTable');

    let newRow = table.insertRow ();
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    // let cell7 = newRow.insertCell(6);


    cell1.textContent = dataObject.title;
    cell2.textContent = dataObject.paragraph;
    cell3.textContent = dataObject.skills;
    cell4.textContent = dataObject.personal;
    cell5.textContent = dataObject.checkbox;
    cell6.textContent = dataObject.experience;

}