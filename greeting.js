class greeting
{
    constructor()
    {
        this.input = createInput("NAME")
        this.button = createButton('Play')
        this.Greeting = createElement('h2')
        this.gameName = createElement('h2') 
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.Greeting.hide();
        this.gameName.hide();
    }

    display()
    {
        this.gameName.html("Dot-Line-Dot")
        this.gameName.position(150,20)


        this.button.mousePressed(()=>{
        var name = this.input.value();
        mainPlayer.updatePlayerInfo(name);

        this.Greeting.html("Hello "+name)
        this.Greeting.position(250,250)
        })

    }
}