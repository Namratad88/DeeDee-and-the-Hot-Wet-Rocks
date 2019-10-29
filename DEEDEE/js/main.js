/*const config = {
  width: 600,
  height: 600,
  parent:'canvas',
  backgroundColor: 0xaaffaa
}*/
var game;
window.onload = function(){
	const config = {
 	  width: 640,
  	height: 768,
  	backgroundColor: 0xff0000,
    physics:{
      default:'arcade',
      arcade:{
        debug:true
      }
    }
  	},

  	game = new Phaser.Game(config);
  	game.scene.add('Load',Load);
  	game.scene.add('Menu',Menu);
  	game.scene.add('Play',Play);
  	game.scene.add('GameOver',GameOver);
  	game.scene.start('Load');
}
