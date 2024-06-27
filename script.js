const addBtn = document.getElementById("add-btn");
const input = document.querySelector(".input-field");
const output = document.querySelector(".output");

addBtn.addEventListener("click", () => {
  const list = document.createElement("li");
  list.classList.add("list");
  // console.log(input.value);
  list.textContent = input.value;

  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.classList.add("span");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");

  list.appendChild(editBtn);
  list.appendChild(span);
  output.appendChild(list);

  list.addEventListener('click', (e) => {
    e.target.classList.toggle('checked');
  })

  span.addEventListener("click", () => {
    output.removeChild(list);
  });

  editBtn.addEventListener("click", () => {
    const newTodo = prompt("Enter New todo");
    // console.log(newTodo);
    list.textContent = newTodo;

    list.appendChild(editBtn);
    list.appendChild(span);


  });

  // completedBtn.addEventListener("click", () => {
  //   list.style.textDecoration = "line-through";
  //   list.removeChild(editBtn);
  //   list.removeChild(completedBtn);
  // });

  input.value = "";
});
