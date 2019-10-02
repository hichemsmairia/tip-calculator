function tipcalcul () 
     
{
	var x=document.getElementById("options").value ;
    var y=document.getElementById("billamount").value ;
    var z=document.getElementById("nb").value ;
	var tip=0 ;
	var bonus=0 ;  
	console.log(x) ;
     
if (x==1) 
{
	bonus=0.2 ;
}
else 
if (x==2) 
{
	bonus=0.1 ;
}
else
bonus=0.05 ; 
tip=((y*0.15)+(y*bonus))/z ; 
alert("le bourboir pour chacun de vous est :" + tip) ;  
}

 
