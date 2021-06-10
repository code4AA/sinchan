function testVar(){
    let a=30;
    if(true){
        const a=50;
        console.log(a)
    }
    console.log(a)
}
testVar()