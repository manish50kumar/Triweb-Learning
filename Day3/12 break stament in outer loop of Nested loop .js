let n = 5;// n is some value from user

for(    let i=1;    i<=n;   i++){//outer loop
    
    for(    let j=1;    j<=n;   j++){//inner loop

        console.log(i,j);
    }
    if(i == 3){
        break;
    }
}