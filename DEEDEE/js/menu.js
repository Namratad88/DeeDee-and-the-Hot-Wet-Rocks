//Menu State
var gameState1={};
var Menu = new Phaser.Class({
	Extends:Phaser.Scene,
	initialize: function BootScene(){
		Phaser.Scene.call(this,{
			key:'Menu',
			active:false
		});
	},
	init:function(){

	},

	create:function(){

		//animation xingnan
		//animation of log
		// var log ={
		// 	key:'sink',
		// 	frames:this.anims.generateFrameNumbers('turtleSheet',{
		// 		start:0,
		// 		end:2,
		// 	}),
		// 	frameRate:2,
		// 	yoyo:true,
		// 	repeat:-1
		// };
		
		// anim = this.anims.create(log);
		// var turtleSheet = this.add.sprite(300,64,'turtleSheet');
		// turtleSheet.anims.load('sink');
		// //play the log animation
		// turtleSheet.anims.play('sink');

		// //frog's animation
		// var frogUp = {
		// 	key:'up',
		// 	frames:this.anims.generateFrameNumbers('frogSheet',{
		// 		start:6,
		// 		end:7,
		// 	}),
		// 	framRate:1,
		// 	repeat:1
		// };
		// //0,1
		// var frogDown = {
		// 	key:'down',
		// 	frames:this.anims.generateFrameNumbers('frogSheet',{
		// 		start:0,
		// 		end:1,
		// 	}),
		// 	framRate:1,
		// 	repeat:1
		// };
		// var frogRight = {
		// 	key:'right',
		// 	frames:this.anims.generateFrameNumbers('frogSheet',{
		// 		start:4,
		// 		end:5,
		// 	}),
		// 	framRate:1,
		// 	repeat:1
		// };
		// var frogLeft = {
		// 	key:'left',
		// 	frames:this.anims.generateFrameNumbers('frogSheet',{
		// 		start:2,
		// 		end:3,
		// 	}),
		// 	framRate:0,
		// 	repeat:1
		// };

		// this.anims.create(frogUp);
		// this.anims.create(frogDown);
		// this.anims.create(frogLeft);
		// this.anims.create(frogRight);

		// gameState1.player = this.add.sprite(width / 2, height - 175, 'frog');
		// gameState1.player.anims.load('up');
		// gameState1.player.anims.load('down');
		// gameState1.player.anims.load('left');
		// gameState1.player.anims.load('right');

		// gameState1.cursors = this.input.keyboard.createCursorKeys(); 
		// //end

		 //init sound
    		this.sound.add('BackgroundSound');

      		this.sound.play('BackgroundSound',{
       				loop:true
      		})


			// var title = this.add.sprite(300,200,'title');
			// var bushs = this.add.sprite(300,500,'bush');

			// //var bush2 = this.add.sprite()
			// var instructText = this.add.text(200, 450, 'Press Up to Start', { fontSize: '15px', fill: '#000000' });

			this.add.image(320,384,'menu');
			this.cursors = this.input.keyboard.createCursorKeys();

	},
	update:function (){
	//animation when input keys
	// if (Phaser.Input.Keyboard.JustDown(gameState1.cursors.left) && gameState1.player.x > 25) {
 //        gameState1.player.x -= 50;
 //        //animation left
 //        gameState1.player.anims.play('left',true);
 //      } else if (Phaser.Input.Keyboard.JustDown(gameState1.cursors.right) && gameState1.player.x < 575) {
 //        gameState1.player.x += 50;
 //        //animiation right
 //        gameState1.player.anims.play('right',true);
 //      }

 //      if (Phaser.Input.Keyboard.JustDown(gameState1.cursors.up) && gameState1.player.y > 25) {
 //        if(gameState1.player.y-50<=25 && gameState1.player.x>=125 &&gameState1.player.x<=175
 //          ||gameState1.player.x>=275&&gameState1.player.x<=325
 //          || gameState1.player.x>=425&&gameState1.player.x<=475)
 //        {
 //          gameState1.player.y -= 50;
 //          //animation up
 //          gameState1.player.anims.play('up',true);
 //        }
 //        else if(gameState1.player.y-50>25){
 //          gameState1.player.y -= 50;
 //          //animation up
 //          gameState1.player.anims.play('up',true);
 //        }
 //      } else if (Phaser.Input.Keyboard.JustDown(gameState1.cursors.down) && gameState1.player.y < 525) {
 //        gameState1.player.y += 50;
 //        //animation down
 //        gameState1.player.anims.play('down',true);
 //      }

 //      //press space to jump xingnan
 //      if (Phaser.Input.Keyboard.JustDown(gameState1.cursors.space) && gameState1.player.y > 25) {
 //        if(gameState1.player.y-100<=25 && gameState1.player.x>=125 &&gameState1.player.x<=175
 //          ||gameState1.player.x>=275&&gameState1.player.x<=325
 //          || gameState1.player.x>=425&&gameState1.player.x<=475)
 //        {
 //        	if(gameState1.player.anims.currentAnim.key === 'up'){
 //        		gameState1.player.y -= 100;
 //        		gameState1.player.anims.play('up',true);
 //        	}else if(gameState1.player.anims.currentAnim.key === 'down'){
 //        		gameState1.player.y += 100;
 //        		gameState1.player.anims.play('down',true);
 //        	}
          
 //        }
 //        else if(gameState1.player.y-100>25){
 //          if(gameState1.player.anims.currentAnim.key === 'up'){
 //        		gameState1.player.y -= 100;
 //        		gameState1.player.anims.play('up',true);
 //        	}else if(gameState1.player.anims.currentAnim.key === 'down'){
 //        		gameState1.player.y += 100;
 //        		gameState1.player.anims.play('down',true);
 //        	}
 //        }
 //      }
	//end


    



		if(Phaser.Input.Keyboard.JustDown(this.cursors.up)){
			this.scene.start('Play');
		}
	}
});


