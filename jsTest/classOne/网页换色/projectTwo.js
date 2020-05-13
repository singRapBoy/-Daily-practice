window.onload = function ()
{
    var oLink = document.getElementsByTagName("link")[0];
    console.log(oLink);
	var oSkin = document.getElementById("skin").getElementsByTagName("li");
	
	for(var i = 0; i< oSkin.length; i++)
	{		
		oSkin[i].onclick = function ()
		{
			for(var p in oSkin){
                oSkin[p].className = "";
                console.log(p);
            } 
			this.className = "current";
			oLink['href'] = this.id + ".css";				
		}	
	}
	
};