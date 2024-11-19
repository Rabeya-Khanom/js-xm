function todosData(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => displayData(data))
}
todosData()


const displayData = (data) =>{
    const collstodos = document.getElementById("todos");

    data.forEach((today) => {
        console.log(today);
        const todosDiv = document.createElement("div");

        todosDiv.innerHTML=`
        
     <div class="card" style="width: 16rem;">                 
        <div class="card-body">
         <h5 class="card-title">Card title</h5>
        <p class="card-text">${today.id}</p>
        <p class="card-text">${today.title}</p>
         <a href="#" class="btn btn-primary">Go</a>
        </div>
    </div>
        
        
        `;
        collstodos.appendChild(todosDiv);

    }); 
        
    
}