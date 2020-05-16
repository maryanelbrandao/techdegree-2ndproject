/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Global variables to store student list and store the number of items to show on each page; 
const studentList = document.getElementsByClassName('student-item cf');
const studentsPage = 10;


//Function ShowPage to hide all the students except for the ten 
const showPage = (list, page) =>{
  const startIndex = (page * studentsPage) - studentsPage;
  const endIndex = (page * studentsPage) -1;
  for(let i = 0; i < list.length; i++){
      if ( i >= startIndex && i <= endIndex){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
  }
}

//Function to create new elemnts
const appendPageLinks = (list) => {
  const pageList = Math.ceil(list.length / studentsPage);
  const pageDiv = document.querySelector('.page');
  const newDiv = document.createElement('div');
  const ul = document.createElement('ul');
  newDiv.className = 'pagination';
  pageDiv.appendChild(newDiv);
  newDiv.appendChild(ul);
  for(let i = 0; i < pageList; i++){
      let li = document.createElement('li');
      let anchor = document.createElement('a');
      anchor.setAttribute('href', '#');
      anchor.textContent = i + 1;
      li.appendChild(anchor);
      ul.appendChild(li);
      if(i === 0){
        anchor.className = 'active';
      }
      anchor.addEventListener('click', (e) => {
      const liActive = document.querySelectorAll('.pagination a');
      for(let j = 0; j < liActive.length; j++){
          liActive[j].classList.remove('active');
      } 
      e.target.className = 'active';
      showPage(studentList, e.target.textContent); 
      e.preventDefault();
      });
  }
} 
/*Call the showPage function passing the arguments, list of students and number 1 
for the first page and call the appendPageLinks function with list of students as argument*/  
showPage(studentList, 1);
appendPageLinks(studentList); 

//Function searchBar creating a search box and the serach button 
const searchBar = () => {
  const pageHeader = document.querySelector('.page-header');
  const searchDiv = document.createElement('div');
  searchDiv.className = 'student-search';
  pageHeader.appendChild(searchDiv);
  const searchInput = document.createElement('input');
  searchInput.setAttribute('placeholder', 'Input student name');
  searchDiv.appendChild(searchInput);
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchDiv.appendChild(searchButton);
}

searchBar();