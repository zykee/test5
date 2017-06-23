module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.sum()}
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
    for(var i=1,a=this.input[0];i<this.input.length;i++)
    {
    	if(a>this.input[i])
    	{
    		a=this.input[i]
    	}
    }
    return a
  }
  maximum(){
  	var a
    for(var i=1,a=this.input[0];i<this.input.length;i++)
    {
    	if(a<this.input[i])
    	{
    		a=this.input[i]
    	}
    }
    return a
  }
  sum(){
  	return this.input.length
  }
  ver(){
  	var a=0
  	for(var i = 0 ;i<this.input.length;i++)
  	{
  		a+=this.input[i]
  	}
	return (a/this.input.length).toFixed(2)  	
  }
  // Write your code here
}
