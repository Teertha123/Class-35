class Player{

constructor(){

}
getCount(){
    var playerCountref=database.ref("playerCount")
    playerCountref.on("value",function(data){
      playerCount=data.val();
    })
}
}

   
