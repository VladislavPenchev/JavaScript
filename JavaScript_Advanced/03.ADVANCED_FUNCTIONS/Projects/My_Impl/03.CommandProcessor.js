function commandProcessor(){
    let str = '';
    return {
        append: (s) => str += s,
        print: () => console.log(str)
    }
}

const solve = commandProcessor();

solve.append('hello');
solve.print();