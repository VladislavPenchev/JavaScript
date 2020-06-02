function attachEvents() {

    const elements ={
        loadPostsButton: document.getElementById('btnLoadPosts'),
        viewPostsButton: document.getElementById('btnViewPost'),
        postsSection: document.getElementById('posts'),
        postBodyUl: document.getElementById('post-body'),
        postTitleH1: document.getElementById('post-title'),
        postCommentsUl: document.getElementById('post-comments'),
    };

    elements.loadPostsButton.addEventListener('click', loadPosts);
    elements.viewPostsButton.addEventListener('click', viewPosts);

    const url = 'https://blog-apps-c12bf.firebaseio.com/posts.json';
    const ulrComments = 'https://blog-apps-c12bf.firebaseio.com/comments.json';

    let allPosts = [];

    function loadPosts(){

        fetch(url)
        .then(resp => resp.json())
        .then(data => loadData(data))

    }

    function loadData(data){
        //console.log(data);

        let fragment = document.createDocumentFragment();

        Object.keys(data)
            .forEach(post => {
                if(data.hasOwnProperty(post)){
                    const postInfo = data[post];
                    
                    const postInfoObj = {
                        body: postInfo.body,
                        id: postInfo.id,
                        title: postInfo.title
                    };

                    allPosts.push(postInfoObj);

                    let titleOption = document.createElement('option');
                    titleOption.value = postInfoObj.id;
                    titleOption.textContent = postInfoObj.title;
                    
                    fragment.appendChild(titleOption);
                }
            });

        elements.postsSection.appendChild(fragment);

    }

    function viewPosts(){

        const postId = elements.postsSection.value;

        allPosts.forEach(post => {
            if(post.id === postId){

                let bodyLi = document.createElement('li');
                bodyLi.textContent = post.body;
        
                elements.postBodyUl.appendChild(bodyLi);


                fetch(ulrComments)
                .then(resp => resp.json())
                .then(data => loadPostInfoData(data))


            }            
        })

    }

    function loadPostInfoData(data){
        console.log(data);

        let fragmentComments = document.createDocumentFragment();



        Object.keys(data)
            .forEach(comment => {
                let postCommentsLi = document.createElement('li');
                postCommentsLi.textContent = data[comment].text; 

                fragmentComments.appendChild(postCommentsLi);
            });

        elements.postCommentsUl.appendChild(fragmentComments);
    
        
    }

}

attachEvents();