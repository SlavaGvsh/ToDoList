const button = document.querySelector(".todo__btn");
const input = document.querySelector(".todo__input");
const list = document.querySelector(".todo__list");
const errorDiv = document.querySelector(".todo__error");
// console.log(button);
// console.log(input);
// console.log(list);
const addItem = () => {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    errorDiv.style.display = "block";
    return;
  }

  errorDiv.style.display = "none";

  //   console.log(input.value);
  const li = document.createElement("li");
  li.className = "todo__item";

  const blockWrapper = document.createElement("div");
  blockWrapper.className = "todo__block-wrapper";

  const inputTypeCheckbox = document.createElement("input");
  inputTypeCheckbox.type = "checkbox";

  const deleteBtn = document.createElement("button");
  li.innerText = input.value;
  deleteBtn.innerText = "Delete";
  list.appendChild(li);
  li.appendChild(blockWrapper);
  blockWrapper.appendChild(deleteBtn);
  blockWrapper.appendChild(inputTypeCheckbox);
  input.focus();
  input.value = "";

  list.classList.remove("todo__list-hidden-border");
  list.classList.add("todo__list-visible-border");

  inputTypeCheckbox.addEventListener("change", () => {
    if (inputTypeCheckbox.checked) {
      li.classList.add("todo__item--completed");
    } else {
      li.classList.remove("todo__item--completed");
    }
  });
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
    if (list.children.length === 0) {
      list.classList.remove("todo__list-visible-border");
      list.classList.add("todo__list-hidden-border");
    }
  });
};

button.addEventListener("click", addItem);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});
