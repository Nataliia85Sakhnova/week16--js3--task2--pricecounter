//  Выбор того или иного элемента должен влиять на результирующую цену
// (*подсказка - суммы опций и вариантов комплектации можно хранить в value соответствующих
// input-ов и option-ов, а потом просуммировать их в цикле*)
const handlechange = () => {
  const value = document.getElementById('firms').value

  const fuel = [
    [0, 'бензин'],
    [-1000, `дизель`],
    [5000, `электро`]
  ]

  let values = []
  document.getElementById('container').innerHTML = ''

  if (value == 70000) {
    values = fuel.filter((option) => option[1] === "электро")
  } else if (value == 30000) {
    values = [...fuel]
  } else if (value == 2000) {
    values = fuel.filter((option) => option[1] !== "электро")
  }
  console.log(values);

  const select = document.createElement("select");
  select.name = 'fuel';
  select.id = 'fuel';

  if (values.length === 1) {
    select.disabled = true
  }

  for (const val of values) {
    const option = document.createElement("option");
    option.value = val[0];
    option.text = val[1];
    select.appendChild(option);

  }

  document.getElementById("container").appendChild(select);
}

const counting = () => {

const firmPrice = document.getElementById('firms').value;
console.log(firmPrice);

const fuelPrice = document.getElementById('fuel').value;
console.log(fuelPrice);;

const typePrice = document.querySelector('input[name=type]:checked').value //'20'
console.log(typePrice);

const fireAss = document.getElementById("fireAss");
const fireAssPrice = fireAss.checked ? fireAss.value : 0;
console.log(fireAssPrice);

document.getElementById('container1').innerText = `Цена: ${Number(firmPrice) + Number(fuelPrice) + Number(typePrice) + Number(fireAssPrice)}€.`
}

document.getElementById('button').onclick = counting;
document.getElementById('firms').onchange = handlechange;
document.addEventListener("DOMContentLoaded", handlechange);