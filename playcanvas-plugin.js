console.log('hey! plugin js code executed')
//ver=7
let yml = `
---
  playcanvas:
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
           func initiliaze(a) {
           
            
           }




          
          messages:
            - create script

          hasReturn: false
          tooltip: test
          
`
createBlocksFromYAML(yml)
