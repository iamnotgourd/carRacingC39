class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.reset = createButton('Reset')
    this.title = createElement('h2')
  }
  hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
    this.title.hide()
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2, 0);
    this.reset.position(displayWidth-100,50)
    
    
    this.input.position(displayWidth/2, displayHeight/2-100);
    this.button.position(displayWidth/2+60, displayHeight/2-50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name+"!" )
      this.greeting.position(displayWidth/2,displayHeight/4)
    })
    this.reset.mousePressed(()=>{
      game.update(0)
      player.updateCount(0)
      database.ref('players').remove()
    }
    )

  }
}
