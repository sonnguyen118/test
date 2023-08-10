document.addEventListener("DOMContentLoaded", function () {
  const inputList = document.querySelector(".input-list");

  // Create four initial input items
  for (let i = 0; i < 4; i++) {
    const inputItem = createInputItem();
    inputList.appendChild(inputItem);
  }

  updateMoveButtons();

  inputList.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("move-button")) {
      const inputItem = target.closest(".input-item");
      const currentIndex = Array.from(inputList.children).indexOf(inputItem);

      if (target.classList.contains("move-up")) {
        if (currentIndex > 0) {
          inputList.insertBefore(
            inputItem,
            inputList.children[currentIndex - 1]
          );
          updateMoveButtons();
        }
      } else if (target.classList.contains("move-down")) {
        if (currentIndex < inputList.children.length - 1) {
          inputList.insertBefore(
            inputItem,
            inputList.children[currentIndex + 2]
          );
          updateMoveButtons();
        }
      }
    } else if (target.classList.contains("delete-button")) {
      const inputItem = target.closest(".input-item");
      inputList.removeChild(inputItem);
      updateMoveButtons();
    } else if (target.classList.contains("edit-button")) {
      // Handle edit button logic
      // Chuyển hướng đến trang HTML "edit.html"
      window.location.href = "./template/edit.html";
    }
  });

  function createInputItem() {
    const inputItem = document.createElement("div");
    inputItem.classList.add("input-item");

    const moveUpButton = document.createElement("button");
    moveUpButton.textContent = "↑";
    moveUpButton.classList.add("move-button", "move-up");
    inputItem.appendChild(moveUpButton);

    const moveDownButton = document.createElement("button");
    moveDownButton.textContent = "↓";
    moveDownButton.classList.add("move-button", "move-down");
    inputItem.appendChild(moveDownButton);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Text";
    inputItem.appendChild(input);

    const editButton = document.createElement("button");
    editButton.textContent = "Sửa";
    editButton.classList.add("edit-button");
    inputItem.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    inputItem.appendChild(deleteButton);

    return inputItem;
  }

  function updateMoveButtons() {
    const inputItems = inputList.querySelectorAll(".input-item");

    inputItems.forEach((item, index) => {
      const moveUpButton = item.querySelector(".move-up");
      const moveDownButton = item.querySelector(".move-down");

      if (index === 0) {
        moveUpButton.style.display = "none";
        moveDownButton.style.display = "block";
      } else {
        moveUpButton.style.display = "block";
        moveDownButton.style.display = "none";
      }
    });
  }

  const slider = document.getElementById("percentageSlider");
  const percentageValue = document.getElementById("percentageValue");

  // Lắng nghe sự kiện thay đổi của input range
  slider.addEventListener("input", function () {
    const value = slider.value;
    percentageValue.textContent = `${value}%`;
  });
});
