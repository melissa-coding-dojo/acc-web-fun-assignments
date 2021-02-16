for(var num = 0; num < 15; num++){
    console.log(num);
}

// this will print in the console the numbers 0-14 as it starts at 0 and prints a total of 15 numbers.

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

// this will print the numbers 3 and 9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// this will print the following 1, 4, 5, 8, 10, 11, 14, 16