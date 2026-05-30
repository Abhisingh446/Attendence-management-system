
// load data
let students = JSON.parse(localStorage.getItem("students")) || [];

// LOGIN
function login() {

    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "admin123") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("app").classList.remove("hidden");
        render();
    } else {
        alert("Invalid Login");
    }
}

// LOGOUT
function logout() {
    location.reload();
}

// ADD STUDENT
function addStudent() {

    let name = document.getElementById("name").value;

    if (name === "") return;

    students.push({
        name,
        present: 0,
        absent: 0
    });

    save();
    render();
}

// MARK ATTENDANCE
function mark(type) {

    let i = document.getElementById("studentSelect").value;

    if (type === "present") {
        students[i].present++;
    } else {
        students[i].absent++;
    }

    save();
    render();
}

// DELETE STUDENT
function deleteStudent(index) {
    students.splice(index, 1);
    save();
    render();
}

// SAVE LOCAL STORAGE
function save() {
    localStorage.setItem("students", JSON.stringify(students));
}

// PERCENTAGE
function percent(s) {
    let total = s.present + s.absent;
    if (total === 0) return 0;
    return Math.round((s.present / total) * 100);
}

// RENDER UI
function render() {

    let list = document.getElementById("list");
    let select = document.getElementById("studentSelect");
    let report = document.getElementById("report");

    list.innerHTML = "";
    select.innerHTML = "";
    report.innerHTML = "";

    students.forEach((s, i) => {

        list.innerHTML += `
            <li>
                <b>${s.name}</b><br>
                Present: ${s.present} |
                Absent: ${s.absent} |
                ${percent(s)}%

                <br><button onclick="deleteStudent(${i})">Delete</button>
            </li>
        `;

        select.innerHTML += `<option value="${i}">${s.name}</option>`;

        report.innerHTML += `
            <p>${s.name} → ${percent(s)}%</p>
        `;
    });
}

// INIT
render();
