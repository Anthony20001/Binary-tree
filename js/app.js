
    var nodo = new Array(31); //Arreglo que almacenara los nodos
    var nodoDuplicado = false;//error de duplicacion
    var error2 = 1;//no se puede eliminar un nodo que no existe
    var indice = 0;//para evento delete

    var ino = new Array(31);//recorrido inorden
    var pre = new Array(31);//preorden
    var post = new Array(31);//postorden


    //Ocultando lineas
    $('.container-tree img').fadeOut(0);

    //Estilos generales de los nodos
    $('._row > div').addClass("p-2 bd-highlight text-black").css({"visibility":"hidden"});

    //milisegundos de animation
    var ms = 350;

    //Nodos inmutables
    var inmutable = new Array(31);

    //Evita la mutacion de los nodos
    //inmutable.forEach(item => {item = true});
    for(let i = 0; i < inmutable.length; i++){
        inmutable[i] = true;
    }


    //evento al dar click en insertar
    $("#add").on("click", function(e){
        e.preventDefault();
        const value = $("#input").val();

        
        //comprobando duplicación de nodo
        for(let i=0; i<nodo.length && (nodoDuplicado == false); i++){
            //para reestablecer el estado false, esto en caso que haya cambiado a true
            nodoDuplicado = false;
            if(value==nodo[i]){
                nodoDuplicado = true;
                $('#input').val('');
                throw alert("Valor duplicado");
            }
        }

        
        function nuevoNodo(valor, fila, lineaNum, hijoNum){
            var row = $('.container-tree').children('._row').eq(fila);
            var nodoStyle = row.children().eq(hijoNum);
            nodoStyle.text(valor);
            nodoStyle.css({"border-radius": "20px"});
            nodoStyle.css({"visibility": "visible"});
            nodoStyle.addClass("border");

            if(fila > 0){
                var linea = $('.container-tree').children('img').eq(lineaNum);
                linea.fadeIn(ms);
            }
        }


        if((nodoDuplicado==false) && value!=""){
            //========= fila 0 =========//
            if(nodo[0]==null){//nodo 0
                nodo[0] = value;
                nuevoNodo(value, 0, -1, 0);

                ino[15]=nodo[0];
                pre[0]=nodo[0];
                post[30]=nodo[0];

             //========= fila 1 =========//
            }else if(value<nodo[0] && nodo[1]==null && (inmutable[0]==true)){//nodo 1
                inmutable[0]=false;
                nodo[1] = value;
                nuevoNodo(value, 1, 0, 0);

                ino[7]=nodo[1];
                pre[1]=nodo[1];
                post[14]=nodo[1];
                
            }else if(value>nodo[0] && nodo[2]==null && (inmutable[1]==true)){//nodo 2
                inmutable[1]=false;
                nodo[2] = value;
                nuevoNodo(value, 1, 1, 1);

                ino[23]=nodo[2];
                pre[16]=nodo[2];
                post[29]=nodo[2];

            //========= fila 2 =========//
            }else if(value<nodo[0] && value<nodo[1] && nodo[1]==nodo[1] && nodo[3]==null && (inmutable[2]==true)){//nodo 3
                inmutable[3]=false;
                nodo[3]=value;
                nuevoNodo(value, 2, 2, 0);

                ino[3]=nodo[3];
                pre[2]=nodo[3];
                post[6]=nodo[3];

            }else if(value<nodo[0] && value>nodo[1] && nodo[4]==null && (inmutable[4]==true)){//nodo 4
                inmutable[4]=false;
                nodo[4]=value;   
                nuevoNodo(value, 2, 3, 1);

                ino[11]=nodo[4];
                pre[9]=nodo[4];
                post[13]=nodo[4];

            }else if(value>nodo[0] && nodo[2]==nodo[2] && value<nodo[2] && (inmutable[5]==true)){//nodo 5
                inmutable[5]=false;
                nodo[5]=value;
                nuevoNodo(value, 2, 4, 2);

                ino[19]=nodo[5];
                pre[17]=nodo[5];
                post[21]=nodo[5];

            }else if(value>nodo[0] && nodo[2]==nodo[2] && value>nodo[2] && (inmutable[6]==true)){//nodo 6
                inmutable[6]=false;
                nodo[6]=value;
                nuevoNodo(value, 2, 5, 3);

                ino[27]=nodo[6];
                pre[24]=nodo[6];
                post[28]=nodo[6];

            //========= fila 3 =========//
            }else if(value<nodo[0] && value<nodo[1] && value<nodo[3] && (inmutable[7]==true)){//nodo 7
                inmutable[7]=false;
                nodo[7]=value;
                nuevoNodo(value, 3, 6, 0);
                
                ino[1]=nodo[7];
                pre[3]=nodo[7];
                post[2]=nodo[7];

            }else if(value<nodo[0] && value<nodo[1] && value>nodo[3] && (inmutable[8]==true)){//nodo 8
                inmutable[8]=false;
                nodo[8]=value;
                nuevoNodo(value, 3, 7, 1);

                ino[5]=nodo[8];
                pre[6]=nodo[8];
                post[5]=nodo[8];

            }else if(value<nodo[0] && value>nodo[1] && value<nodo[4] && (inmutable[9]==true)){//nodo 9
                inmutable[9]=false;
                nodo[9]=value;
                nuevoNodo(value, 3, 8, 2);

                ino[9]=nodo[9];
                pre[10]=nodo[9];
                post[9]=nodo[9];

            }else if(value<nodo[0] && value>nodo[1] && value>nodo[4] && (inmutable[10]==true)){//nodo 10
                inmutable[10]=false;
                nodo[10]=value;
                nuevoNodo(value, 3, 9, 3);

                ino[13]=nodo[10];
                pre[13]=nodo[10];
                post[12]=nodo[10];
                
            }else if(value>nodo[0] && value<nodo[2] && value<nodo[5] && (inmutable[11]==true)){//nodo 11
                inmutable[11]=false;
                nodo[11]=value;
                nuevoNodo(value, 3, 10, 4);

                ino[17]=nodo[11];
                pre[18]=nodo[11];
                post[17]=nodo[11];

            }else if(value>nodo[0] && value<nodo[2] && value>nodo[5] && (inmutable[12]==true)){//nodo 12
                inmutable[12]=true;
                nodo[12]=value;
                nuevoNodo(value, 3, 11, 5);

                ino[21]=nodo[12];
                pre[21]=nodo[12];
                post[20]=nodo[12];

            }else if(value>nodo[0] && value>nodo[2] && value<nodo[6] && (inmutable[13]==true)){//nodo 13
                inmutable[13]=false;
                nodo[13]=value;
                nuevoNodo(value, 3, 12, 6);

                ino[25]=nodo[13];
                pre[25]=nodo[13];
                post[24]=nodo[13];

            }else if(value>nodo[0] && value>nodo[2] && value>nodo[6] && (inmutable[14]==true)){//nodo 14
                inmutable[14]=false;
                nodo[14]=value;
                nuevoNodo(value, 3, 13, 7);

                ino[29]=nodo[14];
                pre[28]=nodo[14];
                post[27]=nodo[14];
            }

            //========= fila 4 =========//
            else if(value<nodo[0] && value<nodo[1] && value<nodo[3] && value<nodo[7] && (inmutable[15]==true)){//nodo 15
                inmutable[15]=false;
                nodo[15]=value;
                nuevoNodo(value, 4, 14, 0);

                ino[0]=nodo[15];
                pre[4]=nodo[15];
                post[0]=nodo[15];
            }

            else if(value<nodo[0] && value<nodo[1] && value<nodo[3] && value>nodo[7] && (inmutable[16]==true)){//nodo 16
                inmutable[16]=false;
                nodo[16]=value;
                nuevoNodo(value, 4, 15, 1);

                ino[2]=nodo[16];
                pre[5]=nodo[16];
                post[1]=nodo[16];
            }

            else if(value<nodo[0] && value<nodo[1] && value>nodo[3] && value<nodo[8] && (inmutable[17]==true)){//nodo 17
                inmutable[17]=false;
                nodo[17]=value;
                nuevoNodo(value, 4, 16, 2);

                ino[4]=nodo[17];
                pre[7]=nodo[17];
                post[3]=nodo[17];
            }

            else if(value<nodo[0] && value<nodo[1] && value>nodo[3] && value>nodo[8] && (inmutable[18]==true)){//nodo 18
                inmutable[18]=false;
                nodo[18]=value;
                nuevoNodo(value, 4, 17, 3);

                ino[6]=nodo[18];
                pre[8]=nodo[18];
                post[4]=nodo[18];
            }

            else if(value<nodo[0] && value>nodo[1] && value<nodo[4] && value<nodo[9] && (inmutable[19]==true)){//nodo 19
                inmutable[19]=false;
                nodo[19]=value;
                nuevoNodo(value, 4, 18, 4);

                ino[8]=nodo[19];
                pre[11]=nodo[19];
                post[7]=nodo[19];
            }

            else if(value<nodo[0] && value>nodo[1] && value<nodo[4] && value>nodo[9] && (inmutable[20]==true)){//nodo 20
                inmutable[20]=false;
                nodo[20]=value;
                nuevoNodo(value, 4, 19, 5);

                ino[10]=nodo[20];
                pre[12]=nodo[20];
                post[8]=nodo[20];
            }

            else if(value<nodo[0] && value>nodo[1] && value>nodo[4] && value<nodo[10] && (inmutable[21]==true)){//nodo 21
                inmutable[21]=false;
                nodo[21]=value;
                nuevoNodo(value, 4, 20, 6);

                ino[12]=nodo[21];
                pre[14]=nodo[21];
                post[10]=nodo[21];
            }

            
            else if(value<nodo[0] && value>nodo[1] && value>nodo[4] && value>nodo[10] && (inmutable[22]==true)){//nodo 22
                inmutable[22]=false;
                nodo[22]=value;
                nuevoNodo(value, 4, 21, 7);

                ino[14]=nodo[22];
                pre[15]=nodo[22];
                post[11]=nodo[22];
            }

            else if(value>nodo[0] && value<nodo[2] && value<nodo[5] && value<nodo[11] && (inmutable[23]==true)){//nodo 23
                inmutable[23]=false;
                nodo[23]=value;
                nuevoNodo(value, 4, 22, 8);

                ino[16]=nodo[23];
                pre[19]=nodo[23];
                post[15]=nodo[23];
            }

            else if(value>nodo[0] && value<nodo[2] && value<nodo[5] && value>nodo[11] && (inmutable[24]==true)){//nodo 24
                inmutable[24]=false;
                nodo[24]=value;
                nuevoNodo(value, 4, 23, 9);

                ino[18]=nodo[24];
                pre[20]=nodo[24];
                post[16]=nodo[24];
            }

            else if(value>nodo[0] && value<nodo[2] && value>nodo[5] && value<nodo[12] && (inmutable[25]==true)){//nodo 25
                inmutable[25]=false;
                nodo[25]=value;
                nuevoNodo(value, 4, 24, 10);

                ino[20]=nodo[25];
                pre[22]=nodo[25];
                post[18]=nodo[25];
            }

            else if(value>nodo[0] && value<nodo[2] && value>nodo[5] && value>nodo[12] && (inmutable[26]==true)){//nodo 26
                inmutable[26]=false;
                nodo[26]=value;
                nuevoNodo(value, 4, 25, 11);

                ino[22]=nodo[26];
                pre[23]=nodo[26];
                post[19]=nodo[26];
            }

            else if(value>nodo[0] && value>nodo[2] && value<nodo[6] && value<nodo[13] && (inmutable[27]==true)){//nodo 27
                inmutable[27]=false;
                nodo[27]=value;
                nuevoNodo(value, 4, 26, 12);

                ino[24]=nodo[27];
                pre[26]=nodo[27];
                post[22]=nodo[27];
            }

            else if(value>nodo[0] && value>nodo[2] && value<nodo[6] && value>nodo[13] && (inmutable[28]==true)){//nodo 28
                inmutable[28]=false;
                nodo[28]=value;
                nuevoNodo(value, 4, 27, 13);

                ino[26]=nodo[28];
                pre[27]=nodo[28];
                post[23]=nodo[28];
            }

            else if(value>nodo[0] && value>nodo[2] && value>nodo[6] && value<nodo[14] && (inmutable[29]==true)){//nodo 29
                inmutable[29]=false;
                nodo[29]=value;
                nuevoNodo(value, 4, 28, 14);

                ino[28]=nodo[29];
                pre[29]=nodo[14];
                post[25]=nodo[29];
            }

            else if(value>nodo[0] && value>nodo[2] && value>nodo[6] && value>nodo[14] && (inmutable[30]==true)){//nodo 30
                inmutable[30]=false;
                nodo[30]=value;
                nuevoNodo(value, 4, 29, 15);

                ino[30]=nodo[30];
                pre[31]=nodo[30];
                post[26]=nodo[30];
            }

            
            //Panel de nodos insertados
            //-------------------------------------
            $("#serie").text("");//para vaciar y luego actualizar con ayuda del bucle
                for(let i=0; i<nodo.length; i++){
                    if(nodo[i]!=undefined){//controlando objetos vacios
                        $("#serie").append(nodo[i]+", ");
                    }
                }

            $("#input").val('');
            //--------------------------------------

        }else if(value==""){
            alert("Introduzca un valor");
        }else{
            //para recetear la condicion
            nodoDuplicado=false;
        }
    })





    //============================= recorridos ==============================//

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
        
     
