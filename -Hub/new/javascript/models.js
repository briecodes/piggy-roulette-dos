exports.make = function(blipp, scene, sW, sH) {
  scene.pigs = ['pig1', 'pig2', 'pig3', 'pig4'];
  scene.rhandoPig = [];

  scene.ph1_group = scene.addSprite('');

  scene.ph1_bg = scene.addSprite('ph1_bg.png')
  .setName('ph1_bg')
  .setScale(1280, 718, 0)
  .setTranslation(0, 0, 0)
  .setAlpha(0)
  .setHidden(true)
  .setParent(scene.ph1_group);

  scene.ph1_trees3 = scene.addSprite('ph1_trees3.png')
  .setName('ph1_trees3')
  .setScale(1280, 718, 0)
  .setTranslation(0, 0, 20)
  .setAlpha(0)
  .setHidden(true)
  .setParent(scene.ph1_group);

  scene.ph1_trees2 = scene.addSprite('ph1_trees2.png')
  .setName('ph1_trees2')
  .setScale(1280, 718, 0)
  .setTranslation(0, 0, 40)
  .setAlpha(0)
  .setHidden(true)
  .setParent(scene.ph1_group);

  scene.ph1_lights = scene.addSprite('lights.png')
  .setName('ph1_lights')
  .setScale((119/sH)*(sH*(1329/119)), (119/sH)*sH, 0)
  .setTranslation(0, -243.5, 50)
  .setAlpha(0)
  .setHidden(true)
  .setBlend('add')
  .setParent(scene.ph1_group);

  scene.ph1_trees1 = scene.addSprite('ph1_trees1.png')
  .setName('ph1_trees1')
  .setScale(1280, 718, 0)
  .setTranslation(0, 0, 60)
  .setAlpha(0)
  .setHidden(true)
  .setParent(scene.ph1_group);

  scene.startButton = scene.addSprite('start.png')
  .setName('Start Button')
  .setScale((49/sH)*(sH*(82/49)), (49/sH)*sH, 0)
  .setTranslation(-86, -143.5, 70)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(false);

  scene.instructionsButton = scene.addSprite('instructions.png')
  .setName('Instructions Button')
  .setScale((49/sH)*(sH*(140/49)), (49/sH)*sH, 0)
  .setTranslation(66, -143.5, 70)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(false);

  scene.titleLockup = scene.addSprite('lockup.png')
  .setName('Title Lockup')
  .setScale((254/sH)*(sH*(322/254)), (254/sH)*sH, 0)
  .setTranslation(0, 39, 70)
  .setAlpha(0)
  .setHidden(true);

  scene.instructionsPanel = scene.addSprite('instructionspanel.png')
  .setName('Instructions Panel')
  .setScale((376/sH)*(sH*(376/376)), (376/sH)*sH, 0)
  .setTranslation(0, 0, 71)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(false);


  scene.backButton = scene.addSprite('back.png')
  .setName('Back Button')
  .setScale((49/sH)*(sH*(82/49)), (49/sH)*sH, 0)
  .setTranslation(-581, 314.5, 70)
  .setAlpha(0)
  .setHidden(true)
  .setClickable(true);

  scene.background = scene.addSprite('background.png')
  .setName('background')
  .setScale(1280, 718, 0)
  .setTranslation(0, 0, 0)
  .setAlpha(0)
  .setHidden(true);

  scene.foreground = scene.addSprite('foreground.png')
  .setName('foreground')
  .setScale(1280, 718, 0)
  .setTranslation(0, 0, 20)
  .setAlpha(0)
  .setHidden(true);

  scene.pig1 = scene.addSprite('pig1a.png')
  .setName('pig1')
  .setScale((225/sH)*(sH*(188/225)), (225/sH)*sH, 0)
  .setTranslation(-369, -230.5, 25)
  .setAlpha(0)
  .setHidden(true);

  scene.pig1.setTextures(['pig1a.png','pig1b.png']);

  scene.pig2 = scene.addSprite('pig2.png')
  .setName('pig2')
  .setScale((169/sH)*(sH*(236/169)), (169/sH)*sH, 0)
  .setTranslation(-143, -259.5, 25)
  .setAlpha(0)
  .setHidden(true);

  scene.pig3 = scene.addSprite('pig3a.png')
  .setName('pig3')
  .setScale((223/sH)*(sH*(214/223)), (223/sH)*sH, 0)
  .setTranslation(115, -239.5, 25)
  .setAlpha(0)
  .setHidden(true);

  scene.pig3.setTextures(['pig3a.png','pig3b.png']);

  scene.pig4 = scene.addSprite('pig4a.png')
  .setName('pig4')
  .setScale((223/sH)*(sH*(175/223)), (223/sH)*sH, 0)
  .setTranslation(340.5, -237.5, 25)
  .setAlpha(0)
  .setHidden(true);

  scene.pig4.setTextures(['pig4a.png','pig4b.png']);

  scene.boom1 = scene.addSprite('blank.png')
  .setName('boom')
  .setScale((482/sH)*(sH*(482/271)), (482/sH)*sH, 0)
  .setTranslation(-369, -230.5, 26)
  .setAlpha(0)
  .setHidden(true);

  scene.boom2 = scene.addSprite('blank.png')
  .setName('boom')
  .setScale((482/sH)*(sH*(482/271)), (482/sH)*sH, 0)
  .setTranslation(-143, -259.5, 26)
  .setAlpha(0)
  .setHidden(true);

  scene.boom3 = scene.addSprite('blank.png')
  .setName('boom')
  .setScale((482/sH)*(sH*(482/271)), (482/sH)*sH, 0)
  .setTranslation(107, -253.5, 26)
  .setAlpha(0)
  .setHidden(true);

  scene.boom4 = scene.addSprite('blank.png')
  .setName('boom')
  .setScale((482/sH)*(sH*(482/271)), (482/sH)*sH, 0)
  .setTranslation(340.5, -237.5, 26)
  .setAlpha(0)
  .setHidden(true);

  scene.youWon = scene.addSprite('youwon.png')
  .setName('You’ve Won! Graphic')
  .setScale((120/sH)*(sH*(228/120)), (120/sH)*sH, 0)
  .setAlpha(0)
  .setHidden(true);

  scene.youLost = scene.addSprite('wrong1.png')
  .setName('You’ve Lost! Graphic')
  .setScale((120/sH)*(sH*(228/120)), (120/sH)*sH, 0)
  .setTranslation(0, 0, 67)
  .setAlpha(0)
  .setHidden(true);

  scene.youLost.setTextures(['wrong1.png', 'wrong1.png', 'wrong2.png', 'wrong3.png', 'wrong4.png']);

  scene.instructionsButton.onTouchEnd = function(){
    scene.titleLockup.animate().alpha(0).duration(500);
    scene.startButton.animate().alpha(0).duration(500).onEnd = function(){
      scene.startButton.setClickable(false);
    };
    scene.instructionsButton.animate().alpha(0).duration(500).onEnd = function(){
      scene.instructionsButton.setClickable(false);
    };
    scene.instructionsPanel.setHidden(false);
    scene.instructionsPanel.animate().alpha(1).duration(1000);
    scene.instructionsPanel.setClickable(true);
  }

  scene.instructionsPanel.onTouchEnd = function(){
    this.setClickable(false);
    this.animate().alpha(0).duration(1000).onEnd = function(){
      this.setHidden(true);
      scene.startButton.animate().alpha(1).duration(500).onEnd = function(){
        scene.startButton.setClickable(true);
      }
      scene.instructionsButton.animate().alpha(1).duration(500).onEnd = function(){
        scene.instructionsButton.setClickable(true);
      }
      scene.titleLockup.animate().alpha(1).duration(500);
    }
  }

  scene.startButton.onTouchEnd = function(){
    scene.rhandoPig = scene.pigs[Math.floor(Math.random() * scene.pigs.length)];
    blipp.log(scene.rhandoPig);
    scene.startButton.animate().alpha(0).duration(500).onEnd = function(){
      scene.startButton.setClickable(false);
      scene.startButton.setHidden(true);
    };
    scene.instructionsButton.animate().alpha(0).duration(500).onEnd = function(){
      scene.instructionsButton.setClickable(false);
      scene.instructionsButton.setHidden(true);
    };
    scene.titleLockup.animate().alpha(0).duration(500).onEnd = function(){
      scene.titleLockup.setHidden(true);
    }
    scene.ph1_group.animate().scale(3, 3, 100).duration(1000).onEnd = function(){
      scene.ph1_bg.animate().alpha(0).duration(500).onEnd = function(){
        scene.ph1_bg.setHidden(true);
      };
      scene.ph1_lights.animate().alpha(0).duration(500).onEnd = function(){
        scene.ph1_lights.setHidden(true);
      };
      scene.ph1_trees3.animate().alpha(0).duration(500).onEnd = function(){
        scene.ph1_trees3.setHidden(true);
      };
      scene.ph1_trees2.animate().alpha(0).duration(500).onEnd = function(){
        scene.ph1_trees2.setHidden(true);
      };
      scene.ph1_trees1.animate().alpha(0).duration(500).onEnd = function(){
        scene.ph1_trees1.setHidden(true);
      };

      scene.background.setHidden(false);
      scene.foreground.setHidden(false);
      scene.background.animate().alpha(1).duration(1000).onEnd = function(){
        scene.foreground.animate().alpha(1).duration(1000);
      };
      scene.backButton.setHidden(false);
      scene.backButton.animate().alpha(1).duration(1000);
      setTimeout(function(){
        scene.doDatPig();
      },2000)
    };
  }

  // ======================================================
  // =                      Game                         =
  // ======================================================

  scene.backButton.onTouchEnd = function(){
    scene.backToTheStart();
  }

  scene.youWon.onTouchEnd = function(){
    scene.backToTheStart();
  }

  scene.youLost.onTouchEnd = function(){
    scene.startAgain();
    this.animate().alpha(0).duration(500);
    this.setHidden(true);
  }

  scene.pig1.onTouchEnd = function(){
    if ( this.name === scene.rhandoPig ) {
      scene.goBoom(scene.boom1);
      setTimeout(function(){
        scene.pig1.animate().alpha(0).duration(50);
        scene.pig1.setHidden(true);
      }, 50);
    }else{
      scene.loser();
      scene.playSound('no.mp3', false);
      this.setActiveTexture(1);
      this.animate().rotationZ(-5).duration(250).onEnd = function(){
        this.animate().rotationZ(0).duration(250);
        this.setActiveTexture(0);
      };
    }
  };

  scene.pig2.onTouchEnd = function(){
    if ( this.name === scene.rhandoPig ) {
      scene.goBoom(scene.boom2);
      setTimeout(function(){
        scene.pig2.animate().alpha(0).duration(50);
        scene.pig2.setHidden(true);
      }, 500);
    }else{
      scene.loser();
      scene.playSound('no.mp3', false);
      var naox2 = this.getTranslationX();
      this.animate().translationX(naox2+3).duration(250).onEnd = function(){
        this.animate().translationX(naox2).duration(250);
      };
    }
  };

  scene.pig3.onTouchEnd = function(){
    if ( this.name === scene.rhandoPig ) {
      scene.goBoom(scene.boom3);
      setTimeout(function(){
        scene.pig3.animate().alpha(0).duration(50);
        scene.pig3.setHidden(true);
      }, 500);
    }else{
      scene.loser();
      scene.playSound('no.mp3', false);
      this.setActiveTexture(1);
      this.animate().rotationZ(-5).duration(250).onEnd = function(){
        this.animate().rotationZ(0).duration(250);
        this.setActiveTexture(0);
      };
    }
  };

  scene.pig4.onTouchEnd = function(){
    if ( this.name === scene.rhandoPig ) {
      scene.goBoom(scene.boom4);
      setTimeout(function(){
        scene.pig4.animate().alpha(0).duration(50);
        scene.pig4.setHidden(true);
      }, 500);
    }else{
      scene.loser();
      scene.playSound('no.mp3', false);
      this.setActiveTexture(1);
      this.animate().rotationZ(5).duration(250).onEnd = function(){
        this.animate().rotationZ(0).duration(250);
        this.setActiveTexture(0);
      };
    }
  };

};
