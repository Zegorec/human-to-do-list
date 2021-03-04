let arr = JSON.parse(localStorage.getItem('toDo'));
const lS = () => {
  arr.forEach((elem) => {
    createTarget(elem.content, elem.completed);
  });
};

// Сохранение данных в массив
const updateToDo = () => {
  arr = [];
  let arr1 = document.querySelectorAll('.target-textContent');
  arr1.forEach((elem) => {
    const forLocalStorage = {};
    forLocalStorage.content = elem.textContent;
    if (elem.classList.contains('targetCompleted')) {
      forLocalStorage.completed = true;
    } else {
      forLocalStorage.completed = false;
    }
    arr.push(forLocalStorage);
  });
};

const saveLocalStorage = () => {
  updateToDo();
  localStorage.setItem('toDo', JSON.stringify(arr));
};

const check = () => console.log('Работает');
const deleteTarget = (item) => {
  item.parentNode.remove();
  saveLocalStorage();
};
const targetCompleted = (input, tag) => {
  if (input.checked) {
    tag.classList.add('targetCompleted');
  } else {
    tag.classList.remove('targetCompleted');
  }
  saveLocalStorage();
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
  if (text) {
    createP.textContent = text;
  } else {
    createP.textContent = textTarget.value;
  }
  if (status) {
    createInput.checked = status;
    createP.classList.add('targetCompleted');
  }
  createInput.addEventListener('change', () =>
    targetCompleted(createInput, createP)
  );
  textTarget.value = '';
  createLabel.appendChild(createP);
  // Создание кнопки удаления
  const createButton = document.createElement('button');
  createButton.classList.add('button-delteTarget');
  createButton.type = 'button';
  createButton.textContent = 'Удалить';
  createDiv.appendChild(createButton);
  createButton.addEventListener('click', () => deleteTarget(createButton));
  // Добавление элемента в список
  textTarget.placeholder = 'Поле ввода';
  toDoList.appendChild(createDiv);
  saveLocalStorage();
};

// Объявление исходных переменных
const textTarget = document.querySelector('.input-target');
const buttonAddTarget = document.querySelector('.button-addTarget');
const toDoList = document.querySelector('.content-toDoList');

const addTarget = () => {
  if (textTarget.value == '') {
    return (textTarget.placeholder = 'Долбаеб, задачу напиши');
  } else {
    createTarget();
  }
};

buttonAddTarget.addEventListener('click', addTarget);
console.log(arr);

lS();
