

   //задача 1
   /*
   const arr = [1, 2, 3, 4, 5];
   let i = 0;
   while(arr.length){
    i++;
   }

   console.log(i);
*/

   /*
    Коментар до розв'язання задачі 1:
    Не забувай, що перемінну лічильника також треба 
    оголосити. Над циклом мало бути 
  
   
   */

   //задача 2
/*
   const arr = [1, 5, 10, 15, 20, 25];

   for(let  i = arr.length -1; i >= 0; i--){
    const result = arr[i];
    console.log(result);
   }
 */


 //задача 3
 /*
 const obj = {
    name: 'Василь',
    age: 30,
    city: 'Полтава',
    profession: 'Тесляр',
    wife: 'Марічка'
 };

 for(let key in obj){
    
    console.log(key + ': ' + obj[key]);
 }
 
*/
   /*
    Коментар до розв'язання задачі 4:
    Недочитала задачу. Зараз з консолі лізе увесь об'єкт,
    а нам потрібено, щоб інформація виводилася в конкретному форматі
    Наприклад "name : Василь" і т.д
   
   */

 //задача 4
 /*
 const arr = ['football', 'basketball', 'tennis', 'squash', 'baseball'];

 for(let value of arr){

    console.log(value);

 }*/

  //задача 5
/*
  const arr = [
    {
        name: 'Петро',
        age: 21
    },
    {
        name: 'Мыхайло',
        age: 24 
    },
    {
        name: 'Оксана',
        age: 19
    },
    {
        name: 'Степан',
        age: 42 
    },
    {
        name: 'Наталя',
        age: 16
    },
  ];


for (let i = 1; i < arr.length; i++){

    for(let key in arr[i]){
        console.log(key + ': ' + arr[i][key] );
    }
  
}
 
*/

     /*
    Коментар до розв'язання задачі 5:
    Недочитала задачу. Зараз з консолі лізе ну зовсім не те, що потрібно.
    По-перше, в умові написано "за допомогою циклів" - у множині, тобто треба використати різні цикли. Перший - для перебору об'єкта, а другий вже для перебору в самому об'єкті. Тут треба згадати, який тип циклів для чого.
    По-друге, нам потрібено, щоб інформація виводилася в конкретному форматі
    Наприклад "name : Василь" і т.д
   
   */

   //задача 6
/*
   const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
   ];

   let sum= 0;

for (let i = 0; i < arr.length; i++){
    for(let j = 0; j <  arr[i].length; j++){

    sum = sum + arr[i][j];
    }
    
}
console.log(sum);
*/

     /*
    Коментар до розв'язання задачі 6:
        Навіщо після кожної ітерації нам додавати до загальної суми ще й значення лічильника j? 
        Значення лічильників ніколи не додаються до суми результатів, якщо в умовах не написано щодо цього нічого. До того ж сума з лічильником неправильна. Фінальний результат - 120, а не 135, як у тебе)
    */

     //задача 7


     function findNumber(numCheck){
        let rowСoncat = '';
        let sum = 0;
        for(let i = 1; i <= numCheck; i++){
            
            rowСoncat = rowСoncat + ` "+" ${i} ` ;
            sum += i;
        }
        return rowСoncat + sum ;
     }

     let res = findNumber(5);

     console.log(res);

   

     /*
    Коментар до розв'язання задачі 7:
     Не забути порішати :))
    */

     //8
/*
     let arr = [2, 'hello', true, 'string'];
  
     let newArray = [];
     function checkArray(arr){
    
        for(i = 0; i < arr.length; i++ ){
            newArray.push(typeof (arr[i]));
        }
       return newArray;
     }
     checkArray(arr);
     console.log(newArray);
  
     
*/
    //9 
/*
    let arr = [2, 4, 'hello', 6, 'string', 6];
   
    
    function getSum(arr){
        let sum = 0; 
        for(i = 0 ; i < arr.length; i++){
            if(typeof arr[i] !== 'number')
                continue;
          sum = sum + arr[i] ;
        }
        return sum;
    }

    let result = getSum(arr);
    console.log(result);
    */
   // Коментар до розв'язання задачі 9:
    // Не забувай повертати у функції результат. Тут пропустила return sum після циклу. Ну і змінну краще у функції писати, не виносити у глобальну область видимості :))
    

    


    //10
    /*
    
    let arr = [10, 5, 6, 7, 10];
    let num = 6;
    let sum = 0;

    function getSum(arr, num){
        


        for (let i = 0; i < arr.length; i++){
            if(arr[i] === num) break;
            sum = sum + arr[i];
        }
        return sum + num;
    }
  let result = getSum(arr, num);
  console.log(result);*/