// print all the odd numbers between 1 and 20

for(let i=0; i<20; i++){
    if(i % 2 !== 0)
    console.log(i);
}

// Print the numbers 1-5 but at each step also print the sum of current number and the last sum

var sum=0;
for(let i=0; i<5; i++){
    sum+=i
    console.log('num:', i, 'sum:', sum)
}