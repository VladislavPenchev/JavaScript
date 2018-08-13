function foo(x = (function(v){return v + 11;})(31)
){
    console.log(x);
}

foo();