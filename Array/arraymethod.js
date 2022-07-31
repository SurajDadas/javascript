// 1 push()
let number=[10,20,30,40];
console.log(number);
number.push(50);
console.log(number);


// 2 pop()
let number1=[100,300,500,250];
number1.pop();
console.log(number1);


// 3 shift()
let country=["India","china","USA"];
country.shift();
console.log(country);


// 4 unshift()
let City=["Pune","Mumbai","Nagpur"];
City.unshift("Satara");
console.log(City);


// 5 includes
let vegetables=["potato","cabbage,tomato"];
let AA=vegetables.includes("Onion")
console.log(AA);


// 6 map()
let A=[10,20,25,28,30];
let B=A.map(function(el,index,arr){
    return el*2
    })
console.log(B)


// 7 filter()
let C=[10,20,25,28,30];
let D= C.filter(function(el,index,arr){
    return el>25
   })
   console.log(D)


// 8 reduce()
let E=[10,20,25,28,30];
let F=E.reduce(function(acc,el,index,arr){
    return acc+el;
    })
   console.log(F)


// 9 forEach()
let G=[10,20,25,28,30];
G.forEach(function(el,index,arr){
    console.log("The number is :" + el);
    })


// 10 some()
let H=[10,20,25,28,30];
let I=H.some(function(el,index,arr){
    return el>20
    })
console.log(I)


// 11 every()
let J=[10,20,25,28,30];
let K=J.every(function(el,index,arr){
    return el>20
    })
console.log(K)


// 12 find()
let L=[10,20,25,28,30];
let M=L.find(function(el,index,arr){
    if (index > 3){
    return el >20

    
    }
    })
console.log(M)


// 13 findIndex()
let N=[10,20,25,28,30];
let O=N.findIndex(function(el,index,arr){
    return el>20
    })
console.log(O);


// 14 slice()
let P=["Ram","Sham","Suraj","Yogi","Arjun"];
let Q=P.slice(0,2);
 let R=P.slice(-5,2);
     R=P.slice(2,5);
console.log(Q);
console.log(R);


// 15 reverse()
let S=[10,25,15,80];
let T=S.reverse();
console.log(T);


// 16 sort()
let U=["Ram","Sham","Suraj","Yogi","Arjun"];
let V=U.sort();
console.log(V)


// 17 concat()
let names=["Ram","Sham","Suraj","Arjun"];
let AAA=[10,20,50];
let Y= names.concat(AAA);       
console.log(Y)


// 18 flat
let arr=[[11,22,33],[44,55,66],[77,88,99]];
let BB=arr.flat();              
console.log(BB)


// 19 includes()
let arr1=["India","USA","UK"];
let BC=arr1.includes("India");     // includes(value to check)
console.log(BC);


// 20 fill()
let arr2=[11,22,33,44,55,66,77,88];
arr2.fill(100,1,2);                // fill(value, start, stop)
console.log(arr2);


// 21 join()
let arr3=["Suraj","Dadas",9561,481988];
let arr4=arr3.join();
console.log(arr4);


// 22 splice()
let arr5=["dadas","suraj","arjun","yogi","shiv"];
       arr5.splice(1,0,500,100,2000);   // splice(starting index, number of el to be deleted, value to be added )
console.log(arr5);


