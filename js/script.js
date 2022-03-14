


//SELECT ITEMS FROM DOM
const form=document.querySelector("form"),
tBody=document.querySelector("tbody"),
table=document.querySelector("table"),
lname=document.getElementById("lname"),
fname=document.getElementById("fname"),
email=document.getElementById("email"),
gender=document.getElementById("gender"),
travel=document.getElementById("travel"),
btnSubmit=document.getElementById("submit");
/*
alert=document.getElementById('addAlert');
*/

//LISTEN FOR BUTTON CLICK
form.addEventListener('submit', (e)=>{
    e.preventDefault();

//    unhide table
    table.className = 'showTable';
 
    //Create a table row
    const tr=document.createElement('tr');
    
    //Create Edit and Delet button
    const btnEdit=document.createElement('button');
    const btnDel=document.createElement('button');

          
    //Check if patient came to Nigeria 
    const trav=travel.checked ? 'yes' : 'no';
    
    tr.innerHTML=`
    <td><span class='fname'>${fname.value} <span class='lname'>${lname.value} </td>
    <td>${email.value}</td>
    <td>${gender.value}</td>
    <td>${trav}</td>
    <td><button class='btn-edit'>Edit</button></td>
    <td><button class='btn-danger'>Delete</button></td>
    `;
    e.target.reset;
/*
    fname.value="";
    lname.value="";
    email.value="";
    gender.value="";
    travel.checked=false;*/
    
    const fn=document.getElementById('fname').autofocus;
    
    tBody.append(tr);
    
    
    //format & display alert
    const alert=document.querySelector('#alert');
    alert.style.display="";

    alert.innerHTML="Details added successfuly!";
    alert.style.color='rgb(0, 128, 0)';
    alert.style.borderColor='rgb(0, 128, 0)';
    
    //remove alert
    setTimeout(()=>{
      return alert.className ='hide';
    }, 700);
    alert.classList.remove('hide');
    
    //Set focus back to the form
});


tBody.addEventListener('click', (e)=>{
    
   //Delete
    if(e.target.classList.contains('btn-danger')){
        if(confirm('Deleted record cannot be retrieved, sure to proceed?')){
            e.target.parentElement.parentElement.remove();
            
        //format & display alert
        const alert=document.querySelector('#alert');
        alert.style.display="";

        alert.innerHTML="Details deleted successfuly!";
        alert.style.color='rgb(255, 0, 0)';
        alert.style.borderColor='rgba(244, 7, 7, 0.83)';

        //remove alert
        setTimeout(()=>{
          return alert.className ='hide';
        }, 700);
        alert.classList.remove('hide');
        }
    }
    
    //EDIT & UPDATE
    if(e.target.classList.contains('btn-edit')){
        btnSubmit.textContent = 'Update';
        
        const btnUpdate=document.createElement('button');
        btnUpdate.className='btnupdate';
         fname.value=e.target.parentElement.firstElementChild.textContent;
    }
    
    //Remove Table
    if (tBody.children.length===0){
        table.classList.remove('showTable')
    }
    
});

