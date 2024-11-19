function commentsData(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => displayData(data))
}
commentsData()


const displayData = (data) =>{
    const collscomments = document.getElementById("comments");

    data.forEach((comments) => {
        console.log(comments);
        const commentsDiv = document.createElement("div");

        commentsDiv.innerHTML=`
        
     <div class="card" style="width: 16rem;">                 
        <div class="card-body">
         <h5 class="card-title">Card title</h5>
        <p class="card-text">${comments.id}</p>
        <p class="card-text">${comments.name}</p>
         <a href="#" class="btn btn-primary">Go</a>
        </div>
    </div>
        
        
        `;
        collscomments.appendChild(commentsDiv);

    }); 
        
    
}