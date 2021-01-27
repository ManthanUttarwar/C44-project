class Player
{
    constructor()
    {

    }

    updatePlayerInfo(data)
    {
      database.ref('/').update({
          name:data
      })
      
    }
}