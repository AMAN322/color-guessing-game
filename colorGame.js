// var colors=["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(255, 0, 255)"];
var colors=genColors(6);
var sq=document.getElementsByClassName("square");
var colorAns=genCol();
rgbHead.textContent=colorAns;
var mes=document.getElementById("message");
var h1=document.querySelector("h1");
var reset=document.querySelector("button");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
hardBtn.classList.add("selected");
var totalSquare=6;

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	totalSquare=3;
	colors=genColors(totalSquare);
	colorAns=genCol();
	rgbHead.textContent=colorAns;
	h1.style.backgroundColor="steelblue";
	mes.textContent="";
	for(var i=0;i<sq.length;i++)
	{
		if(colors[i])
		    sq[i].style.backgroundColor=colors[i];
		else
			sq[i].style.backgroundColor="#232323";
	}
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	totalSquare=6;
	colors=genColors(totalSquare);
	colorAns=genCol();
	rgbHead.textContent=colorAns;
	h1.style.backgroundColor="steelblue";
	mes.textContent="";
	for(var i=0;i<sq.length;i++)
	{
		if(colors[i])
		    sq[i].style.backgroundColor=colors[i];
		else
			sq[i].style.backgroundColor="#232323";
	}
});


reset.addEventListener("click",function(){
	colors=genColors(totalSquare);
	colorAns=genCol();
	rgbHead.textContent=colorAns;
	h1.style.backgroundColor="steelblue";
	mes.textContent="";
	for(var i=0;i<sq.length;i++)
	{
		if(colors[i])
		    sq[i].style.backgroundColor=colors[i];
		else
			sq[i].style.backgroundColor="#232323";
	}
});


for(var i=0;i<sq.length;i++)
{
	sq[i].style.backgroundColor=colors[i];
	sq[i].addEventListener("click",function(){
		// alert("You selected the color: "+this.style.backgroundColor);
		if(this.style.backgroundColor===colorAns)
		{
			mes.textContent="SUCCESSFUL!";
			setAllSame(colorAns);
			h1.style.backgroundColor=colorAns;
		}
		else{
			mes.textContent="TRY AGAIN!";
			this.style.backgroundColor="#232323";
		}
	});
}


function setAllSame(colo)
{
	for(var i=0;i<totalSquare;i++)
	{
		sq[i].style.backgroundColor=colo;
	}
}


function genCol(){
	var ind=Math.floor(Math.random() * colors.length);
	return colors[ind];
}


function genColors(x)
{
	var c=[];
	for(var i = 0;i < x;i++)
	{
		var r=Math.floor(Math.random() * 256);
		var g=Math.floor(Math.random() * 256);
		var b=Math.floor(Math.random() * 256);
		var ans= "rgb(" + r + ", " + g + ", " + b + ")";
		c.push(ans);
	}
	return c;
}