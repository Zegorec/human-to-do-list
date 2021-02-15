const check = () => console.log('Работает');

// Объявление исходных переменных
const textTarget = document.querySelector('.input-target');
const buttonAddTarget = document.querySelector('.button-addTarget');
const toDoList = document.querySelector('.content-toDoList');
const targets = toDoList.children;
console.log(targets);
// Функция создания элемента
const addTarget = () => {
  if (textTarget.value == '') {
    return (textTarget.placeholder = 'Долбаеб, задачу напиши');
  } else {
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
    createP.textContent = textTarget.value;
    // Функция обозначения сделанной задачи
    const targetCompleted = () => {
      if (createInput.checked) {
        createP.classList.add('targetCompleted');
      } else {
        createP.classList.remove('targetCompleted');
      }
    };
    createInput.addEventListener('change', targetCompleted);
    textTarget.value = '';
    createLabel.appendChild(createP);
    // Создание кнопки удаления
    const createButton = document.createElement('button');
    createButton.classList.add('button-delteTarget');
    createButton.type = 'button';
    createButton.textContent = 'Удалить';
    createDiv.appendChild(createButton);
    const delteTarget = () => {
      return createButton.parentNode.remove();
    };
    createButton.addEventListener('click', delteTarget);
    // Добавление элемента в список
    textTarget.placeholder = 'Поле ввода';
    return toDoList.appendChild(createDiv);
  }
};

buttonAddTarget.addEventListener('click', addTarget);
