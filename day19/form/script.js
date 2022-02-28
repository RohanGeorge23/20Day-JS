let dataAll = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addToTable = (ev)=>{
    try{
        let food = [];
        ev.preventDefault();  //to stop the form submitting
        var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        for (var checkbox of markedCheckbox) {

        food.push(checkbox.value)
        }
        
        console.log(food.length)
        let dataX = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            address: document.getElementById('address').value,
            pincode: document.getElementById('pincode').value,
            gender: document.querySelector('input[type="radio"]:checked').value,
            foodx: food,
            state: document.getElementById('state').value,
            country: document.getElementById('pincode').value
        }
        if (dataX.firstName  == "") {  //validation for first name
            alert("First Name must be filled out");
            return false;
        }

        // document.forms[0].reset(); // to clear the form for the next entries
        

        //for display purposes only
        
        // let pre = document.querySelector('#msg pre');
        // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
        if(food.length > 1){  // to check if atleat two food items are selected
            dataAll.push(dataX); 
            console.warn('added' , {dataAll} );
            document.querySelector('form').reset();  // to clear the form for the next entries
            let pre = document.querySelector(".Content")
            pre.innerHTML=`<tr><th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Pincode</th>
                <th>Gender</th>
                <th>Food</th>
                <th>State</th>
                <th>Country</th>
                </tr>`;
            for(let i=0;i<dataAll.length;i++){
                pre.innerHTML += `<tr>
                <td>${dataAll[i].firstName}</th>
                <td>${dataAll[i].lastName}</th>
                <td>${dataAll[i].address}</th>
                <td>${dataAll[i].pincode}</th>
                <td>${dataAll[i].gender}</th>
                <td>${dataAll[i].foodx}</th>
                <td>${dataAll[i].state}</th>
                <td>${dataAll[i].country}</th>
                </tr>`
            }
            window.alert('Form submitted successfully')
        }
        else{
            window.alert('Select atleat 2 food items')
        }
            
        //saving to localStorage
        localStorage.setItem('MyUserList', JSON.stringify(dataAll) );
        
       
    }
        catch(err){
            window.alert('Fill all the details in form \n'+err)
        }

        
}
    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addToTable);
});