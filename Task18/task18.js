function printMultiplicationTable(){
    for(let i = 1; i <=10 ; i++){
        for(let j = 1 ; j <= 10 ; j++){
            console.log(`Bảng cửu chương ${i} * ${j} = ${i*j} `);
        }
    }
} 
printMultiplicationTable();