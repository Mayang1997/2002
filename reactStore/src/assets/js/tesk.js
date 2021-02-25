export const add = (x, y) =>{
    console.log(x+y);
};

var arr = [1,2,3,4,5,6];

function sorts(arr, k){
    var res =  []
    var length = parseInt((arr.length / k))
    for(var i = 0;i< length;i++){
        res.concat(arr.splice(0,k))
    }
    console.log(arr.splice(0,k))
    var list= []
    res.forEach(itme=>{
        // if((parseInt(arr.length * k) == index) && num ) return
        list = list.concat(itme.sort((a,b)=> b-a))
    })
    return list
    
}

console.log(sorts(arr,5))

