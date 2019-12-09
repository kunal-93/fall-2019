/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const allCourses = [
  { // 0
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: null
  },{  // 1
    name: `Applied Web Development`,
    code: `WDDM-113`,
    instructor: `Rocco Panacci`,
    start: { term: `Winter`, year: 2020 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: `development`
  },{ // 2
    name: `Applied Web Design`,
    code: `WDDM-114`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: false,
    duration: 160,
    category: `design`
  },{ // 3
    name: `Design Technique`,
    code: `WDDM-116`,
    instructor: `Milorad Eftoski`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: `development`
  },{ // 4
    name: `Prototyping`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: `design`
  }
];


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data

const getDurationFromMinutes = (minutes) => {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}


// 1. Write a function that:
//    - receives a course:Object as a parameter
//    - returns true when the course starts 'Fall 2019'
//    - returns false in all other cases
const checkStartTerm = (course) => {

  if (course.start.term == 'Winter' && course.start.year == 2020) {
    return true;
  }

  return false;
}
  

const toggleCourseView = () => {

  //document.getElementById('courses').className = `courses grid-view`;
  document.getElementById('courses').classList.toggle('grid-view')
}



// Function:
// Parameters: course:Object
// Return: String of HTML (<article>)
const getCourseAsHtmlString = (course) => {

  return `
    <article class="course ${(course.category) ? `cat-${course.category}` : ''}">
      <h3 id="name" class="course-name">${course.name}</h3>
      <ul>
        <li>Course Code: <strong>${course.code}</strong></li>
        <li>Instructor: <strong>${course.instructor}</strong></li>
        <li>Start: <strong>${course.start.term} ${course.start.year}</strong></li>
        <li>
          Weeks: <strong>${course.weeks}</strong>
          <ul>
            <li>Includes Break: <strong>${(course.breaks) ? 'Yes' : 'No'}</strong></li>
          </ul>
        </li>
        <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
      </ul>
    </article>`;
}

// renderCoursesToDocument
// Parameters: arr:Array to print
// Returns: none
const renderCoursesToDocument = (arr) => {
  document.getElementById('courses').innerHTML = arr.map(getCourseAsHtmlString).join('\n');

  let res = `results`
  if (arr.length == 1) {
    res = `result`
  }
  document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
}




/************* EXECUTABLE *************/


// Filter by term
// const justFall2019 = allCourses.filter(checkStartTerm);
// console.table(justFall2019);

// Store reference to Element
const fall2019 = document.getElementById('fall2019');
const layout = document.getElementById('layout');
const coursename = document.getElementById('coursename');


coursename.addEventListener('input', event => {
  const whatsInTheField = coursename.value;

  // Filter by name!
  const searchedByName = allCourses.filter(c => c.name.toUpperCase().includes(whatsInTheField.toUpperCase()))
  renderCoursesToDocument(searchedByName);

})

// Add listener
fall2019.addEventListener('click', (event) => {

  // Tell me more about the Event that occured...
  console.log(event);

  const justFall2019 = allCourses.filter(checkStartTerm);
  renderCoursesToDocument(justFall2019);
  
});


layout.addEventListener('click', toggleCourseView)

// on window load:
renderCoursesToDocument(allCourses);
