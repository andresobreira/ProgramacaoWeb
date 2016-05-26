	var vezDoJogador;
	// 0: Não foi utilizada
	// 1: Jogador 1 (blue)
	// 2: Jogador 2 (red)
	var tab = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
    window.onload = function() {
         carregaImagens();
    }

    function carregaImagens(){
		var x= document.getElementsByTagName("img");
		for (i=1; i< x.length; i++){
           x[i].src ="img/white.png";
		   tab[i]=0;
		}
		vezDoJogador=1;
    }
	
    function jogar(i){
	var cont=0;
	if(tab[i]==0){
	for(var j=i; j<=42; j=j+7){
	    if( tab[j]==0){
			cont=j;
	    }
	}
    var x = document.getElementsByTagName("img");
    if (vezDoJogador==1){
		x[cont].src = "img/blue.png";
		vezDoJogador=2;
		tab[cont]=1;
    }
    else{
        x[cont].src = "img/red.png";
        vezDoJogador=1;
		tab[cont]=2;
     }
	}
	alguemGanhou();
	}

	//Verificar quem ganhou!
	function alguemGanhou(){
	//verificar linhas
		for (var i=1; i<40;) {
			if(i==5 || i==12 || i==19 || i==26 || i==33){
				i=i+3;
			}
			if(tab[i]==1 && tab[i+1]==1 && tab[i+2]==1 && tab[i+3]==1){
				alert("Azul ganhou!");
				carregaImagens();
			}
			else if(tab[i]==2 && tab[i+1]==2 && tab[i+2]==2 && tab[i+3]==2){
				alert("Vermelho ganhou!");
				carregaImagens();
			}
			i=i+1;
		}
		//verificar colunas
		for(var i=1; i<22; i=i+1){
			if(tab[i]==1 && tab[i+7]==1 && tab[i+14]==1 && tab[i+21]==1){
				alert("Azul ganhou!");
				carregaImagens();
			}
			if(tab[i]==2 && tab[i+7]==2 && tab[i+14]==2 && tab[i+21]==2){
				alert("Vermelho ganhou!");
				carregaImagens();
			}
		}
		
		//verificar diagonais principais (esq. p/ dir)
		for(var i=1; i<19;){
			if(i==5 || i==12){
				i=i+3;
			}
			if(tab[i]==1 && tab[i+8]==1 && tab[i+16]==1 && tab[i+24]==1){
				alert("Azul ganhou");
				carregaImagens();
			}
			if(tab[i]==2 && tab[i+8]==2 && tab[i+16]==2 && tab[i+24]==2){
				alert("Vermelho ganhou");
				carregaImagens();
			}
			i=i+1;
		}
		
		// verificar diagonais secudarias (dir. p/ esq)
		for(var i=4;i<22;){
			if(i==8 || i==15)
				i=i+3;
			if(tab[i]==1 && tab[i+6]==1 && tab[i+12]==1 && tab[i+18]==1){
				alert("Azul ganhou");
				carregaImagens();
			}
			if(tab[i]==2 && tab[i+6]==2 && tab[i+12]==2 && tab[i+18]==2){
				alert("Vermelho ganhou");
				carregaImagens();
			}
			i=i+1;
		}
		
		//verificar empate
		var empate =true;
		for(var i=1; i<=42; i=i+1){
			if(tab[i]==0)
			empate=false;
		}
		if(empate){
			alert("Empate!");
			carregaImagens();
		}
	}