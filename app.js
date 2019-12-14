var a=2351234;
var b=a;
var arr=[];
var t=0;
while(b>=9)
{
	var str=" ";
	var x=b.toString();
	var n=x.length;
	for(var i=0;i<n/2;i++)
	{
		if(x[i]===x[n-i-1])
			{continue;}
		else if(x[i]>x[n-i-1])
		{
			str+=x[i];
		}
		else if(x[i]<x[n-i-1])
		{
			str+=x[n-i-1];
		}

	}
	if(n%2!=0)
	{
		str+=x[(n-1)/2];
	}
	b=parseInt(str);
		arr[t]=b;
		
  t++;

}
var e="Strongest :";
var f=",";
document.write(e);
document.write(arr[t-1]);
		document.write("\n");
document.write("Steps:[");
for(var k=0;k<t-1;k++)
{
document.write(arr[k]);
document.write(f);}
document.write("]");