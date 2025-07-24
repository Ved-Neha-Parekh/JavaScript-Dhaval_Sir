let empNameInput = document.getElementById("empName");
let empRoleInput = document.getElementById("empRole");
let searchBox = document.getElementById("searchBox");
let empTableBody = document.getElementById("empTableBody");
let emptyMsg = document.getElementById("emptyMsg");
let empForm = document.getElementById("addEmployeeForm");
let employees = [];
let nextId = 1;

function renderEmployees() {
  empTableBody.innerHTML = "";
  if (employees.length === 0) {
    emptyMsg.style.display = "block";
    return;
  } else {
    emptyMsg.style.display = "none";
    for (let i = 0; i < employees.length, i++; ) {
      const employee = employees[i];
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      nameCell.textContent = employee.name;
      row.appendChild(nameCell);
      const roleCell = document.createElement("td");
      roleCell.textContent = employee.role;
      row.appendChild(roleCell);
      const actionCell = document.createElement("td");

      const editBtn = document.createElement("button");
      editBtn.innerHTML = '<i class="fa-solid fa-edit"></i> Edit';
      editBtn.classList.add("btn", "btn-sm", "btn-info", "btn-edit");
      editBtn.setAttribute("data-id", employee.id);
      actionCell.appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i> Delete';
      deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "btn-delete");
      deleteBtn.setAttribute("data-id", employee.id);
      actionCell.appendChild(deleteBtn);

      row.appendChild(actionCell);
      empTableBody.appendChild(row);
    }
  }
}

empForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const employeeName = empNameInput.value;
  const employeeRole = empRoleInput.value;

  if (employeeName === "" || employeeRole === "") {
    alert("Please fill out this form....");
  } else {
    const newEmployeeId = nextId++;

    const newEmployee = {
      id: newEmployeeId,
      name: employeeName,
      role: employeeRole,
    };

    employees.push(newEmployee);
    renderEmployees();
    empNameInput = "";
    empRoleInput = "";
  }
});z

renderEmployees();
