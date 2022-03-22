const form = document.querySelector('.form');
const input = document.querySelector('.input');
const tableBox = document.querySelector('.table-box');
const theme = document.querySelector('.theme');
const icon = document.querySelector('.theme-icon');
const errorDiv = document.querySelector('.error-div');

theme.addEventListener('click', () =>{
    if (document.body.classList.contains('light')) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        document.querySelector('.sun').style.display = 'block';
        document.querySelector('.moon').style.display = 'none';
        input.style.color = '#b4aeae';
        document.querySelector('.button').style.color = '#b4aeae';
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        document.querySelector('.sun').style.display = 'none';
        document.querySelector('.moon').style.display = 'block';
        input.style.color = '#4b4444';
        document.querySelector('.button').style.color = '#4b4444';
        tableBox.style.background = '#37373724';
    }
})


form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value == '') {
    showError("Please Enter A Number!", "red", "block");
    setTimeout(() => {
      showError("Please Enter A Number!", "red", "none");
    }, 2000);
  } else {
    tableOf(input.value);
  }
});

const tableOf = (n) => {
  let output = `<h1 class='heading'>Table of ${n}</h1>`;
  if (n) {
    for (let i = 1; i <= 10; i++) {
      output += `
        <h2 clas='table-item'>${n} \xa0\xa0\xa0x\xa0\xa0\xa0 ${i} \xa0\xa0\xa0=\xa0\xa0\xa0 ${n * i} </h2>
        `;
    }
  }
  tableBox.style.display = 'flex';
  tableBox.innerHTML = output;
  input.value = '';
};

function showError(message, color, displayProperty) {
  errorDiv.innerText = message;
  errorDiv.style.background = color;
  errorDiv.style.display = displayProperty;
}