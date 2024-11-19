function usersData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => displayData(data))
}
usersData()


const displayData = (data) =>{
    const collsusers = document.getElementById("users");

    data.forEach((users) => {
        console.log(users);
        const usersDiv = document.createElement("div");

        usersDiv.innerHTML=`
        
     <div class="card" style="width: 16rem;">                 
        <div class="card-body">
         <h5 class="card-title">Card title</h5>
        <p class="card-text">${users.id}</p>
        <p class="card-text">${users.title}</p>
         <a href="#" class="btn btn-primary">Go</a>
        </div>
    </div>
        
        
        `;
        collsusers.appendChild(usersDiv);

    }); 
        
    
}