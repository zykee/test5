module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素总量 = ${sequence.sum()}
o) 平均值 = ${sequence.ver()}
`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input = input 
  }

  minimum() {
    // Write your code here
    var a
    //var b
    for(var i=1,a=input[0];i<input.length;i++)
    {
    	if(a>input[i])
    	{
    		a=input[i]
    	}
    }
    return a
  }
  maximum(){
  	var a
    for(var i=1,a=input[0];i<input.length;i++)
    {
    	if(a<input[i])
    	{
    		a=input[i]
    	}
    }
    return a
  }
  sum(){
  	return input.length
  }
  ver(){
  	var a=0
  	for(var i = 0 ;i<input.length;i++)
  	{
  		a+=input[i]
  	}
	return a/input.length  	
  }
  // Write your code here
}
