'use stric';

function radomSalary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let newArr=[];
function User(name, age){
    this.name=name;
    this.age=age;
    this.salary=radomSalary(450,2000);
    newArr.push(this);
}  

function storeUser(){
    let stringUser= JSON.stringify(newArr);
    localStorage.setItem('newArr',stringUser);

}

let myTable= document.getElementById('myTable');
let table= document.createElement('table');
myTable.appendChild(table);

function headerRow(){
    let trHeader= document.createElement('tr');
    table.appendChild(trHeader);
    let headerArr=['Name', 'Age', 'Salary'];
    for (let i=0; i<headerArr.length;i++){

      let thHeader= document.createElement('th');
      trHeader.appendChild(thHeader);
     thHeader.textContent=headerArr[i];

         }

     }

  User.prototype.renderTable= function(){
      let trTable= document.createElement('tr');
      table.appendChild(trTable);
      let tdName=document.createElement('td');
      trTable.appendChild(tdName);
      tdName.textContent=this.name;
      let tdAge=document.createElement('td');
      trTable.appendChild(tdAge);
      tdAge.textContent=this.age;
      let tdSalary=document.createElement('td');
      trTable.appendChild(tdSalary);
      tdSalary.textContent=this.salary;

  }

  

  let form= document.getElementById('form');
  form.addEventListener('submit',submitter);

  function submitter(event){

    event.preventDefault();

    let name=event.target.name.value;
    let age=event.target.age.value;

    let newUserObject= new User(name,age);

    newUserObject.renderTable();
    storeUser();

  }

  function getUser(){
      let data=localStorage.getItem('newArr');
      let dataParse= JSON.parse(data);

      if(dataParse){
        headerRow();

        for( let i=0; i<dataParse.length; i++){

            new User(dataParse[i].name, dataParse[i].age);


        }


      }
  }
  getUser();

  for(let i=0; i<newArr.length; i++){
      newArr[i].renderTable();
  }