const list = function () {
    let commands = [];
    const add = (command) => commands.push(command);
    const remove = (command) => {
        commands = commands.filter(c => c !== command);
    };
    const print = () => console.log(commands.join(', '));

    return { add, remove, print};
}();

['add hello', 'add again', 'remove hello', 'add again', 'print']

list.add('hello');
list.add('again');
list.remove('hello');
list.add('again');
list.print();