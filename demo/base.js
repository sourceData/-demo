window.onload=function(){
		var imgs=document.getElementById("imgs");
		var btn=document.getElementById("btn");
		var alerts=document.getElementsByClassName("alert")[0];
		var quxiao=document.getElementsByClassName("quxiao")[0];
		var span=document.getElementsByTagName("div")[0];

		imgs.onclick=btn.onclick=function(){
			alerts.style.display="block"
		}
		quxiao.onclick=function(){
			alerts.style.display="none";
		}

	}