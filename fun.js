function callFunction(fun,name){
    fun(name);
}

callFunction(function(name){
    console.log('hello ' + name)
},'kai'); 