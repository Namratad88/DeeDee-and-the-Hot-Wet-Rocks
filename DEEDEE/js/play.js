const gameState = {};
var width =640;
var height =2112 ;
var playerLife = 3;
var blocksize = 64;
var flag = 0;
var jumptimer=0;
var timerCnt = 0;
var wholeTimer = 3000;
var playerDelay = 150;

var Play = new Phaser.Class({
  Extends:Phaser.Scene,
  initialize: function BootScene(){
    Phaser.Scene.call(this,{
      key:'Play',
      active:false
    });
  },
  init:function(){
   
    

    this.sound.add('BoneCrunch');
    this.sound.add('DeathScream');
    this.sound.add('JumpSound');
    this.sound.add('LavaDeath');
    this.sound.add('WalkSound');
    this.sound.add('WinSound');

     var lavaRoad = {
        key:'lavaAnim',
        frames:this.anims.generateFrameNumbers('lavaRoad',{
            start:0,
            end:1
        }),
        frameRate:1,
        repeat:-1
    }
    this.anims.create(lavaRoad);
    //gameState.timer=this.add.sprite(0,this.cameras.main.scrollY+this.cameras.main.height-blocksize/2,"timerSheet");
    gameState.lavas = this.add.group();

    var seaSheet = {
        key:'sea',
        frames:this.anims.generateFrameNumbers('seaSheet',{
            start:0,
            end:1
        }),
        frameRate:10,
        repeat:-1
    }
    this.anims.create(seaSheet);
    gameState.goal=this.add.sprite(5*blocksize,blocksize/2,'seaSheet');
    gameState.goal.anims.load('sea');
    gameState.goal.anims.play('sea',true);

    this.add.sprite(width/2,blocksize/2,'boat');
    this.add.sprite(width/2, blocksize + 32, 'beach');
    this.add.sprite(width/2, blocksize*2 + 32, 'road');
    gameState.lava = this.add.sprite(width/2, blocksize*3 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    gameState.lava = this.add.sprite(width/2, blocksize*4 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    this.add.sprite(width/2, blocksize*5 + 32, 'road');
    this.add.sprite(width/2, blocksize*6 + 32, 'safezone');
    gameState.lava = this.add.sprite(width/2, blocksize*7 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    this.add.sprite(width/2, blocksize*8 + 32, 'road');
    this.add.sprite(width/2, blocksize*9 + 32, 'road');
    gameState.lava = this.add.sprite(width/2, blocksize*10 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    this.add.sprite(width/2, blocksize*11 + 32, 'safezone');
    gameState.lava = this.add.sprite(width/2, blocksize*12 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    gameState.lava = this.add.sprite(width/2, blocksize*13 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    gameState.lava = this.add.sprite(width/2, blocksize*14 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    gameState.lava = this.add.sprite(width/2, blocksize*15 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    this.add.sprite(width/2, blocksize*16 + 32, 'safezone');
    this.add.sprite(width/2, blocksize*17 + 32, 'road');
    this.add.sprite(width/2, blocksize*18 + 32, 'road');
    this.add.image(width/2 - 64, blocksize*18 + 32, 'jump_sign');
    gameState.lava = this.add.sprite(width/2, blocksize*19 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    this.add.sprite(width/2, blocksize*20 + 32, 'road');
    this.add.sprite(width/2, blocksize*21 + 32, 'safezone');
    gameState.lava = this.add.sprite(width/2, blocksize*22 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    gameState.lava = this.add.sprite(width/2, blocksize*23 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    gameState.lava = this.add.sprite(width/2, blocksize*24 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    gameState.lava = this.add.sprite(width/2, blocksize*25 + 32, 'lavaRoad');
    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);
    this.add.sprite(width/2, blocksize*26 + 32, 'safezone');
    this.add.sprite(width/2, blocksize*27 + 32, 'road');
    this.add.sprite(width/2, blocksize*28 + 32, 'road');
    this.add.sprite(width/2, blocksize*29 + 32, 'road');
    this.add.sprite(width/2, blocksize*30 + 32, 'road');
    this.add.sprite(width/2, blocksize*31 + 32, 'safezone');

    gameState.lava.anims.load('lavaAnim');
    gameState.lava.anims.play('lavaAnim',true);



    const lanes1 = ['safezone','road','road','road','road','safezone','lava','lava','lava','lava','safezone','road','lava','road','road','safezone']

    // for(var i = 0;i<31;i++){
    //   if(i%5 === 0){
    //     this.add.sprite(width/2,i*blocksize+blocksize/2,'safezone').setDisplaySize(width,blocksize);
    //   }else{
    //     this.add.sprite(width/2,i*blocksize+blocksize/2,'roadNormal');
    //   }
    // }
    // this.add.sprite(width/2,height+blocksize/2,'safezone').setDisplaySize(width,blocksize);
    life = playerLife;
    //gameState.bushTop = this.add.sprite(450,25,'bush');
    //life = this.add.text(0, 575, 'Player Life:'+playerLife, { fontSize: '15px', fill: '#000000' });

//this.add.sprite(5*blocksize+blocksize/2,32,'barries');

    gameState.barries = this.add.group();
    for(var i = 5;i<33;i++){
      if(lanes1[i]==='safezone' ){
        var cnt = i/5;

        p = Math.floor(9/(cnt+1));
        for(var j = 1;j<=10;j++){
          var flag = 0;
          for(var m = 5-cnt; m<=10;m=m+p){
            if(j==m){
              flag = 1;
              break;
            }
          }
          if(flag === 0){
              barry = this.add.sprite((j-1)*blocksize+blocksize/2,(i+1)*blocksize+blocksize/2,'barries').setDisplaySize(50,56);
              //barry.body.onCollide = true;
              gameState.barries.add(barry);
          }
        }
      }
    }
    for(var i = 0;i<10;i++){
      if(i%2 === 0){
         barry = this.add.sprite(i*blocksize+blocksize/2,21*blocksize+blocksize/2,'barries').setDisplaySize(50,56);
        gameState.barries.add(barry);
      }
    }
   // barries = this.add.sprite(32,32,'barries');



  },

  create:function () {


    gameState.active = true;

    gameState.cursors = this.input.keyboard.createCursorKeys();
    text = this.add.text(300,64*11).setScrollFactor(0).setFontSize(32).setColor('#000000');
    text.depth=15;

    //timer
    //var y = this.cameras.main.scrollY+this.cameras.main.height-blocksize/2;
    //this.rect=this.add.rectangle(blocksize/2,this.cameras.main.scrollY+this.cameras.main.height-blocksize/2,blocksize,blocksize,0xbbbbbb);

    //game.camera.follow(gameState.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    //this.cameras.main.setZoom(0.1);

     var RollingRock = {
        key:'Rock',
        frames:this.anims.generateFrameNumbers('Rock',{
            start:0,
            end:7
        }),
        frameRate:6,
        repeat:-1
    }
    this.anims.create(RollingRock);


    gameState.enemies = this.add.group();
    //logs
    gameState.logs = this.add.group();

    const bugs = ['', '' , 'Firetruck', 'Rock', 'Rock', 'Firetruck', '', 'rock2', 'rock', 'rock2', 'rock', '', '', '', '', '', '', 'rock2', 'rock', '', 'rock', '', '', 'Rock', 'Firetruck', '', '', 'Rock', '', 'rock2', 'Firetruck', '', ''];

    const speeds = [,  ,       4,          2,     2 ,       4,        ,      2,     3 ,      3,       2, '', '', '', '', '', '',      2,       3, '',      1.8, '', '',     2,           4, '', '',     2, '',      2, 4, '', ''];


    function makeBug() {
      const lane = this.lane;

      const isEven = Boolean(lane % 2);
      const startY = height - (blocksize/2 + (lane * blocksize));

      //const bugs=['','','car1L','rock','','car2R','','','car1R','car2R','','','rock','','rock','rock','','','','','','','rock','rock','rock','rock','','car2R','car1R','car2R','car1R',''];
      // for(var i = 0; i<33;i++){
      //   if (i===7){
      //     bugs[i]
      //   }
      //   if(i%5===2){
      //     bugs[i]='';
      //   }
      //   if(i%5 ===1 || i%5 ===4){
      //     bugs[i]='car1';
      //   }else{
      //     bugs[i]='car2';
      //   }
      // }
      //const bugs = ['','', 'car1', 'car2','car2','car1','','bug1','bug2','bug3','bug1'];
      const bugChoice = bugs[lane];

      let startX, angle;

      if (isEven) {
        startX = width;
        angle = 90;
      } else {
        startX = 0;
        angle = -90;
      }
      //creat enemy & log
      //if(lane>6){

        //const log = gameState.logs.create(startX, startY, bugChoice).setAngle(angle).setDisplaySize(22,150);

      //  log.speed = this.speed;
    //  }else{
      if(bugChoice === 'rock'||bugChoice === 'rock2'){
        const log = gameState.logs.create(startX, startY, bugChoice).setAngle(angle);
        log.speed = this.speed;
        log.depth = 1;
      }
      else if(bugChoice ==='Firetruck'){
        const enemy = gameState.enemies.create(startX, startY, bugChoice).setAngle(angle);
        enemy.speed = this.speed;
        enemy.depth = 1;
      }
      else if(bugChoice === 'Rock'){
        const enemy = gameState.enemies.create(startX, startY, bugChoice).setAngle(angle);
        enemy.anims.load('Rock');
        enemy.anims.play('Rock',true);
        enemy.speed = this.speed;
        enemy.depth = 1;
      }

 //     }

    }

    //const lanes = [ 2, 3, 4, 5, 7, 8, 9,10];
    const lanes = [];
    var cnt = 0;
    for(var i =0;i<33;i++){
      // if(bugs[i] != ''){
      //   lanes[cnt]=i;
      //   cnt++;
      // }
      lanes[i]=i;
    }


    //const speeds = [3, 3, 5, 4, 2, 3, 3, 2];
    // const speeds = [];
    // for(var i = 0;i<lanes.length;i++){
    //   if(i%2===0){
    //     speeds[i]=2;
    //   }
    //   else{
    //     speeds[i]=4;
    //   }
    // }

    //const delays = [0.05, 1, 1, 0.05, 0.5, 0.75, 0.75, 0.5];
    //bug&log's creation Events
    gameState.bugCreationEvents = [];
    gameState.logCreationEvents = [];

    //bug:
    for (let i = 0; i < lanes.length; i++) {
      if(bugs[i] === 'rock'||bugs[i]==='rock2'){
        gameState.logCreationEvents.push(this.time.addEvent({
        //here to control the num of lane
          delay: Math.random() * 1000 +1800,
          callback: makeBug,
          callbackScope: { lane: lanes[i], speed: speeds[i] },
          loop: true,
        }))
      }else if(bugs[i] != ''){
        gameState.bugCreationEvents.push(this.time.addEvent({
        //here to control the num of lane
          delay: Math.random() * 1000 +1800,
          callback: makeBug,
          callbackScope: { lane: lanes[i], speed: speeds[i] },
          loop: true,
        }))
      }

    }


    //animation player
    var playerJumpLeft = {
        key:'left',
        frames:this.anims.generateFrameNumbers('playerSheet',{
          start:4,
          end:6,
        }),
        frameRate:15,
        repeat:0
    }
    var playerJumpRight = {
        key:'right',
        frames:this.anims.generateFrameNumbers('playerSheet',{
            start:2,
            end:4
        }),
        frameRate:15,
        repeat:0
    }
    var playerJumpUp = {
        key:'up',
        frames:this.anims.generateFrameNumbers('playerSheet',{
            start:0,
            end:2
        }),
        frameRate:15,
        repeat:0
    }
    var playerJumpDown = {
        key:'down',
        frames:this.anims.generateFrameNumbers('playerSheet',{
            start:7,
            end:9
        }),
        frameRate:15,
        repeat:0
    }

    this.anims.create(playerJumpLeft);
    this.anims.create(playerJumpRight);
    this.anims.create(playerJumpUp);
    this.anims.create(playerJumpDown);
    gameState.player = this.physics.add.sprite(width/2+blocksize/2,height-3*(blocksize/2),'playerSheet').setDisplaySize(56,56);
    //gameState.player.bringToTop();
    gameState.player.frame=0;
    gameState.player.depth=10;
    gameState.player.setBounce(0.1);

    //gameState.player.setCollideBounds(true);
    gameState.player.anims.load('left');
    gameState.player.anims.load('right');
    gameState.player.anims.load('up');
    gameState.player.anims.load('down');
    //end

    //add camera
    this.cameras.main.setBounds(0,0,width,height)
    this.cameras.main.setSize(width, blocksize*12);
    this.cameras.main.centerOn(gameState.player.x,gameState.player.y-blocksize*5);
    this.cameras.main.startFollow(gameState.player,true,0.1,0.1);

    this.rect = this.add.rectangle(5*blocksize,this.cameras.main.scrollY+this.cameras.main.height-blocksize/2,10*blocksize,64,0xff0000);
    this.rect.depth = 11;
    //lava animation
   var lavaTimer = {
        key:'timer',
        frames:this.anims.generateFrameNumbers('timerSheet',{
            start:0,
            end:1
        }),
        frameRate:2,
        repeat:-1
    }
    this.anims.create(lavaTimer);
    gameState.timer=this.add.sprite(0,this.cameras.main.scrollY+this.cameras.main.height-blocksize/2,"timerSheet");
    gameState.timer.anims.load('timer');
    gameState.timer.anims.play('timer',true);
    gameState.timer.depth = 12;
  //  gameState.player = this.add.sprite(width / 2, height - 75, 'codey').setDisplaySize(35,35);

    this.input.on('pointerup', () => {
      if (gameState.active === false) {
        this.scene.restart();
    }
  })
},

update:function(time) {
//if(gameState.player.y%(blocksize*11)==0)
//{
//  this.cameras.main.scrollY=blocksize*11;
//}
  //timer
  //this.rect.y
  //this.rect.setDisplaySize()
  timerCnt++;
  gameState.timer.y = this.cameras.main.scrollY+this.cameras.main.height-blocksize/2;
  this.rect.y = this.cameras.main.scrollY+this.cameras.main.height-blocksize/2;
  gameState.timer.setDisplaySize(10*blocksize/wholeTimer*timerCnt,64);

  // this.time.addEvent({
  //   delay:30000000000,
  //   loop:true
  // });

  if(gameState.timer.scaleX/2>=blocksize/6){
       

        var lavaComes = {
            key:'lavaComing',
            frames:this.anims.generateFrameNumbers('lavaComing',{
                start:0,
                end:19
            }),
            frameRate:50,
            repeat:0
        }
    this.anims.create(lavaComes);
    gameState.lavaComes=this.add.sprite(width/2,height-blocksize*12/2,"lavaComing");
    gameState.lavaComes.anims.load('lavaComing');
    gameState.lavaComes.anims.play('lavaComing',true);
    gameState.lavaComes.depth = 20;

    var lavaDelay = this.time.addEvent({
      delay:800,
      callback:destroy,
      callbackScope: this,
      loop:false
    })

    //const lavaFlag = 0;
    //setTimeout(destroy,300);
    function destroy(){
       gameState.active = false;
       for (let e of gameState.bugCreationEvents) {
          e.destroy();
        }
        for(let e of gameState.logCreationEvents){
          e.destroy();
        }
        playerLife = 3;
          //life.destroy();
        wholeTimer = 3000;
        timerCnt = 0;
       // gameState.music.isPlaying = false;
        this.scene.start('GameOver',{status:0});
        //lavaFlag = 1;
    }

    
   

       
  }


jumptimer++;

//player delay;
playerDelay--;

this.game.scale.pageAlignHorizontally=true;
this.game.scale.pageAlignVertically=true;
this.game.scale.refresh();

  if (gameState.active) {
    const playerRectNext = gameState.player.getBounds();
    var movementFlag = 1;

    if (playerDelay<=0) {
       text.setText([
        'Player Life: '+ life
      ]);
      // if(Phaser.Input.Keyboard.JustDown(gameState.cursors.)){
      //   gameState.player.y-=50;
      // }

      if (Phaser.Input.Keyboard.JustDown(gameState.cursors.left) && gameState.player.x > blocksize/2) {
        //collision with barries
        playerRectNext.x -=blocksize;
        gameState.barries.getChildren().forEach(barry=>{
          if (Phaser.Geom.Intersects.RectangleToRectangle(playerRectNext, barry.getBounds())){
            movementFlag = 0;
          }
        })
        if(movementFlag === 1){
          gameState.player.x -= blocksize;
          //audio
          this.sound.play('WalkSound');
         //animation
          gameState.player.anims.play('left',true);
        }
      } else if (Phaser.Input.Keyboard.JustDown(gameState.cursors.right) && gameState.player.x < width-blocksize/2) {
        //collision with barries
        playerRectNext.x +=blocksize;
        gameState.barries.getChildren().forEach(barry=>{
       if (Phaser.Geom.Intersects.RectangleToRectangle(playerRectNext, barry.getBounds())){
        movementFlag = 0;
       }

      })
        if(movementFlag === 1){

         gameState.player.x += blocksize;
         //audio
          this.sound.play('WalkSound');
        gameState.player.anims.play('right',true);
        }
      }

      if (Phaser.Input.Keyboard.JustDown(gameState.cursors.up) && gameState.player.y > blocksize/2) {
        if(gameState.player.y-blocksize<=blocksize/2)
        // if(gameState.player.y-blocksize<=blocksize/2 && gameState.player.x>=125 &&gameState.player.x<=175
        //   ||gameState.player.x>=275&&gameState.player.x<=325
        //   || gameState.player.x>=425&&gameState.player.x<=475)//goal
        {
          //collision with barries
          playerRectNext.y -=blocksize;
          gameState.barries.getChildren().forEach(barry=>{
            if (Phaser.Geom.Intersects.RectangleToRectangle(playerRectNext, barry.getBounds())){
              movementFlag = 0;
            }

          })
          if(movementFlag === 1){
            gameState.player.x = (gameState.player.x/64)*64+24;
            gameState.player.y -= blocksize;
            //audio
          this.sound.play('WalkSound');
            gameState.player.anims.play('up',true);
          }
        }
        else if(gameState.player.y-blocksize>blocksize/2){
          playerRectNext.y -=blocksize;
          gameState.barries.getChildren().forEach(barry=>{
            if (Phaser.Geom.Intersects.RectangleToRectangle(playerRectNext, barry.getBounds())){
              movementFlag = 0;
            }

          })
          if(movementFlag === 1){

            gameState.player.y -= blocksize;
            //audio
          this.sound.play('WalkSound');
            gameState.player.anims.play('up',true);
          }
        }
      } else if (Phaser.Input.Keyboard.JustDown(gameState.cursors.down) && gameState.player.y < height-blocksize-blocksize/2) {
          playerRectNext.y +=blocksize;
          gameState.barries.getChildren().forEach(barry=>{
            if (Phaser.Geom.Intersects.RectangleToRectangle(playerRectNext, barry.getBounds())){
              movementFlag = 0;
            }

          })
          if(movementFlag === 1){

            gameState.player.y += blocksize;
            //audio
          this.sound.play('WalkSound');
            gameState.player.anims.play('down',true);
          }

      }

      //press space to jump
      if (Phaser.Input.Keyboard.JustDown(gameState.cursors.space) && gameState.player.y > blocksize/2 ) {
        // if(gameState.player.y-blocksize*2<=blocksize/2 && gameState.player.x>=125 &&gameState.player.x<=175
        //   ||gameState.player.x>=275&&gameState.player.x<=325
        //   || gameState.player.x>=425&&gameState.player.x<=475)
        //final goal
       
        playerRectNext.y -=blocksize*2;
          gameState.barries.getChildren().forEach(barry=>{
            if (Phaser.Geom.Intersects.RectangleToRectangle(playerRectNext, barry.getBounds())){
              movementFlag = 0;
            }

          })
          if(movementFlag === 1){
            //audio
            this.sound.play('JumpSound');
            gameState.player.y-=blocksize;
            gameState.player.anims.play('up',true);
            gameState.player.y-=blocksize;
            gameState.player.anims.play('up',true);
        }
        // gameState.player.y-=blocksize;
        // gameState.player.anims.play('up',true);
        // gameState.player.y-=blocksize;
        // gameState.player.anims.play('up',true);
          //animation
        //  if(gameState.player.anims.currentAnim.key ==='up'&&gameState.player.y-blocksize*2>=blocksize/2){

        //  }//else if(gameState.player.anims.currentAnim.key ==='down'&&gameState.player.y+blocksize*2<=height-blocksize/2){
          //  gameState.player.y+=blocksize;
          //    gameState.player.anims.play('down',true);
          //  gameState.player.y+=blocksize;
          //  gameState.player.anims.play('down',true);
        //  }
          //else if(gameState.player.anims.currentAnim.key ==='left'&&gameState.player.x-blocksize*2>=blocksize/2){
          //  gameState.player.x-=blocksize*2;
          //  gameState.player.anims.play('left',true);
        //  }else if(gameState.player.anims.currentAnim.key ==='right'&&gameState.player.x+blocksize*2<=width-blocksize/2){
          //  gameState.player.x+=blocksize*2;
          //  gameState.player.anims.play('right',true);
      //    }


          //end

        // else if(gameState.player.y-blocksize*2>blocksize/2){
        //   if(gameState.player.anims.currentAnim.key ==='up'){
        //     gameState.player.y-=blocksize*2;
        //     gameState.player.anims.play('up',true);
        //   }else if(gameState.player.anims.currentAnim.key ==='down'){
        //     gameState.player.y+=blocksize*2;
        //     gameState.player.anims.play('down',true);
        //   }else if(gameState.player.anims.currentAnim.key ==='left'){
        //     gameState.player.x-=blocksize*2;
        //     gameState.player.anims.play('left',true);
        //   }else if(gameState.player.anims.currentAnim.key ==='right'){
        //     gameState.player.x+=blocksize*2;
        //     gameState.player.anims.play('right',true);
        //   }
        // }

    }
      // } else if (Phaser.Input.Keyboard.JustDown(gameState.cursors.down) && gameState.player.y < 525) {
      //   gameState.player.y += 50;
      // }
    }

    const playerRect = gameState.player.getBounds();

    gameState.enemies.getChildren().forEach(bug => {
      if (bug.angle === 90) {
        bug.x -= bug.speed;
      } else if (bug.angle === -90) {
        bug.x += bug.speed;
      }
      if(bug.x<0-bug.height||bug.x>width+bug.height){
        bug.destroy();
      }
       if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, bug.getBounds())) {
        
         var SquishedDeath = {
            key:'squishedDeath',
            frames:this.anims.generateFrameNumbers('CharacterDeath',{
                start:0,
                end:1
            }),
            frameRate:0.1,
            repeat:0
        }
    gameState.player.destroy();
    this.anims.create(SquishedDeath);
    gameState.player=this.add.sprite(gameState.player.x,gameState.player.y,"CharacterDeath");
    gameState.player.anims.load('squishedDeath');
    gameState.player.anims.play('squishedDeath',true);
    gameState.player.depth = 0;

   
       // this.sound.play('BoneCrunch');
    this.time.addEvent({
      delay:200,
      callback:destroy1,
      callbackScope: this,
      loop:false
    })

    function destroy1(){
      gameState.active = false;
	  this.sound.play('DeathScream',{
      totalDuration:0.01,
       loop:false
      });
        //this.add.text(300, 300, 'Game Over!', { fontSize: '15px', fill: '#000000' })
        for (let e of gameState.bugCreationEvents) {
          e.destroy();
        }
        for(let e of gameState.logCreationEvents){
          e.destroy();
        }
        playerLife-=1;


        if(playerLife == 0)
        {
          playerLife = 3;
          //life.destroy();
          wholeTimer = 3000;
          timerCnt = 0;
          playerDelay = 150;
         // gameState.music.isPlaying = false;
          this.scene.start('GameOver',{status:0});
        }
        else{
          //life.destroy();
          playerDelay = 150;
          this.scene.restart();
        }
    }
        
      }
    })

    var xPostion = gameState.player.x;
    flag = 0;
    gameState.logs.getChildren().forEach(log => {
     //logs movement
      if (log.angle === 90) {
        log.x -= log.speed;
      } else if (log.angle === -90) {
        log.x += log.speed;
      }
      // if(log.x<0-log.height||log.x>width+log.height){
      //   log.destroy();
      // }//logs movement end
      //player.y = log.y, player move with log, if out of log, then restart the game
      if (flag === 0 &&gameState.player.y === log.y && gameState.player.x-gameState.player.width/2>=log.x-log.height/2
        && gameState.player.x+gameState.player.width/2<= log.x+log.height/2) {

      	flag =1;
        if (log.angle === 90) {
          gameState.player.x -= log.speed;
        } else if (log.angle === -90) {
          gameState.player.x += log.speed;
        }
       
        //on log and collision with world wall then restart
        if(gameState.player.x<0||gameState.player.x>width){
          //audio
          

          var FireDeath = {
            key:'fireDeath',
            frames:this.anims.generateFrameNumbers('FireDeath',{
                start:0,
                end:1
            }),
            frameRate:0.1,
            repeat:0
        }
    gameState.player.destroy();
    this.anims.create(FireDeath);
    gameState.player=this.add.sprite(gameState.player.x,gameState.player.y,"FireDeath");
    gameState.player.anims.load('fireDeath');
    gameState.player.anims.play('fireDeath',true);
    gameState.player.depth = 10;


           this.time.addEvent({
            delay:200,
            callback:destroy12,
            callbackScope: this,
            loop:false
          })
           function destroy12(){
           	this.sound.play('DeathScream',{
            totalDuration:0.01,
       loop:false
      });
          this.sound.play('LavaDeath',{
       loop:false
      });
            gameState.active = false;
            console.debug("1");
          for (let e of gameState.logCreationEvents) {
            e.destroy();
          }
          for(let e of gameState.bugCreationEvents){
            e.destroy();
          }
          playerLife-=1;

          if(playerLife === 0)
          {
            playerLife = 3;
            wholeTimer = 3000;
            timerCnt = 0;
            playerDelay = 150;
            //gameState.music.isPlaying = false;
            this.scene.start('GameOver',{status:0});
          }
          else{
            //life.destroy();
            flag =1;
            playerDelay = 150;
            this.scene.restart();
          }
           }

          
        }//collision &restart end

      }



   })
    //jump outside the log
     //jump outside the log
    gameState.logs.getChildren().forEach(log => {
      if(flag === 0&&gameState.player.y === log.y){
        

         var FireDeath = {
            key:'fireDeath',
            frames:this.anims.generateFrameNumbers('FireDeath',{
                start:0,
                end:1
            }),
            frameRate:0.1,
            repeat:0
        }
    gameState.player.destroy();
    this.anims.create(FireDeath);
    gameState.player=this.add.sprite(gameState.player.x,gameState.player.y,"FireDeath");
    gameState.player.anims.load('fireDeath');
    gameState.player.anims.play('fireDeath',true);
    gameState.player.depth = 10;

           this.time.addEvent({
            delay:200,
            callback:destroy13,
            callbackScope: this,
            loop:false
          })

           function destroy13(){
           	 this.sound.play('DeathScream',{
          totalDuration:0.01,
       loop:false
      });
          this.sound.play('LavaDeath',{
       loop:false
      });
            gameState.active = false;
          for (let e of gameState.logCreationEvents) {
            e.destroy();
          }
          for(let e of gameState.bugCreationEvents){
            e.destroy();
          }
          playerLife-=1;
          if(playerLife == 0)
          {
            playerLife = 3;
            flag =1;
            wholeTimer = 3000;
            timerCnt = 0;
            //gameState.music.isPlaying = false;
            this.scene.start('GameOver',{status:0});
          }
          else{
            //life.destroy();
            flag =1;
            playerDelay = 150;
            this.scene.restart();
          }
           }
        
      }
    })//jump outside the log end
//jump outside the log end
    flag = 0;//reset the flag


    //player can't move in lava row  3.6.9.12.18
    if(gameState.player.y === 4*blocksize+blocksize/2||gameState.player.y === 7*blocksize+blocksize/2
      ||gameState.player.y === 10*blocksize+blocksize/2||gameState.player.y === 13*blocksize+blocksize/2
      ||gameState.player.y === 19*blocksize+blocksize/2){
        //audio
        
         var FireDeath = {
            key:'fireDeath',
            frames:this.anims.generateFrameNumbers('FireDeath',{
                start:0,
                end:1
            }),
            frameRate:0.1,
            repeat:0
        }
    gameState.player.destroy();
    this.anims.create(FireDeath);
    gameState.player=this.add.sprite(gameState.player.x,gameState.player.y,"FireDeath");
    gameState.player.anims.load('fireDeath');
    gameState.player.anims.play('fireDeath',true);
    gameState.player.depth = 10;
           this.time.addEvent({
            delay:200,
            callback:destroy14,
            callbackScope: this,
            loop:false
          })

           function destroy14(){
           	this.sound.add('DeathScream',{
          totalDuration:0.01,
       loop:false
      });
        this.sound.add('LavaDeath',{
       loop:false
      });
               gameState.active = false;
          console.debug("3");
          for (let e of gameState.logCreationEvents) {
            e.destroy();
          }
          for(let e of gameState.bugCreationEvents){
            e.destroy();
          }
          playerLife-=1;
          if(playerLife == 0)
          {
            playerLife = 3;
            flag =1;
            wholeTimer = 3000;
            timerCnt = 0;
            playerDelay = 150;
            //gameState.music.isPlaying = false;
            this.scene.start('GameOver',{status:0});
          }
          else{
            //life.destroy();
            flag =1;
            playerDelay = 150;
            this.scene.restart();
          }
           }

       
    }


    if (gameState.player.y === blocksize/2+blocksize) {
    	this.sound.add('WinSound');
    	this.sound.play('WinSound');
      //this.add.text(300, 300, 'You Won!', { fontSize: '15px', fill: '#000000' });
      gameState.active = false;

      for (let e of gameState.bugCreationEvents) {
        e.destroy();
      }
      for(let e of gameState.logCreationEvents){
      	e.destroy();
      }
      playerLife = 3;
      wholeTimer = 3000;
      timerCnt = 0;
      playerDelay = 150;
      //gameState.music.isPlaying = false;
      this.scene.start('GameOver',{status:1});


    }
  }
}

});
