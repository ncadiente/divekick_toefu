//Responsible for preloading assets and switching to game state
//class constructor

ToeFu.Boot = function(){

};

ToeFu.Boot.prototype.preLoad = function(){
  //will preload all assets
};

ToeFu.Boot.prototype.create = function (){
  //switch to game state
  this.state.start( ToeFu.STATES.GAME );
};

