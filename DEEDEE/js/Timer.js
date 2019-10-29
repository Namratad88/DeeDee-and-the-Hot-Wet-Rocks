var gameState1={};
var timer=0;
var Timer = new Phaser.Class({
	Extends:Phaser.Scene,
	initialize: function BootScene(){
		Phaser.Scene.call(this,{
			key:'Timer',
			active:false
		});
	},
	init:function(){

	},

	create:function(){
    const rect=this.add.rectangle(blocksize/2,this.cameras.main.height-blocksize,blocksize,blocksize,0xbbbbbb);
    text = this.add.text(0,height-blocksize).setScrollFactor(0).setFontSize(32).setColor('#000000');
  }

  update:function(time){
    timer++;
    if(timer%100===0)
    {
      rect.width=(timer%100)*blocksize;
    }
    if (time > 30) {
       text.setText([
        'Player Life: '+ life
      ]);
  	}
	}	
})
