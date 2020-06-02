function loadCommits() {
    let userName = document.getElementById("username").value;
    let repository = document.getElementById("repo").value;
    let contentDiv = document.getElementById("commits");
    contentDiv.innerHTML = "Loading...";


    fetch(`https://api.github.com/repos/${userName}/${repository}/commits`)
    .then(response => {
        return response.json();
    })
    .then(data => {

        contentDiv.innerHTML = "";

        let messages = data.map((item) => {
            return item.commit.message;
        })
        
        for( const key in messages){
            if(messages.hasOwnProperty(key)){
                const message = messages[key];
                contentDiv.innerHTML += `<h1>${message}</h1>`;

            }
        }

        console.log(messages);
    })
    .catch(err => {
        console.log("Error", err);
    })
}