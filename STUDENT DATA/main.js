let studentForm = document.getElementById("studentForm");

let studentId = document.getElementById("studentId");
let studentName = document.getElementById("studentName");

let mathsMarks = document.getElementById("mathsMarks");
let scienceMarks = document.getElementById("scienceMarks");
let englishMarks = document.getElementById("englishMarks");

let addStudentBtn = document.getElementById("addStudentBtn");
let editbtn = document.getElementById("editbtn");
 let deletebtn = document.getElementById("deletebtn");
let studentTableBody = document.getElementById("studentTableBody");

arr = []

function fetchdata()
{
 fetch("http://localhost:3000/studentdata")
.then((res)=>res.json())
.then((data)=>{singledata(data),arr = data})
.catch((err)=>console.log(err))

}
fetchdata();


function singledata(data)
{
    data.map((el)=>studentdata(el.id, el.Name, el.Maths, el.Science, el.English))
}

function studentdata(id,Name,Maths,Science,English)
{
      let store =` <tr>
            <td>${id}</td>
            <td>${Name}</td>
            <td>${Maths}</td>
            <td>${Science}</td>
            <td>${English}</td>
                  <td>
                <button data-id="${id}">
                    <i class="ri-edit-fill editbtn"></i>
                </button>
            </td>

            <td>
                <button data-id="${id}">
                    <i class="ri-delete-bin-5-fill deletebtn"></i>
                </button>
            </td>
        </tr>
    `;

    studentTableBody.innerHTML += store;
}

addStudentBtn.addEventListener('click',()=>{

    let data = {
        id  : studentId.value,
        Name : studentName.value,
        Maths : mathsMarks.value,
        Science : scienceMarks.value,
        English : englishMarks.value 
    }
    
fetch("http://localhost:3000/studentdata",{
    method:'POST',
     headers: {
                    'Content-Type': 'application/json', // Required for JSON
                    'Accept': 'application/json'        // Tells the server you expect JSON back
            },
            body:JSON.stringify(data)
    }).then((res)=>res.json())
      .then((data)=>alert("DATA ADDED SUCCESSFULLY")
      .catch((err)=>console.log(err))
    )
})

document.addEventListener('click',()=>{

    let editeddata ={
        studentId.value = 
        studentName.value =
        mathsMarks.value =
        scienceMarks.value =
        englishMarks.value =
    }
    fetch("http://localhost:3000/studentdata",)
})



