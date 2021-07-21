function receivesAFunction(callBack){
    callBack()
}

function returnsANamedFunction(){
    return function newFunction(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}