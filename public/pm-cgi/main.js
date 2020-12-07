var fancyButtons=[
		['Reddit','old.reddit.com','orange'],
		['Google','www.google.com','green'],
		['YouTube','www.youtube.com','red'],
		['Discord','www.discord.com/login','blue'],
	],
	getDifference=((begin,finish)=>{
		var ud=new Date(finish-begin);
		var s=Math.round(ud.getSeconds());
		var m=Math.round(ud.getMinutes());
		var h=Math.round(ud.getUTCHours());
		return `${h} hours, ${m} minutes, ${s} seconds`
	}),
	strToCharcode=(str=>{
		var output='';
		str.split('').forEach((e,i)=>{
			output=output+'&#'+str.charCodeAt(i)+';'
		});
		return output;
	}),
	urlBar=document.getElementsByClassName('url')[0],
	urlFill=document.getElementsByClassName('urlFill')[0],
	activeElement=document.body,
	prevActiveEle=document.body,
	addproto=((url)=>{
		if (!/^(?:f|ht)tps?\:\/\//.test(url))url = "https://" + url;
		return url;
	}),
	buttonsContainer=document.getElementById('button-container');

fancyButtons.forEach((e,i)=>{
	var button=document.createElement('div');
	buttonsContainer.appendChild(button); // apend to container
	
	button.setAttribute('class','ns btn-fancy bnt-'+e[2]);
	button.innerHTML=strToCharcode(e[0]); // set contents of button
	
	button.addEventListener('click', ()=>{ // dont use a hrefs becaus that will show up in the document
		location.replace('/prox?url='+e[1]);
	});
});

window.addEventListener('load',()=>{
	var ele=document.getElementById('uptime'),
		start=ele.getAttribute('time');
	setInterval(()=>{
		ele.innerHTML=getDifference(start,Date.now())
	},1000);
});

urlBar.addEventListener('blur',e=>{
	if(prevActiveEle.getAttribute('class') == 'form-text url')return; // ignore element with that class when blurred
	Array.from(urlFill.getElementsByClassName('auto-fill')).forEach(e=>{
		e.parentNode.removeChild(e); // clean up old suggestions
	});
});

document.addEventListener('click',e=>{
	prevActiveEle=activeElement;
	activeElement=e.target;
});

urlBar.addEventListener('keyup',e=>{
	var xhttp = new XMLHttpRequest(), input=urlBar.value;
	xhttp.onreadystatechange=((e)=>{
		if(xhttp.readyState == 4 && xhttp.status == 200){
			var data=JSON.parse(xhttp.responseText); // our data is in a order of likely match to not likely match
			Array.from(urlFill.getElementsByClassName('auto-fill')).forEach(e=>{
				e.parentNode.removeChild(e); // clean up old suggestions
			});
			data.forEach((e,i)=>{
				var suggestion=document.createElement('div'),
					tldRegexp=/(?:\.{1,4}|\..{1,4}|\..{1,4}\..{1,4})($|\/)/gi,
					url=input.replace(tldRegexp,'.'+e+'$1');
				urlFill.appendChild(suggestion);
				suggestion.setAttribute('class','auto-fill ns');
				suggestion.innerHTML=url;
				
				suggestion.addEventListener('click',(e)=>{
					urlBar.value=url;
					urlBar.focus();
					Array.from(urlFill.getElementsByClassName('auto-fill')).forEach(ve=>{
						ve.parentNode.removeChild(ve); // clean up old suggestions
					});
				});
			});
		}
	});
	xhttp.open('GET','/suggestions?input='+encodeURI(input), true);
	xhttp.send();
});