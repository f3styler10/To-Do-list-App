const input  =  document.querySelector("#input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
function addTask()
{
    if(input.value!= "")
    {
    const newelement = document.createElement('li');
    newelement.textContent = input.value;
    document.querySelector("ul").appendChild(newelement);

    const span = document.createElement('span');
    span.innerHTML="\u00d7";
    newelement.appendChild(span);  


    document.querySelector("input").value = "";

    saveData();
    }

    else{
        window.alert("Enter the task");
    }



       

        
   
}


list.addEventListener('click',(e)=>{ 

    
    if(e.target.tagName ==='LI')
    {
    const element = e.target;
    element.setAttribute('id','check');
    saveData();
    console.log(element);
    }
    
    else if(e.target.tagName =='SPAN')
    {
         e.target.parentElement.remove();
         saveData();


    }
    
   
}
    
    ,false);


    function saveData()
    {
        localStorage.setItem("data" , list.innerHTML);
    }


    function showData(){
        list.innerHTML = localStorage.getItem("data");
    }




 showData();



