//  Выбор того или иного элемента должен влиять на результирующую цену
// (*подсказка - суммы опций и вариантов комплектации можно хранить в value соответствующих
// input-ов и option-ов, а потом просуммировать их в цикле*)

document.getElementById('firms').onchange = function() {
    const value = document.getElementById('firms').value
            
    const fuel = [[0, 'бензин'], [-1000, `дизель`], [5000, `электро`]]
    const fuelshort = [[0, 'бензин'], [-1000, `дизель`]]
    const volumes = [[0, 1.0], [1000, 1.2], [2000, 1.8], [3000, 2.0]]
    
    let values=[] // создаем массив, в который будем записывать опции
    document.getElementById('container').innerHTML=''
    //document.getElementById('container').innerHTML=values=[] - одно и то же?
      
    if(value==70000){
      select.disabled=true
      return
    }
        else if(value==30000){
          values = [...fuel]
        }
        else if(value==2000){
          values = [...fuelshort]//а как вывести тот же массив но без некоторых опшнс?
          // values = [...fuel[!2]]?
        }
      }

const select = document.createElement("select");
select.name = volumes;
select.id = volumes;

for (const val of values)
{
  const option = document.createElement("option");
  option.value = val;
  select.appendChild(option);
}


 document.getElementById("container").appendChild(select);