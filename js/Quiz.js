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
    //write code here to hide question elements
question .hide();


    //write code to change the background color here
   background("aqua");
    //write code to show a heading for showing the result of Quiz
text("testResult",300,200)
    //call getContestantInfo( ) here
contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
if(allContestants!==undefined){
fill("blue");
text("note:correct ans in green color",130,230);
for(var plr in allContestants){
var correctAns = "2";
if (CorrectAns === allContestants[plr].answer)
  fill("Green")
  else
  fill("red");
}
    //write code to add a note here
}
    //write code to highlight contest who answered correctly
    
  }

}
