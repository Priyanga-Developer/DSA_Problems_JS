const Arrays = () => {

   const array =[1,2,6,7,8,3,5];
   // Arrays in Javascript 
  
   //Reverse an Array
    const reversedArray=[];
   for (const i of array) {
       reversedArray.unshift(i)
   } 
    
   function reveredArray(arr){
     if(arr.length===0) return []
     else{
        const [first,...rest]=arr;
        return [reveredArray(rest),first]
     }
   }
   const newArray=reveredArray(array)
   let i=array.length-1
   let reversedNewArray=[]
   while(i>=0){
    reversedNewArray.push(array[i])
    i--;
   }

   //Find the maximum number in an array.

   const array2=[56,35,223,567,888,656];

   const maxarr=array2.sort((a,b)=>b-a)[0]
   const maxarr2=array2.reduce((maxnum,current)=>current>maxnum?current:maxnum,array2[0])
   let initialValue=array2[0]
   array2.forEach((num)=>{
    if(num>initialValue){
        initialValue=num
    }
   })  
   let maxValue=array2[0];
   for (const i of array2) {
      if(array2[i]>maxValue){
        maxValue=array2[i]
      }
   }

// sum of all numbers

const sumArray=[1,45,6,7,8,4]
const result=sumArray.reduce((acc,initial)=>{
  return acc+initial
},0)

let sum=0
for (let index = 0; index < sumArray.length; index++) {
    sum+=sumArray[index]
    
}
let sum2=0
for (const i of sumArray) {
   sum2+=i
}

let sum3=0
let index=sumArray.length-1
while(index>=0){
    sum3+=sumArray[index]
    index--;
}

//-----------------------------------------------
// 4. Remove duplicates from an array:
// Approach 1: Using sets
// Approach 2: Using filter
// Approach 3: Using reduce:
// Approach 4: Using for-of loop
// Approach 5: Using forEach
// Approach 6: Using indexof
// Approach 7: Using map

let arraY=[1,2,2,4,5,6,6,6,6,3]  
const duplicate=[...new Set(arraY) ]  //1 
const duplicate1=arraY.filter((num,index,arr)=>arr.indexOf(num)===index)  //2
const duplicate2=[] //3
for (const item of arraY) {
    if(!duplicate2.includes(item)){
        duplicate2.push(item)
    }
}
const duplicate3=arraY.reduce((accumulator,currentValue)=>{  //4
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue)
    }
    return accumulator
},[])
const duplicate4=[] //5
arraY.forEach((num)=>{
    if(!duplicate4.includes(num)){
       duplicate4.push(num)
    }
})
const duplicate5=[]
for(let i=0;i<arraY.length;i++){
    if(duplicate5.indexOf(arraY[i])===-1){
        duplicate5.push(arraY[i]);
    }
}
const map2 = new Map(); //7
const duplicate6=[];
for (const item of arraY) {
    if(!map2.has(item)){
        map2.set(item,true)
        duplicate6.push(item)
    }   
}
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// 5. Implement the custom sorting for an array:
  function customSort(arr){
      const length=arr.length;
      for(let i=0; i<length-1;i++){
        for (let j = 0; j < length-1-i; j++) {
            if(arr[j]>arr[j+1]){
                const temp=arr[j];
                arr[j]=arr[j+1]
                arr[j+1]=temp  
            }   
        }
      }
      return arr
  }
 let customSortArray=customSort(arraY)

//  ----------------------------------------------------------------------------------------------------------------------------------------------------
// 6. Find the intersection of two arrays.

// Approach 1: Using Set, filter and includes (ES6)
// Approach 2: Using Set Intersection
// Approach 3: Using filter and includes (ES6)
// Approach 4: Using filter and a Set (ES6)
// Approach 5: Using reduce and a Set (ES6)

const arr1=[1,4,6,8,2,34,4] 
const arr2=[4,5,6,8,3,2,3,4]
const intersectionArray=(arr1,arr2)=>[...new Set(arr1.filter((element)=>arr2.includes(element)))] //[4,6,8,2]
const intersectionArray2=(arr1,arr2)=>[...new Set(arr1.filter((element)=>new Set(arr2).has(element)))] //[4,6,8,2]
const intersectionArray3=(arr1,arr2)=>arr1.filter(element=>arr2.includes(element)) //[4,6,8,2,4]
const intersectionArray4=(arr1,arr2)=>arr1.filter(element=>new Set(arr2).has(element)) //[4,6,8,2,4]
const intersectionArray5=(arr1,arr2)=>[...new Set(arr1.reduce((intersection,element)=>{ //[4,6,8,2,4]
return new Set(arr2).has(element)?[...intersection,element]:intersection
},[]))]

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// 7. Rotate an array to the right with xyz 
const newArray2=["priya","visali","riya","riyaaa"]
function rotateArray(arr,shiftTimes){
    for(var i=0;i<shiftTimes;i++){
        arr.unshift(arr.pop())
    }
    return arr
}
function rotateArray2(arr,rotatetime){
    if(arr.length===0||rotatetime===0){
        return arr
    }
    else{
        const [first,...rest]=arr
        return rotateArray2([...rest,first],rotatetime-1)
    }  
}
const rotateArray3=(nums ,k)=>{
   function reverseArray(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++;
        end--
    }
   }
   k%=nums.length
   reverseArray(nums,0, (nums.length-1)); //[8, 7, 6, 5, 4, 1]
   reverseArray(nums,0,(k-1)); // [5, 4, 1, 6, 7, 8]
   reverseArray(nums,k,(nums.length-1)) //[1, 4, 5, 8, 7, 6]
   return nums;
}
console.log(rotateArray3([1,4,5,6,7,8],3)); //[6, 7, 8, 1, 4, 5]

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// 8. Find the largest contiguous subarray sum.
// Here's the Kadane's Algorithm: 
 function subArraySum(arr) {
    let maxSum=arr[0];
    let currentSum=arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum=Math.max(arr[i],currentSum+arr[i])
        maxSum=Math.max(currentSum,maxSum);      
    }
    return maxSum
 }
 console.log(subArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))






 return(
    <>
        <h1>Arrays</h1>
        <p>Result is {reversedArray}{newArray} ,{reversedNewArray} ,{maxarr} ,{maxarr2} ,{initialValue},{maxValue}</p>
        <p>Sum of numbers is {result} ,{sum} ,{sum2},{sum3}</p>
        <p>Duplicate is {duplicate} ,{duplicate1},{duplicate3},{duplicate4},{duplicate5},{duplicate6}</p>
        <p>{customSortArray}</p>
        <div>{intersectionArray(arr1,arr2)} {intersectionArray2(arr1,arr2)} ,
        {intersectionArray3(arr1,arr2)} ,{intersectionArray4(arr1,arr2)} ,{intersectionArray5(arr1,arr2)}
        </div>
       <div>{rotateArray(newArray2,2).join(",")}{rotateArray2(newArray2,2).join(",")} </div>
    </>
 ) 

    

   
}
export default Arrays