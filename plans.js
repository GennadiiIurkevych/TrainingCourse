const images = {  
    "chests1": {
      "name": 'bench press'},
    "chests2": {
      "name": 'cable crossover'},     
    "chests3": {
      "name": 'machine fly'},
    "delts1": {
      "name": 'front delt'},
    "delts2": {
      "name": 'midlle delt'},
    "delts3": {
      "name": 'rear delt'}, 
    "abdominal1": {
      "name": 'upper ab'},
    "abdominal2": {
      "name": 'lower ab'},
  };

const Chests = {
   "chests1": {
      "name": 'bench press'},
    "chests2": {
      "name": 'cable crossover'},     
    "chests3": {
      "name": 'machine fly'},
};

const Delts = {
  "delts1": {
      "name": 'front delt'},
    "delts2": {
      "name": 'midlle delt'},
    "delts3": {
      "name": 'rear delt'}, 
};

const Abdominals = {
  "abdominal1": {
    "name": 'upper ab'},
  "abdominal2": {
    "name": 'lower ab'},
};





const tooltip = document.     querySelector(".tooltip");
const bodymuscles = document.querySelectorAll(".bodyMuscle"); 
const popupBg = document.querySelector(".info_bg");
const chooseImg = document.querySelector(".info_photo");
const popup = document.querySelector(".info");
const imageOut = document.querySelector(".image-out");
const muscleName = document.querySelector(".muscle-name");
// const tableExersice = document.querySelector(".tdExercises");

// console.log(tableExersice);

bodymuscles.forEach(bodyMuscle => {

  bodyMuscle.addEventListener("click", function() {
    popup.querySelector(".info_photo").setAttribute("src", this.dataset.photo);
    popup.querySelector(".info_title").innerText = this.dataset.title;
    popup.querySelector(".info_text").innerText = this.dataset.description;
    popupBg.classList.add("active");
  })

  bodyMuscle.addEventListener("mousemove", function(e) {
    tooltip.innerText = this.dataset.title;
    tooltip.style.top = (e.y + 20) + "px";
    tooltip.style.left = (e.x + 20) + "px";
  })
   bodyMuscle.addEventListener("mouseenter", function() {
     tooltip.style.display = "block";
  })
  bodyMuscle.addEventListener("mouseleave", function() {
     tooltip.style.display = "none";
  }) 
});

document.addEventListener("click", (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove("active");
    }
})


const trCreate = document.querySelector('#table');

function createTbody(parent, cols, rows) {
  const tbody = document.createElement('tbody'); 
    for(let i = 0; i < rows; i++) {
      let tr = document.createElement('tr');
          tr.classList.add('tr' + i);


      for(let j = 0; j < cols; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        if(j === 0 && i === 0) {
          td.classList.add('tdDate');
          td.rowSpan = rows.length;
        }
        if(j === 1) {
          td.classList.add('tdExercises');  
        }
        if(j === 2) {
          td.classList.add('tdLoads');  
        }
        if(j === 3) {
          td.classList.add('tdReps');  
        }
        if(j === 4) {
          td.classList.add('tdAttempts');  
        }
        if(j === 5) {
          td.classList.add('tdFilling');  
        }
        if(j === 6) {
          td.classList.add('tdDelete');
          td.textContent = ('remove');  
        }
      }
      tbody.appendChild(tr);
    }
    parent.appendChild(tbody);
}

// console.log(trCreate);


let countrow = 0;


imageOut.onclick = function() {

  countrow++;
    
  createTbody(trCreate, 7, countrow);

  console.log(countrow);

  const rowTable = document.getElementById('table');

  let rowTableIndex;

  for(let i = 1; i < rowTable.rows.length; i++) {

    rowTable.rows[i].cells[6].onclick = function() {

     let question = confirm('Do you realy to want to delete this row?');
     if(question === true) {
      rowTableIndex = this.parentElement.rowIndex;
      rowTable.deleteRow(rowTableIndex);
      countrow--;
     }
    };
    
  }
  
}

imageOut.addEventListener('click', showInfo);

function showInfo(event) {

  const key = event.target.dataset['key'];
 

  if(key === undefined) {
    return true;
  }
  muscleName.textContent = images[key]['name'];

  

  document.querySelectorAll('.image-out img').forEach(item => item.classList.remove('active'));

   event.target.classList.add('active');

// chooseExercises.textContent = images[key]['name'];
 
}

const chooseExercises = document.querySelector(".tdExercises");




for(let nameImg in images) {
  let img = document.createElement('img');
  img.setAttribute('data-key', nameImg);
  img.src = 'images/' + nameImg + '.png';
  imageOut.append(img); 
}




const imgExercise = document.querySelectorAll('.image-out img');


// console.log(imgExercise);








