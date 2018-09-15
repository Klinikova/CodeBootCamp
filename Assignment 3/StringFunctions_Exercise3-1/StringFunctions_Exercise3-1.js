var cityItems = "";  //Global Variable
	
var $ = function (id) {
    return document.getElementById(id);
}

var searchItem = function ()
{
    var item = $("item").value;
	
	
	var itemLower = item.toLowerCase();
	var cityItemsLower = cityItems.toLowerCase();
    
   	var foundStartPos = cityItemsLower.indexOf(itemLower);
	
	if (foundStartPos >= 0)
	{
		var itemLen = item.length;
		
		var firstPart = cityItems.substr(0, foundStartPos);
		var middlePart = "<b><span style='color: red;'>" + item + "</span></b>";
		var lastPart =  cityItems.substr(foundStartPos + itemLen);
		
		$("msg").innerHTML = $("msg").innerHTML = item + " was found in the list!"; //firstPart + middlePart + lastPart;
		
	}
	else
	{
		$("msg").innerHTML = item + " was NOT found in the list!";
	}
               
    $("item").value = "";
    $("item").focus();   //puts cursor on field
}

window.onload = function ()
{
	$("mysearchbutton").onclick = searchItem;  //Remember no ()!!
    $("item").focus();   //puts cursor on field
}