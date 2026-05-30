let students = [];

function addStudent(){

    let name =
        document.getElementById("studentName").value;

    if(name===""){
        alert("Enter Student Name");
        return;
    }

    students.push(name);

    displayStudents();

    document.getElementById(
        "studentName"
    ).value="";
}

function displayStudents(){

    let list =
        document.getElementById("studentList");

    list.innerHTML="";

    students.forEach((student,index)=>{

        let li =
            document.createElement("li");

        li.innerHTML=
            student +
            " <button onclick='markAttendance("
            + index +
            ")'>Present</button>";

        list.appendChild(li);
    });
}

function markAttendance(index){

    alert(
        students[index] +
        " marked Present"
    );
}
