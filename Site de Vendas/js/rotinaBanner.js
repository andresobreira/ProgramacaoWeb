	var counter=1;
	var intervalId=null;
	var totalimg=0;
	var imgsrc="img/banner1.jpg";
	var imglink="#";
	function myFunction(){
	
	intervalId= setInterval(bip, 30);
	
	}
	function bip(){
	  var imgobj= document.getElementById("banner");//criando o objeto do elemento banner para substituir a image no correr do tempo
	  var imglinkh=document.getElementById("bannerclick");//criando o objeto do elemento bannerclick para substituir o  link no correr do  tempo
	  
	  document.getElementById("bip").innerHTML= totalimg+1;//usado para contar o total de imagens no banner
	  imgobj.src=imgsrc;//substitui a image
	  imglinkh.href= imglink;//substitui o link
	  
	  counter=counter+1;
	  
	  if(counter==100){//quando o valor chegar a 100 muda a imagem
	     counter=1;
		 totalimg=totalimg+1;
		 if(totalimg==1){
		    imgsrc="img/banner2.jpg";
			imglink="#";
		  }
		  else if(totalimg==2){
		    imgsrc="img/banner3.jpg";
			imglink="#";
		
		   }
		  else if(totalimg==3){
		    imgsrc="img/banner4.jpg";
			imglink="#";
			totalimg=0;
		  }
	  }
	}