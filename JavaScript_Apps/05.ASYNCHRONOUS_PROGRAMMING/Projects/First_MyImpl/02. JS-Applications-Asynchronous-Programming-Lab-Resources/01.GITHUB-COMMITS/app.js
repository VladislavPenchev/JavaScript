function loadCommits() {
    
    const elements = {
        usernameInput : document.getElementById('username'),
        repoInput : document.getElementById('repo'),
        commitsUl : document.getElementById('commits')
    };

    const url = `https://api.github.com/repos/${elements.usernameInput.value}/${elements.repoInput.value}/commits`;

    fetch(url)
    .then(resp => resp.json())
    .then(data => loadCommits(data))

    function loadCommits(data){
        let messages = data.map((item) =>{

            let repoInfo = {
                username : item.commit.author.name,
                message : item.commit.message,
            }

            return repoInfo;
        });

        let fragment = document.createDocumentFragment();

        for(const key in messages){
            if(messages.hasOwnProperty(key)){
                const messageObj = messages[key];
                const {username, message}  = messageObj;
                let commitLi = document.createElement('li');
                commitLi.textContent = `${username}: ${message}`;

                fragment.appendChild(commitLi);
            }
        }

        elements.commitsUl.appendChild(fragment);
    };
}