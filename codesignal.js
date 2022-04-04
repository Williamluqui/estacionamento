// 1905 Example
// 1-100; 
// 101-200;
// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.
// 2005

// function centuryFromYear(year){
 
//     return (year/100) + ((year%100 ? 1 : year) % 10 ? 1 : 0);
//  }
 
 
 
//  console.log("Ano 1700: séc. ", centuryFromYear(1700));
//  console.log("Ano 1905: séc. ", centuryFromYear(1905));

let i = 20;
let n = 2 * (i%3);
console.log(n)