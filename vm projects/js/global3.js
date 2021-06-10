var customer = {
    name:'chiru',
    age:35,
    isMarried:true,
    getCustomerInfo:function(){
        console.log('Mr '+this.name+'Your Age is--->'+this.age+'Are you married---->'+this.isMarried)
    },
    address:{
        street:'kphb',
        city:'hyderabad',
        postalcode:500072
    },
    mobiles:[1234567890,08765431678]
}
console.log(customer)
