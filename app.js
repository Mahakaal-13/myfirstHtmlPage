let arr = [1,2,3,4,5];

for (let j = 0; j < 2; j++) {
    
    
    let temp=arr[arr.length-1];
    
    for (let i =arr.length-1; i >=0 ; i--) {
        
        arr[i]=arr[i-1];
        
        
    }
    console.log(temp)
    arr[0]=temp
}
console.log(arr)




// for (let i =0; i <arr.length ; i++) {
        
//     arr[i]=arr[i-1];
    
    
// }
// console.log(arr)