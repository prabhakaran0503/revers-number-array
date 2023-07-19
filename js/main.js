var a=prompt("Enter The Valu");
var b=0;
var c;
while(a>0)
	{
		c=a%10;
		b=b*10+c;
		a=parseInt(a/10);
		document.write(c);
		
	}
	