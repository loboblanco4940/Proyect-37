class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    question.hide();
    //escribe aquí el código para cambiar el color de fondo 
    background("Pink");
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    
    //llama aquí a getContestantInfo( )
    if(allContestants !== undefined){
      fil("Blue");
      textSize(20);
      text("NOTA: El concursante que respondio correctamente,esta resaltado en color verde!",130,230);
      Contestant.getPlayerInfo();
    }

    //escribe la condición para comprobar si contestantInfor no está indefinido 
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
        else
        fill("red");
    }
    //escribe aquí el código para agregar una nota
    display_position +=20;
    textSize(15);
    text(allContestants[plr].name + allContestants[plr].answer,120,display_position)
    //escribe el código para resaltar al concursante que respondió correctamente
    
  }

}
