function capture(args){
    console.log(args.join(' ').match(/\d+/g).join(' '));
}

capture(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);