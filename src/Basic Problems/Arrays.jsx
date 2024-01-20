const Arrays = () => {

   const array =[1,2,6,7,8,3,5];
   // Arrays in Javascript 

    const reversedArray=[];
    for (const i of array) {
        reversedArray.unshift(i);
    }
    console.log(reversedArray); //[5, 3, 8, 7, 6, 2, 1]

    //Find the maximum number in an array.

    const reversedArray2= array.sort((a,b)=>b-a)
    console.log(reversedArray2[0]);

    //Sum of all elements in javascript
    

  

    

   
}
export default Arrays