import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// Q.) write a program to print integer from 1 to n the condition is for multiple of 3 print fizz and at multiple of 5 print buzz and if multiple of both 3 and 5 then print fizzbuzz.

function fizzbuzz(n){
  for(let i=1; i<=n; i++){
    if(i%5 == 0 && i%3 == 0){
      console.log("fizzbuzz");
    }else if(i%3 == 0){
      console.log("fizz");
    }else if(i%5 == 0){
      console.log("buzz");
    }else
    console.log(i);
  }
}
fizzbuzz(15)