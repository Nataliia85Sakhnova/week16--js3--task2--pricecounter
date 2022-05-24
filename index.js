//  Выбор того или иного элемента должен влиять на результирующую цену
// (*подсказка - суммы опций и вариантов комплектации можно хранить в value соответствующих
// input-ов и option-ов, а потом просуммировать их в цикле*)

document.getElementById('firms').onchange = function() {
    const value = document.getElementById('firms').value
            
    const fuel [[0, 'бензин'], [-1000, `дизель`], [5000, `электро`]]
    const volumes [[0, 1.0], [1000, 1.2], [2000, 1.8], [3000, 2.0]]
    
    let values=[] // создаем массив, в который будем записывать опции
    document.getElementById('container').innerHTML=''
      
    if(value==70000){
      select.disabled=true //прописать следующий селектор (объем движка)
      return
    }
        else if(value==30000){
          values = [[0, 'бензин'], [5000, `электро`]]
        }
        else if(value==2000){
          values = [[0, 'бензин'], [-1000, `дизель`]]
        }
    
    document.getElementById('shop').onchange = () =>{
     const value = document.getElementById('lstFruits').value
      if(value==0){
        document.getElementById('container').innerHTML=''
        return
      }
      else{
        const initialPrice = document.getElementById('type').value; //'3'
        const upscaleWash = document.querySelectorAll('input[name=wash]:checked')[0].value //'20'
        
        const cut = document.getElementById('cut') //
        const upscaleCut = cut.checked? cut.value: 0; //'50'
        
        document.getElementById('container').innerText= `Итого: ${Number(initialPrice) + Number(upscaleWash) + Number(upscaleCut)}р.`
      }
      
    }
    
