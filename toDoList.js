let updateToDoArr = JSON.parse(localStorage.getItem('toDo'));
const lS = () => {
  updateToDoArr.forEach((elem) => {
    createTarget(elem.content, elem.completed);
  });
};

// Сохранение данных в массив
const updateToDo = () => {
  const toDoArr = [...document.querySelectorAll('.target-textContent')];
  const newToDoArr = toDoArr.map((elem) => {
    const forLocalStorage = {};
    forLocalStorage.content = elem.textContent;
    if (elem.classList.contains('targetCompleted')) {
      forLocalStorage.completed = true;
    } else {
      forLocalStorage.completed = false;
    }
    return forLocalStorage;
  });
  updateToDoArr = newToDoArr;
};

const saveLocalStorage = () => {
  updateToDo();
  localStorage.setItem('toDo', JSON.stringify(updateToDoArr));
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
const selectFilter = document.querySelector('.filter-toDo');
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
document.addEventListener('DOMContentLoaded', lS());
selectFilter.addEventListener('change', (event) => {
  const toDoArr = [...document.querySelectorAll('.target-textContent')];
  if (event.currentTarget.value === 'Все') {
    toDoArr.forEach((elem) => {
      elem.parentNode.parentNode.classList.remove('hiddenDiv');
    });
  } else if (event.currentTarget.value === 'Выполненные') {
    toDoArr.forEach((elem) => {
      elem.parentNode.parentNode.classList.remove('hiddenDiv');
      if (!elem.classList.contains('targetCompleted')) {
        elem.parentNode.parentNode.classList.add('hiddenDiv');
      }
    });
  } else if (event.currentTarget.value === 'Текущие') {
    toDoArr.forEach((elem) => {
      elem.parentNode.parentNode.classList.remove('hiddenDiv');
      if (elem.classList.contains('targetCompleted')) {
        elem.parentNode.parentNode.classList.add('hiddenDiv');
      }
    });
  }
});
