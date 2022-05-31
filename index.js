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
  const volume = [
    [0, 1.0],
    [1000, 1.2],
    [2000, 1.3],
    [3000, 2.0]
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
  select.name = 'volumes';
  select.id = 'volumes';

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

const firmPrice = document.getElementById('firms').value;
console.log(document.getElementById('firms').value);
// const fuelPrice = ;
// const typePrice = document.getElementById('type').value;
const hotAssPrice = fireAss.checked ? fireAss.value : 0;


// document.getElementById('container').innerText = `Цена: ${Number(firmPrice) + Number(fuelPrice) + Number(typePrice) + Number(fireAssPrice)}€.`

document.getElementById('firms').onchange = handlechange;
document.addEventListener("DOMContentLoaded", handlechange);