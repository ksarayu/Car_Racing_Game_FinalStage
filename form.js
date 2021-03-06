class Form{
    constructor(){
        this.title = createElement("h2");
        this.inputBox = createInput("Name: ");
        this.submitButton = createButton("Start Now!!");
        this.greeting = createElement("h4");
        this.reset = createButton("Reset");
    }

    display(){
        this.title.position(displayWidth/2.5, displayHeight/5);
        this.title.html("Racing Rodeo!!");

        this.inputBox.position(displayWidth/2.5, displayHeight/3.5);

        this.submitButton.position(displayWidth/2.5, displayHeight/3);
        this.submitButton.mousePressed(()=>{
            this.inputBox.hide();
            this.submitButton.hide();
            players.name = this.inputBox.value();
            player_count = player_count + 1;
            players.index = player_count;
            players.updatePlayerCount(player_count);
            players.updatePlayerInfo();
            this.greeting.position(displayWidth/3, displayHeight/3);
            this.greeting.html("Welcome to the game, " + players.name + "!! Please wait for the other players to join.");
        })

        this.reset.position(displayWidth - 100, 100);
        this.reset.mousePressed(()=>{
            game.updateGameState(0);
            players.updatePlayerCount(0);
            players.updateCarCount(0);
            var playersInfoRemove = database.ref("players");
            playersInfoRemove.remove();
        })

    }

    hide(){
        this.inputBox.hide();
        this.greeting.hide();
        this.submitButton.hide();
        this.title.hide();
    }
}