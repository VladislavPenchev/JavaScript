function extractLinks(args){
    let regex = /www.[a-zA-z -]+.[a-z]+/g
    console.log(args.split(' '));
    console.log(args.join(' ').match(regex));

    //let result = args.split(' ').match(regex);

    //let result = args.match(regex);

    //console.log(result);
}

extractLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]);