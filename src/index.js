module.exports = function getZerosCount(number) {
	var count2 = 0, count5 = 0;
	for(var i = 1;i <= number; ++i)
	 {	
	 	var k = i;
	 	while(k % 2 == 0)
	 		{
	 			++count2;
	 			k /= 2;
	 		}
	 	while(k % 5 == 0)
	 		{
	 			++count5;
	 			k /= 5;
	 		}
	 }
	 	
 return Math.min(count2,count5)
 }
