class CUSTOM{
    custName:string;
    custID:number;
    custAcc:number;
    constructor(name:string, ID:number,Acc:number){
        this.custName = name;
        this.custID = ID;
        this.custAcc=Acc
    }
    getsavingdeposit(){
        return `CustName:${this.custName} and custID:${this.custID} and return custAcc:${this.custAcc} with a intrest returnrate of 4% `  
    }
    getreturndeposit(){
        return `CustName:${this.custName} and custID:${this.custID} and return custAcc:${this.custAcc} with a intrest return rate of 7% ` 
    }
    getfixeddeposit(){
        return `CustName:${this.custName} and custID:${this.custID} and return custAcc:${this.custAcc} with a intrest return rate of 2% `
    }
}
let emp3 = new CUSTOM('alexa',125,100101010)
console.log(emp3.custName, emp3.custID,emp3.custAcc)
console.log(emp3.getsavingdeposit())
console.log(emp3.getreturndeposit())
console.log(emp3.getfixeddeposit())

 