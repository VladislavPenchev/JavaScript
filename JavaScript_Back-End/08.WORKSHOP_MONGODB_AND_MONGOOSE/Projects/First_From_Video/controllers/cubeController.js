const { cubeModel } = require('../models');

function index(req, res, next) {

    // const {
    //     from,
    //     to,
    //     search
    // } = req.query;

    // const findFn = item => {
    //     let result = true;
    //     if (search) {
    //         result = item.name.toLowerCase().includes(search);
    //     }

    //     if (result && from) {
    //         result = +item.difficultyLevel >= +from;
    //     }

    //     if (result && to) {
    //         result = +item.difficultyLevel <= +to;
    //     }

    //     return result;
    // }

    cubeModel.find().then(cubes => {
            res.render('index.hbs', {
                cubes,
                // search,
                // from,
                // to
            });
        })
        .catch(next);
}

async function details(req, res, next) {
    const id = req.params.id;
    try {
        const cube = await cubeModel.findById(id).populate('accessories');
        if (!cube) {
            res.redirect('/not-found');
            return;
        }
        res.render('details.hbs', { cube });
    } catch (err) {
        next(err);
    }

    // cubeModel.getOne(id)
    // .then(cube => {
    //     if(!cube){
    //         res.redirect('/not-found');
    //         return;
    //     }
    //     res.render('details.hbs', { cube });
    // })
    // .catch(next);
}

function notFound(req, res) {
    res.render('404.hbs');
}

function about(req, res) {
    res.render('about.hbs');
}

function postCreate(req, res) {
    const {
        name = null, descritpion = null, imageUrl = null, difficultyLevel = null
    } = req.body;
    //const newCube = cubeModel.create(name, descritpion, imageUrl, difficultyLevel);

    cubeModel.create({name, descritpion, imageUrl, difficultyLevel})
        .then(cube => {
            console.log(cube);
            res.redirect('/');
        });
}

function getCreate(req, res) {
    res.render('create.hbs');
}

module.exports = {
    index,
    details,
    notFound,
    about,
    postCreate,
    getCreate
}