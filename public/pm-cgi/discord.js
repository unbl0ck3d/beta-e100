// Copyright (c) 2020 The Powermouse Authors. All rights reserved.
// fucking discord support

if(pmUrl.pathname == '/login'){

var ready=(()=>{
		clearInterval(checkReady);
		var container=document.getElementsByClassName('mainLoginContainer-1ddwnR')[0],
			tokenLogin=document.createElement('button'),
			tokenLoginLabel=document.createElement('div'),
			needAccount=document.getElementsByClassName('needAccount-23l_Wh')[0];
		
		container.appendChild(tokenLogin);
		tokenLogin.setAttribute('class','marginBottom8-AtZOdT button-3k0cO7 button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeLarge-1vSeWK fullWidth-1orjjo grow-q77ONNq77ONN');
		tokenLogin.setAttribute('type','button');
		
		tokenLogin.appendChild(tokenLoginLabel);
		tokenLoginLabel.setAttribute('class','contents-18-Yxp');
		tokenLoginLabel.innerHTML='Token Login';
		
		container.appendChild(needAccount.parentNode); // move this to bottom again
		
		var newContainer=document.createElement('form'),
			loginBlock=document.createElement('div'),
			tokenInputContainer=document.createElement('div');
			tokenInputLabel=document.createElement('div'),
			tokenInputWrapper=document.createElement('div'),
			tokenInput=document.createElement('input'),
			tokenSubmit=document.createElement('button'),
			tokenSubmitLabel=document.createElement('div'),
			backToLogin=document.createElement('button'),
			backToLoginLabel=document.createElement('div');
		
		container.parentNode.appendChild(newContainer);
		newContainer.appendChild(loginBlock);
		loginBlock.appendChild(tokenInputContainer);
		tokenInputContainer.appendChild(tokenInputLabel);
		tokenInputContainer.appendChild(tokenInputWrapper);
		tokenInputWrapper.appendChild(tokenInput);
		loginBlock.appendChild(tokenSubmit);
		tokenSubmit.appendChild(tokenSubmitLabel);
		
		newContainer.appendChild(backToLogin);
		backToLogin.appendChild(backToLoginLabel);
		
		newContainer.style.display = 'none';
		newContainer.setAttribute('class','mainLoginContainer-1ddwnR');
		loginBlock.setAttribute('class','block-egJnc0 marginTop20-3TxNs6');
		tokenInputContainer.setAttribute('class','marginBottom20-32qID7');
		
		backToLogin.setAttribute('type','button');
		backToLogin.setAttribute('class','marginTop8-1DLZ1n linkButton-wzh5kV button-38aScr lookLink-9FtZy- colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN');
		backToLoginLabel.setAttribute('class','contents-18-Yxp');
		backToLoginLabel.innerHTML='Return to login';
		
		backToLogin.addEventListener('click',()=>{
			newContainer.style.display='none';
			container.style.display='block';
		});
		
		tokenInputLabel.setAttribute('class','colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP');
		tokenInputLabel.innerHTML='Token';
		
		tokenInputWrapper.setAttribute('class','inputWrapper-31_8H8');
		
		tokenInput.setAttribute('class','inputDefault-_djjkz input-cIJ7To');
		tokenInput.setAttribute('name','token');
		tokenInput.setAttribute('type','password'); // gotta be secure
		tokenInput.setAttribute('placeholder','');
		tokenInput.setAttribute('aria-label','Token');
		tokenInput.setAttribute('autocomplete','on');
		tokenInput.setAttribute('maxlength','999');
		tokenInput.setAttribute('spellcheck','false');
		tokenInput.setAttribute('value','');
		
		tokenSubmit.setAttribute('type','submit');
		tokenSubmit.setAttribute('class','marginBottom8-AtZOdT button-3k0cO7 button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeLarge-1vSeWK fullWidth-1orjjo grow-q77ONN');
		
		tokenSubmitLabel.setAttribute('class','contents-18-Yxp');
		tokenSubmitLabel.innerHTML='Login';
		
		newContainer.addEventListener('submit',e=>{
			e.preventDefault();
			var token=tokenInput.value; // dont parse this value anywhere else other than localstorage for security purposes
			document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.setItem('token','"'+token+'"')
			token='';tokenInput.value=''; // clear all traces
			setTimeout(()=>location.reload(),1000); // reload after a second
		});
		
		tokenLogin.addEventListener('click',(e)=>{
			container.style.display = 'none';
			newContainer.style.display = 'block';
			
/*
<button type="button" class="">
   <div class="">Already have an account?</div>
</button>
*/

		});
	}),
	eleReady=false,
	checkReady=(()=>{
		if(eleReady == true)return;
		var ele=document.getElementsByClassName('mainLoginContainer-1ddwnR')[0];
		if(ele != undefined && eleReady==false){
			ready();
			eleReady=true;
			clearInterval(checkReady);
		}
	});

setInterval(checkReady, 100)

}