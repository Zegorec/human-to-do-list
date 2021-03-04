const check = () => console.log('Работает');
const deleteTarget = (item) => {
  item.parentNode.remove();
};
const targetCompleted = (input, tag) => {
  if (input.checked) {
    tag.classList.add('targetCompleted');
  } else {
    tag.classList.remove('targetCompleted');
  }
};

const createTarget = (text, status) => {
  // Создание div
  const createDiv = document.createElement('div');
  createDiv.classList.add('target');
  // Создание label
  const createLabel = document.createElement('label');
  createDiv.appendChild(createLabel);
  // Создание checkbox
  const createInput = document.createElement('input');
  createInput.classList.add('.checkbox-completed');
  createInput.type = 'checkbox';
  createLabel.appendChild(createInput);
  // Создание p
  const createP = document.createElement('p');
  createP.classList.add('target-textContent');
  createP.textContent = text.value;
  if (status) {
    createInput.checked = status;
    createP.classList.add('targetCompleted');
  }
  createInput.addEventListener('change', () =>
    targetCompleted(createInput, createP)
  );
  text.value = '';
  createLabel.appendChild(createP);
  // Создание кнопки удаления
  const createButton = document.createElement('button');
  createButton.classList.add('button-delteTarget');
  createButton.type = 'button';
  createButton.textContent = 'Удалить';
  createDiv.appendChild(createButton);
  createButton.addEventListener('click', () => deleteTarget(createButton));
  // Добавление элемента в список
  text.placeholder = 'Поле ввода';
  toDoList.appendChild(createDiv);
};

// Объявление исходных переменных
const textTarget = document.querySelector('.input-target');
const buttonAddTarget = document.querySelector('.button-addTarget');
const toDoList = document.querySelector('.content-toDoList');

const addTarget = () => {
  if (textTarget.value == '') {
    return (textTarget.placeholder = 'Долбаеб, задачу напиши');
  } else {
    createTarget(textTarget);
  }
};

buttonAddTarget.addEventListener('click', addTarget);
