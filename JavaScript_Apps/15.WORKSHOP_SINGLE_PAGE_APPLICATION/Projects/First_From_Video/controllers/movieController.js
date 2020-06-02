
const movieController = function() {

    const createGet = function(context) {

        helper.addHeaderInfo(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
        }).then(function(){
            this.partial('../views/movies/create.hbs')
        })
    }

    const createPost = function(context) {

        const payload = {
            title: context.params.title,
            imageUrl: context.params.imageUrl,
            description: context.params.description,
            tickets: Number(context.params.tickets),
            genres: context.params.genres
        };

        if(payload.title.length < 6){
            return;
        }

        requester.post('movies', 'appdata', 'Kinvey', payload)
            .then(helper.handler)
            .then((data) => {
                context.redirect('/');
            });

    }


    const loadCinema = async function(context) {

        helper.addHeaderInfo(context);

        const sortCriteria = JSON.stringify({
            'tickets': -1
        });

        const endpoint = `movies?query={}&sort=${sortCriteria}`;
        
        try{
            const response = await requester.get(endpoint, 'appdata', 'Kinvey');
            const movies = await response.json();
            context.movies = movies;

            requester.get(endpoint, 'appdata', 'Kinvey')
            .then(helper.handler)
            .then((movies) => {

                context.movies = movies;

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs",
                    'single-movie': "../views/movies/single-movie.hbs"
                }).then(function(){
                    this.partial('../views/movies/cinema.hbs')
                })

            })
        }catch (err) {

        }

        // requester.get(endpoint, 'appdata', 'Kinvey')
        //     .then(helper.handler)
        //     .then((movies) => {

        //         context.movies = movies;

        //         context.loadPartials({
        //             header: "../views/common/header.hbs",
        //             footer: "../views/common/footer.hbs",
        //             'single-movie': "../views/movies/single-movie.hbs"
        //         }).then(function(){
        //             this.partial('../views/movies/cinema.hbs')
        //         })

        //     })

    }

    return {
        createGet,
        createPost,
        loadCinema
    }

}();