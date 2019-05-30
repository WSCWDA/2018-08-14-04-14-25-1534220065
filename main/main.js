module.exports = function main(number) {
	var example1 = ["._.",   "...",   "._.",   "._.",   "...",   "._.",   "._.",   "._.",   "._.",   "._."]
	var example2 = ["|.|",   "..|",   "._|",   "._|",   "|_|",   "|_.",   "|_.",   "..|",   "|_|",   "|_|"]
	var example3 = ["|_|",   "..|",   "|_.",   "._|",   "..|",   "._|",   "|_|",   "..|",   "|_|",   "..|"]
	var example = new Array(example1, example2, example3);
	var result = new Array();
	for(var i = 0; i<3; i++){
    var str = "";
		for(var j = 0; j<number.length; j++){            
            var num = parseInt(number.charAt(j));
			str = str + example[i][num] + " ";
		}
        //console.log(str+"\n");
        result.push(str.substring(0,str.length-1)+"\n");
        //result.push(str[str.length-1]+"\n");
	}
  return result.join("");
};