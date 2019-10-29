//load state
var Load = new Phaser.Class({
	Extends:Phaser.Scene,

	initialize:function BootScene(){
		Phaser.Scene.call(this,{
			key:'Load',
			active:false //listening resize event
		});
	},
	init:function(){},
	preload:function(){
		//animation xingnan
		//load animation
	//	this.load.spritesheet('playerSheet','assets/Player/playerSheet.png',{frameWidth:64,frameHeight:64});
		this.load.spritesheet('playerSheet','assets/Player/Charactersheet.png',{frameWidth:64,frameHeight:64});
		this.load.image('playerImage','assets/Player/Character_left.png');
		// this.load.image('bug1', 'assets/Turtle_1.png');
  // 		this.load.image('bug2', 'assets/Medium_Log.png');
  // 		this.load.image('bug3', 'assets/Medium_Log.png');
		// this.load.image('car1','assets/Car.png');
  // 		this.load.image('car2','assets/Truck_long.png');
  // 		this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/physics/codey.png');
  // 		this.load.image('title','assets/FROGGER_title.png');
  // 		this.load.image('bush','assets/Green_Bush.png');
 	// 	this.load.image('safe','assets/Safe_Zone.png');
  // 		this.load.image('log','assets/Medium_Log.png');
  		this.load.image('car1L','assets/Enemy/Car1.png');
		this.load.image('car2L','assets/Enemy/Car2.png');
		this.load.image('car1R','assets/Enemy/Car1R.png');
		this.load.image('car2R','assets/Enemy/Car2R.png');
		this.load.image('rock','assets/Enemy/Rock_Safe.png');
		this.load.image('rock2','assets/Enemy/Rock_Safe2.png');
		this.load.image('road','assets/Environment/Road.png');
		this.load.image('lava', 'assets/Environment/lava_full.png');
		this.load.image('lava2', 'assets/Environment/lava_full2.png');
		this.load.image('damagedRoad','assets/Environment/DRoad.png');
		this.load.image('vDamagedRoad','assets/Environment/VDRoad.png');
		this.load.image('safezone','assets/Environment/Safe road.png');
		//animation of time: lava
		this.load.spritesheet('timerSheet','assets/Environment/lavaTimer.png',{frameWidth:64,frameHeight:64});
		this.load.image('lavaTimer','assets/Environment/lavaText1.png')
		//barries
		this.load.image('barries','assets/Environment/Trafficbarrier1.png');

		//animation of lava road
		this.load.spritesheet('lavaRoad','assets/Environment/lavaRoad.png',{frameWidth:768,frameHeight:64})

		//animation of goal
		this.load.image('boat','assets/Goal/Boat.png');
		this.load.spritesheet('seaSheet','assets/Goal/goalSheet.png',{frameWidth:768,frameHeight:64});
		this.load.image('beach','assets/Goal/Safe_beach.png');
		//lava is coming
		this.load.spritesheet('lavaComing','assets/LavaAnimation/lavaComing.png',{frameWidth:640,frameHeight:768});

		this.load.spritesheet('Rock','assets/Enemy/Rock_sheet.png',{frameWidth:64,frameHeight:64});
		this.load.image('Firetruck','assets/Enemy/Firetruck.png');
		
		//sounds
		this.load.audio('BoneCrunch','assets/Sound/Flattened_BoneCrunch.wav');
		this.load.audio('DeathScream','assets/Sound/Flattened_Death_Scream.wav');
		this.load.audio('JumpSound','assets/Sound/Jump_Sound_On_Key_Press.wav');
		this.load.audio('LavaDeath','assets/Sound/Lava_Death_Sizzle.wav');
		this.load.audio('BackgroundSound','assets/Sound/music.wav');
		this.load.audio('WalkSound','assets/Sound/Walk_Sound_on_Key_Press.wav');
		this.load.audio('WinSound','assets/Sound/win_sound.wav');

		//player death
		this.load.spritesheet('CharacterDeath','assets/Player/Character_Death.png',{frameWidth:64,frameHeight:64});
		this.load.spritesheet('FireDeath','assets/Player/FireDeath.png',{frameWidth:64,frameHeight:64});

		this.load.image('jump_sign','assets/Environment/jump_sign.png');

		this.load.image('menu','assets/BackGround/title.png');


	},
	create:function(){

		 var loadText = this.add.text(300,300,'Loading...',{font:'Helvetica',fontSize:'24px',fill:'#fff'});

		 this.scene.start('Menu');
		// this.scene.start('Timer',{playerLife:playerLife});
	}
})
