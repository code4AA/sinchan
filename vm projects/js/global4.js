var ar1 = Array(3)
ar1[0]='uday1'
ar1[1]='chiru1'
ar1[2]='suresh1'

var ar2 = Array('uday2','chiru2','suresh2')

var ar3 = ['uday3','chiru3','suresh3']

var ar4 = []
ar4[0] = 'uday4'
ar4[1] = 'chiru4'
ar4[2] = 'suresh4'

var ar5 = ['chiru5',30,true]

function displayArray(dynArray){
  var len = dynArray.length
  for(var i=0; i<len; i++){
    console.log(i, dynArray[i])
  }
}

displayArray(ar1)
displayArray(ar2)
displayArray(ar3)
displayArray(ar4)
displayArray(ar5)
