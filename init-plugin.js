console.log('hey! plugin js code executed')

let yml = `
---
  initilize:
    color: ff0000
    icon: text.svg
    blocks:
      - initiliaze:
          shadows:
            - 1
          args:
            a: statement
          function: initiliaze
          code: > 
          var Script = pc.createScript('script');

// initialize code called once per entity
Script.prototype.initialize = function() {

};

// update code called every frame
Script.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// Rifts.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

          
          messages:
            - initialize
            - initialize section
            - update section
          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
