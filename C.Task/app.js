function Palindrome(str) {
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
          alert( 'Palindrom deyil');
          return;
        }
    }
    alert( 'Palindromdur ');
}
let string = prompt(' soz daxil edin... ');
let value = Palindrome(string);
console.log(value);


// // let arr =[1,2,3,4,5,6,7,8,9,10];
// // let cutarr=[]
// // let tekarr=[]
// // for (let index = 0; index < arr.length; index++) {
// //     if (arr[index]%2==0) {
// //         cutarr.push(arr[index])
// //     }else{
// //         tekarr.push(arr[index])
// //     }
// // } 
// // console.log(cutarr,tekarr);

// function vusal(input) {
//     let newarr=['hello ','world']
//     for (let index = 0; index < newarr.length; index++) {
//         if (newarr[index].match(input) ) {
//             return index
//         }
        
//     }
    
// }
// console.log(vusal('world'));




















































