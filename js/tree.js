
    var cont = 0;//para nodo[0] por no tener evaluacion
    var nodo = new Array(62); 
    var error = 0;//error de duplicacion
    var error2 = 1;//no se puede eliminar un nodo que no existe
    var indice = 0;//para evento delete

    var ino = new Array(31);//recorrido inorden
    var pre = new Array(31);//preorden
    var post = new Array(31);//postorden

    //ocultando lineas
    $("#linea1").fadeOut(0);
    $("#linea2").fadeOut(0);
    $("#linea3").fadeOut(0);
    $("#linea4").fadeOut(0);
    $("#linea5").fadeOut(0);
    $("#linea6").fadeOut(0);
    $("#linea7").fadeOut(0);
    $("#linea8").fadeOut(0);
    $("#linea9").fadeOut(0);
    $("#linea10").fadeOut(0);
    $("#linea11").fadeOut(0);
    $("#linea13").fadeOut(0);
    $("#linea14").fadeOut(0);
    $("#linea15").fadeOut(0);
    $("#linea16").fadeOut(0);
    $("#linea17").fadeOut(0);
    $("#linea18").fadeOut(0);
    $("#linea19").fadeOut(0);
    $("#linea20").fadeOut(0);
    $("#linea21").fadeOut(0);
    $("#linea22").fadeOut(0);
    $("#linea23").fadeOut(0);
    $("#linea24").fadeOut(0);
    $("#linea25").fadeOut(0);
    $("#linea26").fadeOut(0);
    $("#linea27").fadeOut(0);
    $("#linea28").fadeOut(0);
    $("#linea29").fadeOut(0);
    $("#linea30").fadeOut(0);
    $("#linea31").fadeOut(0);

    //milisegundos de animation
    var ms = 350;


    var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0,n7=0,n8=0,n9=0,n10=0,n11=0,n12=0,n13=0,n12=0,n14=0,n15=0,n16=0,n17=0,n18=0,n19=0,n20=0,n21=0,n22=0, n23=0,n24=0,n25=0,n26=0,n27=0,n28=0,n29=0,n30=0; //para controlar las veces que entra a la insersion de nodos

    /*
    //eventos de button borrar todo
    $("#clear").on("mouseenter", ()=>{
        $("#clear").toggleClass("clear2");
    })
    $("#clear").on("mouseleave", ()=>{
        $("#clear").toggleClass("clear2");
    })*/

    //evento al dar click en insertar
    $("#add").on("click", function(e){
        e.preventDefault();
        const value = $("#input").val();
        
        //comprobando duplicación de nodo
        for(let i=0; i<nodo.length && error==0; i++){
            error=0;
            if(value==nodo[i]){
                error=1;
            }
        }

        if(error==0 && value!=""){
            if(cont==0){//nodo 0
                nodo[0] = value;
                var nodo0 = $("#nodo0");
                nodo0.text(value);
                nodo0.css({"border-radius": "20px"});
                nodo0.removeClass("text-white");
                nodo0.addClass("border");

                ino[15]=nodo[0];
                pre[0]=nodo[0];
                post[30]=nodo[0];

            }else if(value<nodo[0] && nodo[1]==null && n1==0){//nodo 1
                n1=1;
                nodo[1] = value;
                var nodo1 = $("#nodo1");
                nodo1.text(value);
                nodo1.css({"border-radius": "20px"});
                nodo1.removeClass("text-white");
                nodo1.addClass("border");
                $("#linea1").fadeIn(ms);

                ino[7]=nodo[1];
                pre[1]=nodo[1];
                post[14]=nodo[1];
                
            }else if(value>nodo[0] && nodo[2]==null && n2==0){//nodo 2
                n2=1;
                nodo[2] = value;
                var nodo2 = $("#nodo2");
                nodo2.text(value);
                nodo2.css({"border-radius": "20px"});
                nodo2.removeClass("text-white");
                nodo2.addClass("border");
                $("#linea2").fadeIn(ms);

                ino[23]=nodo[2];
                pre[16]=nodo[2];
                post[29]=nodo[2];

            }else if(value<nodo[0] && value<nodo[1] && nodo[1]==nodo[1] && nodo[3]==null && n3==0){//nodo 3
                n3=1;
                nodo[3]=value;
                var nodo3 = $("#nodo3");
                nodo3.text(value);
                nodo3.css({"border-radius": "20px"});
                nodo3.removeClass("text-white");
                nodo3.addClass("border");
                $("#linea3").fadeIn(ms);

                ino[3]=nodo[3];
                pre[2]=nodo[3];
                post[6]=nodo[3];

            }else if(value<nodo[0] && value>nodo[1] && nodo[4]==null && n4==0){//nodo 4
                n4=1;
                nodo[4]=value;   
                var nodo4 = $("#nodo4");
                nodo4.text(value);
                nodo4.css({"border-radius": "20px"});
                nodo4.removeClass("text-white");
                nodo4.addClass("border");
                $("#linea4").fadeIn(ms);

                ino[11]=nodo[4];
                pre[9]=nodo[4];
                post[13]=nodo[4];

            }else if(value>nodo[0] && nodo[2]==nodo[2] && value<nodo[2] && n5==0){//nodo 5
                n5=1;
                nodo[5]=value;
                var nodo5 = $("#nodo5");
                nodo5.text(value);
                nodo5.css({"border-radius": "20px"});
                nodo5.removeClass("text-white");
                nodo5.addClass("border");
                $("#linea5").fadeIn(ms);

                ino[19]=nodo[5];
                pre[17]=nodo[5];
                post[21]=nodo[5];

            }else if(value>nodo[0] && nodo[2]==nodo[2] && value>nodo[2] && n6==0){//nodo 6
                n6=1;
                nodo[6]=value;
                var nodo6 = $("#nodo6");
                nodo6.text(value);
                nodo6.css({"border-radius": "20px"});
                nodo6.removeClass("text-white");
                nodo6.addClass("border");
                $("#linea6").fadeIn(ms);

                ino[27]=nodo[6];
                pre[24]=nodo[6];
                post[28]=nodo[6];

            }else if(value<nodo[0] && value<nodo[1] && value<nodo[3] && n7==0){//nodo 7
                n7=1;
                nodo[7]=value;
                var nodo7 = $("#nodo7");
                nodo7.text(value);
                nodo7.css({"border-radius": "20px"});
                nodo7.removeClass("text-white");
                nodo7.addClass("border");
                $("#linea7").fadeIn(ms);
                
                ino[1]=nodo[7];
                pre[3]=nodo[7];
                post[2]=nodo[7];

            }else if(value<nodo[0] && value<nodo[1] && value>nodo[3] && n8==0){//nodo 8
                n8=1;
                nodo[8]=value;
                var nodo8 = $("#nodo8");
                nodo8.text(value);
                nodo8.css({"border-radius": "20px"});
                nodo8.removeClass("text-white");
                nodo8.addClass("border");
                $("#linea8").fadeIn(ms);

                ino[5]=nodo[8];
                pre[6]=nodo[8];
                post[5]=nodo[8];

            }else if(value<nodo[0] && value>nodo[1] && value<nodo[4] && n9==0){//nodo 9
                n9=1;
                nodo[9]=value;
                var nodo9 = $("#nodo9");
                nodo9.text(value);
                nodo9.css({"border-radius": "20px"});
                nodo9.removeClass("text-white");
                nodo9.addClass("border");
                $("#linea9").fadeIn(ms);

                ino[9]=nodo[9];
                pre[10]=nodo[9];
                post[9]=nodo[9];

            }else if(value<nodo[0] && value>nodo[1] && value>nodo[4] && n10==0){//nodo 10
                n10=1;
                nodo[10]=value;
                var nodo10 = $("#nodo10");
                nodo10.text(value);
                nodo10.css({"border-radius": "20px"});
                nodo10.removeClass("text-white");
                nodo10.addClass("border");
                $("#linea10").fadeIn(ms);

                ino[13]=nodo[10];
                pre[13]=nodo[10];
                post[12]=nodo[10];
                
            }else if(value>nodo[0] && value<nodo[2] && value<nodo[5] && n11==0){//nodo 11
                n11=1;
                nodo[11]=value;
                var nodo11 = $("#nodo11");
                nodo11.text(value);
                nodo11.css({"border-radius": "20px"});
                nodo11.removeClass("text-white");
                nodo11.addClass("border");
                $("#linea11").fadeIn(ms);

                ino[17]=nodo[11];
                pre[18]=nodo[11];
                post[17]=nodo[11];

            }else if(value>nodo[0] && value<nodo[2] && value>nodo[5] && n12==0){//nodo 12
                n12=1;
                nodo[12]=value;
                var nodo12 = $("#nodo12");
                nodo12.text(value);
                nodo12.css({"border-radius": "20px"});
                nodo12.removeClass("text-white");
                nodo12.addClass("border");
                $("#linea13").fadeIn(ms);

                ino[21]=nodo[12];
                pre[21]=nodo[12];
                post[20]=nodo[12];

            }else if(value>nodo[0] && value>nodo[2] && value<nodo[6] && n13==0){//nodo 13
                n13=1;
                nodo[13]=value;
                var nodo13 = $("#nodo13");
                nodo13.text(value);
                nodo13.css({"border-radius": "20px"});
                nodo13.removeClass("text-white");
                nodo13.addClass("border");
                $("#linea14").fadeIn(ms);

                ino[25]=nodo[13];
                pre[25]=nodo[13];
                post[24]=nodo[13];

            }else if(value>nodo[0] && value>nodo[2] && value>nodo[6] && n14==0){//nodo 14
                n14=1;
                nodo[14]=value;
                var nodo14 = $("#nodo14");
                nodo14.text(value);
                nodo14.css({"border-radius": "20px"});
                nodo14.removeClass("text-white");
                nodo14.addClass("border");
                $("#linea15").fadeIn(ms);

                ino[29]=nodo[14];
                pre[28]=nodo[14];
                post[27]=nodo[14];
               
            }

            else if(value<nodo[0] && value<nodo[1] && value<nodo[3] && value<nodo[7] && n15==0){//nodo 15
                n15=1;
                nodo[15]=value;
                var nodo15 = $("#nodo15");
                nodo15.text(value);
                nodo15.css({"border-radius": "20px"});
                nodo15.removeClass("text-white");
                nodo15.addClass("border");
                $("#linea16").fadeIn(ms);

                ino[0]=nodo[15];
                pre[4]=nodo[15];
                post[0]=nodo[15];
            }

            else if(value<nodo[0] && value<nodo[1] && value<nodo[3] && value>nodo[7] && n16==0){//nodo 16
                n16=1;
                nodo[16]=value;
                var nodo16 = $("#nodo16");
                nodo16.text(value);
                nodo16.css({"border-radius": "20px"});
                nodo16.removeClass("text-white");
                nodo16.addClass("border");
                $("#linea17").fadeIn(ms);

                ino[2]=nodo[16];
                pre[5]=nodo[16];
                post[1]=nodo[16];
            }

            else if(value<nodo[0] && value<nodo[1] && value>nodo[3] && value<nodo[8] && n17==0){//nodo 17
                n17=1;
                nodo[17]=value;
                var nodo17 = $("#nodo17");
                nodo17.text(value);
                nodo17.css({"border-radius": "20px"});
                nodo17.removeClass("text-white");
                nodo17.addClass("border");
                $("#linea18").fadeIn(ms);

                ino[4]=nodo[17];
                pre[7]=nodo[17];
                post[3]=nodo[17];
            }

            else if(value<nodo[0] && value<nodo[1] && value>nodo[3] && value>nodo[8] && n18==0){//nodo 18
                n18=1;
                nodo[18]=value;
                var nodo18 = $("#nodo18");
                nodo18.text(value);
                nodo18.css({"border-radius": "20px"});
                nodo18.removeClass("text-white");
                nodo18.addClass("border");
                $("#linea19").fadeIn(ms);

                ino[6]=nodo[18];
                pre[8]=nodo[18];
                post[4]=nodo[18];
            }

            else if(value<nodo[0] && value>nodo[1] && value<nodo[4] && value<nodo[9] && n19==0){//nodo 19
                n19=1;
                nodo[19]=value;
                var nodo19 = $("#nodo19");
                nodo19.text(value);
                nodo19.css({"border-radius": "20px"});
                nodo19.removeClass("text-white");
                nodo19.addClass("border");
                $("#linea20").fadeIn(ms);

                ino[8]=nodo[19];
                pre[11]=nodo[19];
                post[7]=nodo[19];
            }

            else if(value<nodo[0] && value>nodo[1] && value<nodo[4] && value>nodo[9] && n20==0){//nodo 20
                n20=1;
                nodo[20]=value;
                var nodo20 = $("#nodo20");
                nodo20.text(value);
                nodo20.css({"border-radius": "20px"});
                nodo20.removeClass("text-white");
                nodo20.addClass("border");
                $("#linea21").fadeIn(ms);

                ino[10]=nodo[20];
                pre[12]=nodo[20];
                post[8]=nodo[20];
            }

            else if(value<nodo[0] && value>nodo[1] && value>nodo[4] && value<nodo[10] && n21==0){//nodo 21
                n21=1;
                nodo[21]=value;
                var nodo21 = $("#nodo21");
                nodo21.text(value);
                nodo21.css({"border-radius": "20px"});
                nodo21.removeClass("text-white");
                nodo21.addClass("border");
                $("#linea22").fadeIn(ms);

                ino[12]=nodo[21];
                pre[14]=nodo[21];
                post[10]=nodo[21];
            }

            
            else if(value<nodo[0] && value>nodo[1] && value>nodo[4] && value>nodo[10] && n22==0){//nodo 22
                n22=1;
                nodo[22]=value;
                var nodo22 = $("#nodo22");
                nodo22.text(value);
                nodo22.css({"border-radius": "20px"});
                nodo22.removeClass("text-white");
                nodo22.addClass("border");
                $("#linea23").fadeIn(ms);

                ino[14]=nodo[22];
                pre[15]=nodo[22];
                post[11]=nodo[22];
            }

            else if(value>nodo[0] && value<nodo[2] && value<nodo[5] && value<nodo[11] && n23==0){//nodo 23
                n23=1;
                nodo[23]=value;
                var nodo23 = $("#nodo23");
                nodo23.text(value);
                nodo23.css({"border-radius": "20px"});
                nodo23.removeClass("text-white");
                nodo23.addClass("border");
                $("#linea24").fadeIn(ms);

                ino[16]=nodo[23];
                pre[19]=nodo[23];
                post[15]=nodo[23];
            }

            else if(value>nodo[0] && value<nodo[2] && value<nodo[5] && value>nodo[11] && n24==0){//nodo 24
                n24=1;
                nodo[24]=value;
                var nodo24 = $("#nodo24");
                nodo24.text(value);
                nodo24.css({"border-radius": "20px"});
                nodo24.removeClass("text-white");
                nodo24.addClass("border");
                $("#linea25").fadeIn(ms);

                ino[18]=nodo[24];
                pre[20]=nodo[24];
                post[16]=nodo[24];
            }

            else if(value>nodo[0] && value<nodo[2] && value>nodo[5] && value<nodo[12] && n25==0){//nodo 25
                n25=1;
                nodo[25]=value;
                var nodo25 = $("#nodo25");
                nodo25.text(value);
                nodo25.css({"border-radius": "20px"});
                nodo25.removeClass("text-white");
                nodo25.addClass("border");
                $("#linea26").fadeIn(ms);

                ino[20]=nodo[25];
                pre[22]=nodo[25];
                post[18]=nodo[25];
            }

            else if(value>nodo[0] && value<nodo[2] && value>nodo[5] && value>nodo[12] && n26==0){//nodo 26
                n26=1;
                nodo[26]=value;
                var nodo26 = $("#nodo26");
                nodo26.text(value);
                nodo26.css({"border-radius": "20px"});
                nodo26.removeClass("text-white");
                nodo26.addClass("border");
                $("#linea27").fadeIn(ms);

                ino[22]=nodo[26];
                pre[23]=nodo[26];
                post[19]=nodo[26];
            }

            else if(value>nodo[0] && value>nodo[2] && value<nodo[6] && value<nodo[13] && n27==0){//nodo 27
                n27=1;
                nodo[27]=value;
                var nodo27 = $("#nodo27");
                nodo27.text(value);
                nodo27.css({"border-radius": "20px"});
                nodo27.removeClass("text-white");
                nodo27.addClass("border");
                $("#linea28").fadeIn(ms);

                ino[24]=nodo[27];
                pre[26]=nodo[27];
                post[22]=nodo[27];
            }

            else if(value>nodo[0] && value>nodo[2] && value<nodo[6] && value>nodo[13] && n28==0){//nodo 28
                n28=1;
                nodo[28]=value;
                var nodo28 = $("#nodo28");
                nodo28.text(value);
                nodo28.css({"border-radius": "20px"});
                nodo28.removeClass("text-white");
                nodo28.addClass("border");
                $("#linea29").fadeIn(ms);

                ino[26]=nodo[28];
                pre[27]=nodo[28];
                post[23]=nodo[28];
            }

            else if(value>nodo[0] && value>nodo[2] && value>nodo[6] && value<nodo[14] && n29==0){//nodo 29
                n29=1;
                nodo[29]=value;
                var nodo29 = $("#nodo29");
                nodo29.text(value);
                nodo29.css({"border-radius": "20px"});
                nodo29.removeClass("text-white");
                nodo29.addClass("border");
                $("#linea30").fadeIn(ms);

                ino[28]=nodo[29];
                pre[29]=nodo[14];
                post[25]=nodo[29];
            }

            else if(value>nodo[0] && value>nodo[2] && value>nodo[6] && value>nodo[14] && n30==0){//nodo 30
                n30=1;
                nodo[30]=value;
                var nodo30 = $("#nodo30");
                nodo30.text(value);
                nodo30.css({"border-radius": "20px"});
                nodo30.removeClass("text-white");
                nodo30.addClass("border");
                $("#linea31").fadeIn(ms);

                ino[30]=nodo[30];
                pre[31]=nodo[30];
                post[26]=nodo[30];
            }

            
            //Nodos insertados
            //-------------------------------------
            $("#serie").text("");//para vaciar y luego actualizar con ayuda del bucle
                for(let i=0; i<nodo.length; i++){
                    if(nodo[i]!=undefined){//controlando objetos vacios
                        $("#serie").append(nodo[i]+", ");
                    }
                }
            cont++;
            $("#input").val('');
            //--------------------------------------

        }else if(value==""){
            alert("Introduzca un valor");
        }else{
            alert("El nodo " + value + " ya existe, por favor introducir uno distinto. Intenta introducir el mismo nodo otra vez");
            error=0;
        }
    })






    //recorridos

    /*var inorden = new Array(nodo[15], nodo[7], nodo[16], nodo[3], nodo[17], nodo[8], nodo[18], nodo[1], nodo[19], nodo[9], nodo[20], nodo[4], nodo[21], nodo[10], nodo[22], nodo[0], nodo[23], nodo[11], nodo[24], nodo[5], nodo[25], nodo[12], nodo[26], nodo[2], nodo[27], nodo[13], nodo[28], nodo[6], nodo[29], nodo[14], nodo[30]);*/

    //inorden
    $("#in").on("click",function(){
        $("#recorrido-in").text("");
        for(let i=0; i<ino.length; i++){
            if(ino[i]!=undefined){//controlando undefinited, omitiendo los que estan vacios
                $("#recorrido-in").append(ino[i]+", ");
            }
        }
    })
 
    //preorden
    $("#pre").on("click",function(){
        $("#recorrido-pre").text("");
        for(let i=0; i<pre.length; i++){
            if(pre[i]!=undefined){
                $("#recorrido-pre").append(pre[i]+", ");
            } 
        }
    })

    //postorden
    $("#post").on("click",function(){
        $("#recorrido-post").text("");
        for(let i=0; i<post.length; i++){
            if(post[i]!=undefined){
                $("#recorrido-post").append(post[i]+", ");
            }
        }
    })
    






    //eliminar nodos, funciona sin negative numbers
    var resta1 = 0;
    var resta2 = 0;

    

    //evento para eliminar nodo
    $("#delete").on("click",()=>{
        const value = $("#input").val();
        
        //comprobando existencia del nodo
        for(let i=0; i<nodo.length && error2==1; i++){
            erro2=1;
           if(value==nodo[i]){
               error2=0;
               indice=i;
               alert("Coincidencia encontrada");
           }
        }

        if(error2==0 && value!=""){
            switch(indice){
                case 7:
                    alert("eliminando nodo con index "+indice);
                    if(nodo[15]>0 && nodo[7]>0 && nodo[16]>0){
                        resta1=nodo[7]-nodo[15];
                        resta2=nodo[16]-nodo[7];
                    }
                    if(resta1<resta2){
                        alert("nodo con valor "+ nodo[15]+" hereda lugar del nodo con valor "+nodo[7]);
                        nodo[7]=nodo[15];
                        $("#nodo7").text(nodo[7]);
                        $("#linea16").fadeOut(700); 
                        $("#nodo15").addClass("text-white");
                        $("#nodo15").removeClass("border");
                        n15=0;
                    }
                    if(resta2<resta1){
                        alert("nodo con valor "+ nodo[16]+" hereda lugar de nodo con valor "+nodo[7]);
                        nodo[7]=nodo[16];
                        $("#nodo7").text(nodo[7]);
                        $("#linea17").fadeOut(ms);
                        $("#nodo16").addClass("text-white");
                        $("#nodo16").removeClass("border");
                        n16=0;
                    }if(resta1==resta2){
                        alert("nodo con valor "+ nodo[15]+" hereda lugar del nodo con valor "+nodo[7]);
                        nodo[7]=nodo[15];
                        $("#nodo7").text(nodo[7]);
                        $("#linea16").fadeOut(700); 
                        $("#nodo15").addClass("text-white");
                        $("#nodo15").removeClass("border");
                        n15=0;
                    }
            }
        }
        
        if(value==""){
            alert("Introduzca un valor");
        }else if(error2==1){
            alert("No existe el nodo introducido");
        }

        //------------------------
        $("#input").val("");//limpiando entrada de datos
        error=0;//desactivando error por coincidencia
        //------------------------
    })// fin de evento delete





        //longitud de camino interno y externo, en conjunto con sus medias.
        var cant_nodo1=0, cant_nodo2=0, cant_nodo3=0, cant_nodo4=0, cant_nodo5=0;
        var Ntotal=0;
        var lci=0,mlci=0,lce=0,mlce=0;
        var acum1=0, acum2=0, acum3=0, acum4=0, acum5=0, acum6=0; //para acumular los resultados de cada fila
        var h=0; //altura del arbol

        var Hadd1=0, Hadd2=0, Hadd3=0, Hadd4=0, Hadd5=0, Hadd6=0;//hojas agregadas por fila dependiendo de la altura del arbol - lce

        $("#camino").on("click", function(){
            for(let i=0; i<31; i++){

                //fila 1
                if(nodo[i]!=undefined && i==0){
                    cant_nodo1++;
                    Ntotal++;
                }
    
                //fila 2
                if(nodo[i]!=undefined && i>0 && i<3){
                    cant_nodo2++;
                    Ntotal++;
                }
    
                //fila 3
                if(nodo[i]!=undefined && i>2 && i<7){
                    cant_nodo3++;
                    Ntotal++;
                }
    
                //fila 4
                if(nodo[i]!=undefined && i>6 && i<15){
                    cant_nodo4++;
                    Ntotal++;
                }
    
                //fila 5
                if(nodo[i]!=undefined && i>14){
                    cant_nodo5++;
                    Ntotal++;
                }

                //altura 1
                if(cant_nodo1!=0 && cant_nodo2==0 && cant_nodo3==0 && cant_nodo4==0 && cant_nodo5==0){
                    Hadd1 = 1 - cant_nodo1;
                    Hadd2 = (cant_nodo1*1);

                //altura 2
                }else if(cant_nodo1!=0 && cant_nodo2!=0 && cant_nodo3==0 && cant_nodo4==0 && cant_nodo5==0){
                    Hadd1 = 1 - cant_nodo1;//esta declaracion conservara la misma estructura en las demas declaraciones
                    Hadd2 = 2 - cant_nodo2;//esta declaracion conservara la misma estructura en las demas declaraciones
                    Hadd3 = (cant_nodo2*2);  

                //altura 3
                }else if(cant_nodo1!=0 && cant_nodo2!=0 && cant_nodo3!=0 && cant_nodo4==0 && cant_nodo5==0){
                    Hadd1 = 1 - cant_nodo1;
                    Hadd2 = 3 - cant_nodo2;
                    Hadd3 = (6 - cant_nodo3);
                    Hadd4 = (cant_nodo3*3);

                //altura 4
                }else if(cant_nodo1!=0 && cant_nodo2!=0 && cant_nodo3!=0 && cant_nodo4!=0 && cant_nodo5==0){
                    Hadd1 = 1 - cant_nodo1;
                    Hadd2 = 4 - cant_nodo2;
                    Hadd3 = (8 - cant_nodo3);
                    Hadd4 = (16 - cant_nodo4);
                    Hadd5 = (cant_nodo4*4);

                //altura 5
                }else if(cant_nodo1!=0 && cant_nodo2!=0 && cant_nodo3!=0 && cant_nodo4!=0 && cant_nodo5!=0){
                    Hadd1 = 1 - cant_nodo1;
                    Hadd2 = 5 - cant_nodo2;
                    Hadd3 = (10 - cant_nodo3);
                    Hadd4 = (20 - cant_nodo4);
                    Hadd5 = (40 - cant_nodo5);
                    Hadd6 = (cant_nodo5*5);
                }
    
                
                if(i==30){
                    //Longitud de camino interno
                    lci = (cant_nodo1*1) + (cant_nodo2*2) + (cant_nodo3*3) + (cant_nodo4*4) + (cant_nodo5*5);
                    mlci = lci/Ntotal;
                
                    /*alert(cant_nodo1+" - "+cant_nodo2+" - "+cant_nodo3+" - "+cant_nodo4+" - "+cant_nodo5);
                    alert(lci+"/"+Ntotal +" = "+ mlci);*/

                    $("#lci").text("");
                    $("#mlci").text("");
                    $("#lci").append(" "+Math.round(lci * 100) / 100);
                    $("#mlci").append(" "+Math.round(mlci * 100) / 100);


                    //Longitud de camino externo
                    lce = (1*Hadd1) + (2*Hadd2) + (3*Hadd3) + (4*Hadd4) + (5*Hadd5) + (6*Hadd6);
                    mlce = lce/(Hadd1 + Hadd2 + Hadd3 + Hadd4 + Hadd5 + Hadd6);

                    /*alert(Hadd1 + " - " + Hadd2 + " - " + Hadd3 + " - " + Hadd4 + " - " + Hadd5 + " - " + Hadd6);
                    alert(lce+"/"+Ntotal +" = "+ mlce);*/

                    $("#lce").text("");
                    $("#mlce").text("");
                    $("#lce").append(Math.round(lce * 100) / 100);
                    $("#mlce").append(Math.round(mlce * 100) / 100);
                }   
            }     
         })// find evento camino
        
     
