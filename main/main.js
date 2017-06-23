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
    var sequence = input 
  }

  minimum() {
    // Write your code here
    var a
    //var b
    for(int i=1,a=sequence[0];i<sequence.length;i++)
    {
    	if(a>sequence[i])
    	{
    		a=sequence[i]
    	}
    }
    return a
  }
  maximum(){
  	var a
    for(int i=1,a=sequence[0];i<sequence.length;i++)
    {
    	if(a<sequence[i])
    	{
    		a=sequence[i]
    	}
    }
    return a
  }
  sum(){
  	return sequence.length
  }
  ver(){
  	var a=0
  	for(var i = 0 ;i<sequence.length;i++)
  	{
  		a+=sequence[i]
  	}
	return a/sequence.length  	
  }
  // Write your code here
}
