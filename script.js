const button = document.querySelector(".todo__btn");
const input = document.querySelector(".todo__input");
const list = document.querySelector(".todo__list");
// console.log(button);
// console.log(input);
// console.log(list);
button.addEventListener("click", () => {
  //   console.log(input.value);
  const li = document.createElement("li");
  li.className = "todo__item";
  const deleteBtn = document.createElement("button");
  li.innerText = input.value;
  deleteBtn.innerText = "Delete";
  list.appendChild(li);
  li.appendChild(deleteBtn);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
  
});
