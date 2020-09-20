export function arrow(){
    var numbers = [56 ,11, 52];
    var e1 = [];
    const squares = numbers.map(n => n*n);
    document.body.innerHTML = squares;
    numbers.forEach(n => {
        if(n%2 == 0)
        {
            e1.push(n);
        }
    })
    console.log(e1);
}

