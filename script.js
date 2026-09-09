const element = document.getElementById("kostka");
    if(element){
            for (let index = 0; index < 100; index++) {
        const kostka = document.createElement("div");
        kostka.style.width = "10px";
        kostka.style.height = "10px";
        kostka.style.border = "1px solid";
        element.appendChild(kostka);
        }
    }
    var barva1 = ""; 
    function barva(){
        const cerna = document.getElementById("black"); 
        const modra = document.getElementById("blue"); 
        const zelena = document.getElementById("green"); 
        const cervena = document.getElementById("red");
        const bila = document.getElementById("white");
        
        if(cerna.checked){ barva1 = cerna.id;}
        if(modra.checked){ barva1 = modra.id;}
        if(zelena.checked){ barva1 = zelena.id;}
        if(cervena.checked){ barva1 = cervena.id;}
        if(bila.checked){ barva1 = bila.id;}
    }
    clearkostka();
      function clearkostka(){
        const kresliciKostka = document.getElementById("kresliciKostka")
        if(kresliciKostka){kresliciKostka.remove();}
        const mrizka = document.getElementById("mrizka");
        if(mrizka){
            const kostka1 = document.createElement("div");
            kostka1.id = "kresliciKostka";
            kostka1.style.display = "grid";
            kostka1.style.gridTemplateColumns = "repeat(10,1fr)";
            kostka1.style.width = "695px";
            kostka1.style.height = "695px";
            kostka1.style.border = "5px solid";
            kostka1.style.margin = "auto";
                for (let index = 0; index < 100; index++) {
                    const kostka = document.createElement("div");
                    kostka.style.width = "68px";
                    kostka.style.height = "68px";
                    kostka.style.backgroundColor = "white";
                    kostka.style.border = "1px solid";
                    kostka.style.cursor = "pointer";
                    kostka.addEventListener("click",function(){
                        console.log(barva1);
                        if(barva1 === "black"){kostka.style.backgroundColor = "black";}
                        else if(barva1 === "blue"){kostka.style.backgroundColor = "blue";}
                        else if(barva1 === "green"){kostka.style.backgroundColor = "green";}
                        else if(barva1 === "red"){kostka.style.backgroundColor = "red";}
                        else if(barva1 === "white"){kostka.style.backgroundColor = "white";}
                        else{kostka.style.backgroundColor = "white"}   
                    })

                    kostka1.appendChild(kostka)
                }
                mrizka.appendChild(kostka1);
        }
    }
