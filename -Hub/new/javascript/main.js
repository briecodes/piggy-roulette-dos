/*
 * <<<<===================================================================>>>>>
 * 	Title: Piggy Roulette Dos
 *	Dev: B
 *  Notes: The purpose of this blipp was to alliviate boredom.
    Key to this idea is a formula for setting proper scales to sprites. this
    ended up being the following line:
    .setScale((imgHeight/sH)*(sH*(imgWidth/imgHeight)), (imgHeight/sH)*sH, 0);
 *
 * <<<<===================================================================>>>>>
 */

var Blippar = require('blippar');
blipp = Blippar.blipp;
var myModels = require('./models');

// ======================================================
// =                        BLIPP                       =
// ======================================================

blipp.getPeel()
  .setOrientation('landscape')
  .setType('fit')
  .setScale(100);

var sW = 1280;
var sH = 718;

// ======================================================
// =                        SCENE                       =
// ======================================================

var scene = blipp.addScene('default');

scene.onCreate = function() {
  blipp.uiVisible('navBar', false);
  scene.setRequiredAssets(['explosion.mp4', 'youwon.png', 'wrong1.png', 'wrong2.png', 'wrong3.png', 'wrong4.png', 'no.mp3', 'screamingpig.mp3', 'back.png', 'instructions.png', 'instructionspanel.png', 'lockup.png', 'start.png', 'ph1_trees3.png', 'ph1_trees2.png', 'fog.png', 'legend_zelda.mp3', 'ph1_bg.png', 'ph1_lights.png', 'ph1_trees1.png', 'background.png', 'foreground.png', 'pig1a.png', 'pig1b.png', 'pig2.png', 'pig3a.png', 'pig3b.png', 'pig4a.png', 'pig4b.png']);
  myModels.make(blipp, scene, sW, sH);
};

scene.onShow = function() {
  scene.ph1_bg.setHidden(false);
  scene.ph1_trees3.setHidden(false);
  scene.ph1_trees2.setHidden(false);
  scene.ph1_trees1.setHidden(false);
  scene.ph1_lights.setHidden(false);
  scene.ph1_bg.animate().alpha(1).duration(1000);
  scene.ph1_lights.animate().alpha(1).duration(1000);
  scene.ph1_trees3.animate().alpha(1).duration(1000);
  scene.ph1_trees2.animate().alpha(1).duration(1000);
  scene.ph1_trees1.animate().alpha(1).duration(1000).onEnd = function(){
    scene.titleLockup.setHidden(false);
    scene.titleLockup.animate().alpha(1).duration(1000).onEnd = function(){
      scene.startButton.setHidden(false);
      scene.instructionsButton.setHidden(false);
      scene.startButton.animate().alpha(1).duration(1000);
      scene.instructionsButton.animate().alpha(1).duration(1000);
      scene.startButton.setClickable(true);
      scene.instructionsButton.setClickable(true);
      scene.playSound('legend_zelda.mp3', true);
    };
  };
  scene.subtleShake(scene.ph1_trees3);
  scene.hover(scene.ph1_lights, 2000, 5);
};

// ======================================================
// =                      PH 1                         =
// ======================================================

scene.startAgain = function(){
  scene.rhandoPig = scene.pigs[Math.floor(Math.random() * scene.pigs.length)];
  blipp.log(scene.rhandoPig);
  scene.pig1.animate().alpha(0).duration(500).onEnd = function(){
    scene.pig1.animate().alpha(1).duration(500).onEnd = function(){
      scene.pig1.setClickable(true);
    }
  }
  scene.pig2.animate().alpha(0).duration(500).onEnd = function(){
    scene.pig2.animate().alpha(1).duration(500).onEnd = function(){
      scene.pig2.setClickable(true);
    }
  }
  scene.pig3.animate().alpha(0).duration(500).onEnd = function(){
    scene.pig3.animate().alpha(1).duration(500).onEnd = function(){
      scene.pig3.setClickable(true);
    }
  }
  scene.pig4.animate().alpha(0).duration(500).onEnd = function(){
    scene.pig4.animate().alpha(1).duration(500).onEnd = function(){
      scene.pig4.setClickable(true);
    }
  }
}

scene.backToTheStart = function(){
  var everyChild = scene.getChildren();
  everyChild.forEach(function(model){
    if (model.setAlpha) {
      model.animate().alpha(0).duration(500);
    }
  });
  setTimeout(function(){
    blipp.goToScene(scene);
    blipp.getScene().onCreate();
  },1000)
}

scene.doDatPig = function(){
  scene.pig1.setHidden(false);
  scene.pig1.animate().alpha(1).duration(1500);
  scene.pig2.setHidden(false);
  scene.pig2.animate().alpha(1).duration(1500);
  scene.pig3.setHidden(false);
  scene.pig3.animate().alpha(1).duration(1500);
  scene.pig4.setHidden(false);
  scene.pig4.animate().alpha(1).duration(1500);
}

scene.loser = function(){
  var loserNumber = Math.floor(Math.random() * 5);
  scene.youLost.setActiveTexture(loserNumber);
  blipp.log(loserNumber);
  scene.youLost.setHidden(false);
  scene.youLost.animate().alpha(1).duration(1000);
  scene.pig1.setClickable(false);
  scene.pig2.setClickable(false);
  scene.pig3.setClickable(false);
  scene.pig4.setClickable(false);
}

scene.goBoom = function(model){
  var placementX = model.getTranslationX();
  var placementY = model.getTranslationY();
  var placementZ = model.getTranslationZ();
  model.setBlend('chromakey');
  model.setChromakey([126, 0.5, 0.5, 180]);
  model.playVideo('explosion.mp4', 'screamingpig.mp3', false, false, false);
  setTimeout(function(){
    model.setHidden(false);
    model.setAlpha(1);
    scene.youWon.setTranslation(placementX, placementY, placementZ-2);
    scene.youWon.animate().alpha(1).duration(0);
    scene.youWon.setHidden(false);
  }, 500);
  model.animate().alpha(0).delay(5000).duration(1).onEnd = function(){
    model.setActiveTexture('blank.png');
    model.setHidden(true);
  }
}

scene.hover = function(model, duration, amount){
  var modelY = model.getTranslationY();
  model.animate().translationY(modelY+amount).duration(duration).onEnd = function(){
    model.animate().translationY(modelY).duration(duration).onEnd = function(){
      model.animate().translationY(modelY-amount).duration(duration).onEnd = function(){
        model.animate().translationY(modelY).duration(duration).onEnd = function(){
          scene.hover(model, duration, amount);
        }
      }
    }
  }
}

scene.subtleShake = function(model) {
  var myX = model.getTranslationX();
  model.animate().translationX(myX-2).duration(1000).onEnd = function(){
    model.animate().translationX(myX).duration(1000).onEnd = function(){
      model.animate().translationX(myX+2).duration(1000).onEnd = function(){
        model.animate().translationX(myX).duration(1000).onEnd = function(){
          scene.subtleShake(model);
        }
      }
    }
  }
}
