module.exports = function getZerosCount(number) {
	var count5 = 0, k = 0;

			for(var i = 5;i <= number; i += 5)
			 {	
			 	k = i;
			 	while(k % 5 == 0)
			 		{
			 			++count5;
			 			k /= 5;
			 		}	
		 	 } 	
 return count5;
 }
