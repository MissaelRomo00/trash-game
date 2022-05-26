namespace SpriteKind {
    export const organica = SpriteKind.create()
    export const inorganica = SpriteKind.create()
    export const reciclado = SpriteKind.create()
    export const bote = SpriteKind.create()
    export const basura = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.reciclado, SpriteKind.bote, function (sprite, otherSprite) {
    if (otherSprite == boteReciclado) {
        agarrado.destroy(effects.confetti, 500)
        moviendo = 0
        info.changeScoreBy(1)
    } else {
        agarrado.destroy(effects.fire, 500)
        moviendo = 0
        info.changeLifeBy(-1)
    }
})
scene.onHitWall(SpriteKind.reciclado, function (sprite, location) {
    reciclada.destroy(effects.warmRadial, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.organica, SpriteKind.bote, function (sprite, otherSprite) {
    if (otherSprite == boteOrganica) {
        agarrado.destroy(effects.confetti, 500)
        moviendo = 0
        info.changeScoreBy(1)
    } else {
        agarrado.destroy(effects.fire, 500)
        moviendo = 0
        info.changeLifeBy(-1)
    }
})
scene.onHitWall(SpriteKind.inorganica, function (sprite, location) {
    inorganico.destroy(effects.warmRadial, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.inorganica, function (sprite, otherSprite) {
    if (moviendo != 1) {
        moviendo = 1
        agarrado = otherSprite
    }
})
scene.onHitWall(SpriteKind.organica, function (sprite, location) {
    organico.destroy(effects.warmRadial, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.reciclado, function (sprite, otherSprite) {
    if (moviendo != 1) {
        moviendo = 1
        agarrado = otherSprite
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.organica, function (sprite, otherSprite) {
    if (moviendo != 1) {
        moviendo = 1
        agarrado = otherSprite
    }
})
sprites.onOverlap(SpriteKind.inorganica, SpriteKind.bote, function (sprite, otherSprite) {
    if (otherSprite == boteInorganica) {
        agarrado.destroy(effects.confetti, 500)
        moviendo = 0
        info.changeScoreBy(1)
    } else {
        agarrado.destroy(effects.fire, 500)
        moviendo = 0
        info.changeLifeBy(-1)
    }
})
let objetos = 0
let organico: Sprite = null
let inorganico: Sprite = null
let reciclada: Sprite = null
let moviendo = 0
let agarrado: Sprite = null
let boteReciclado: Sprite = null
let boteInorganica: Sprite = null
let boteOrganica: Sprite = null
scene.setBackgroundColor(1)
game.showLongText("Asigna los diferentes objetos a sus respectivos contenedores", DialogLayout.Full)
info.setLife(5)
info.setScore(0)
let speed = -20
boteOrganica = sprites.create(img`
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    777..........................777
    77777777777777777777777777777777
    77777777777777777777777777777777
    77777777777777777777777777777777
    `, SpriteKind.bote)
boteInorganica = sprites.create(img`
    99999999999999999999999999999999
    99999999999999999999999999999999
    99999999999999999999999999999999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..................1.......999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    999..........................999
    99999999999999999999999999999999
    99999999999999999999999999999999
    99999999999999999999999999999999
    `, SpriteKind.bote)
boteReciclado = sprites.create(img`
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    222..........................222
    22222222222222222222222222222222
    22222222222222222222222222222222
    22222222222222222222222222222222
    `, SpriteKind.bote)
boteOrganica.setPosition(35, 20)
boteInorganica.setPosition(125, 20)
boteReciclado.setPosition(80, 100)
let Mano = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .....fffc1111111f.......
    ...fc111cd1111111f......
    ...f1b1b1b1111dddf......
    ...fbfbffcf11fcddf......
    ......fcf111111bbf......
    .......ccbdb1b1fcf......
    .......fffbfbfdff.......
    ........ffffffff........
    ........fffffffffff.....
    .........fffffc111cf....
    .........fffff1b1b1f....
    ..........ffffbfbfbf....
    ...........ffff.........
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Mano, 150, 150)
Mano.setPosition(25, 95)
game.onUpdate(function () {
    if (moviendo == 1) {
        agarrado.setPosition(Mano.x, Mano.y)
    }
})
game.onUpdate(function () {
    if (info.score() == 10) {
        info.changeLifeBy(5)
        speed = -25
    } else if (info.score() == 20) {
        speed = -30
    } else if (info.score() == 30) {
        speed = -35
    } else if (info.score() == 40) {
        speed = -40
    } else if (info.score() == 50) {
        speed = -50
    } else if (info.score() == 75) {
        speed = -100
    } else if (info.score() == 100) {
        game.over(true)
    }
})
// game.onUpdate(function () {
// if (inicio == 0) {
// scene.setBackgroundImage(img`
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// `)
// game.showLongText("aluminios", DialogLayout.Bottom)
// inicio = 1
// } else if (inicio == 1) {
// scene.setBackgroundImage(img`
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777722222222222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777772222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777722222222222222222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777222222222222222222227777777777777777772222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777772222222222222222222222777777777777772222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777772221222222222222222222777777777777722222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722211222222222222222222277777777777222212222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722212222222222222222222277777777772222122222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722211222222222222222222227777777772221222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722212222222222222222222227777777722222222222222222222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722222222222222222222222227777777722222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722222222222222222222222222777777222222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722222222222222222222222222777777221112222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777772222222222222222222222222777777221122222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777772222222222222222222222222777777221222222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777772221222222222222222222222277777221222222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777221122222222222222222222277777222222222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777222112222222222222222122277777222222222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777722212222222222222222122277777222222222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777722222222222222222222112277777222222222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777772222222222222222222112277777722222222222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777222222222222222222212277777722222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777722222222222222222222227777722222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777772222222222222222222227777772222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777222222222222222222227777772222222222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777772222222222222222227777777222222222222222222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777222222222222222227777777222222222222222222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777772222222222222227777777722222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777722222222222227777777722222222222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777722222222222bbb777772222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777777777777777777777777777722222bbbb777777222222222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777777777777777777777777777777722bbbb777777222222222222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777777777777777777777777777777bbbb7777777722222222222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777777777772222222277777777777bbbb7777777772222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777722212222222277777777bb7bb7777777772222222222777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777777722221122222222227777777b77bb777777777222222227777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777777222222222222222222777777777bb777777777722222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777772212222222222222222277777777bb777777777722222277777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777772112222222222222222227777777bb77777777777222277b777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777722112222222222222222222777777bb777777777772bbbbbbbb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777722222222222222222222222777777bb777777777777bbbb77bbb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777772222222222222222222222227777bb777777777772222277777bb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777772222222222222222222222222777bb7777777777722222777777bb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777722222222222222222222222222277bb7777777777777777777777bb7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777772222222222222222222222222222bb777777777777777777777777bb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777772222222222222222222222222222bb777777777777777777777777bb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 77777777222222222222222222222222222227777777777777777777777777bb777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777772222222222222222222222222222227777777777777777777777777b777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777772222222222222222222222222222222777777777777777777777777bb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777772222222222222222222222222222222277777777777777777777777bb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777772222222222222222222222222222222227777777777777777777777bb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777777222222222222222222222222222222227b77777777777777777777bb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777777222222222222222222222222222222222722777777777777777777bb77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777222222222222222222222222222222e2bb27777777777777777777b77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 777777777772222222222222222222222222222222bb27777777777777777777b77777777777777777777777777777447777774777777777777777777777777777777777777777777777777777777777
// 777777777777222222222222222222222222222227bb27777777777777777777b77777777777777777777777777777447777744477777777777777777777777777777777777777777777777777777777
// 7777777777777722222222222222222bb77777777bb777777777777777777777b77777777777777777777777777777457777774477774477777777777777777777777777777777777777777777777777
// 777777777777777722222222222777bb777777777bb777777777777777777777b77777777777bbbb77777777777777757777775477774577777447777777777777777777777777777777777777777777
// 777777777777777777777777777777bb77777777bbb777777777777777777777b77777bbbbbbbbbbbbbb77777777447dd777775577777557777457777777777777777777777777777777777777777777
// 777777777777777777777777777777b777777777bb7777777777777777777777b77bbbbbbb7777777bbbbb7777777455774477dd77447557777557777777777777777777777777777777777777777777
// 77777777777777777777777777777bb777777777bb7777777777777777777777bbbbbb77777777777777bbb777777744d74477dd77557d77777477777777777777777777777777777777777777777777
// 77777777777777777777777777777bb777777777bb77777777777777777777bbbbb7777777777777777777bb777777dd774577d77755dd77777dd7777777777777777777777777777777777777777777
// 77777777777777777777777777777bb777777777bb77777777777777777bbbbbb7777777777777777777777bb77777dd77451dd111dddd77777dd7777777777777777777777777777777777777777777
// 77777777777777777777777777777b77777777777bb77777777777777bbbb777b7777777777777777777777bb77711dd111d1dd111dddd11111d77777777777777777777777777777777777777777777
// 77777777777777777777777777777b77777777777bbb777777777bbbbbb77777b77777777777777777777777b1111ddd111ddddd11ddddd1111dd1177777777777777777777777777777777777777777
// 7777777777777777777777777777bb7777777777777bbbbbbbbbbbbb77777777b7777777777777777777777711111ddd111dd1d111ddddd111ddd1117777777777777777777777777777777777777777
// 7777777777777777777777777777bb777777777777777bbbbbbb777777777777b7777777777777777777777bb1111111111dd11111dd111111111bbbb777777777777777777777777777777777777777
// 7777777777777777777777777777bb7777777777777777777777777777777777bb777777777777777777777bbbb11111111dd11111ddd111111bbbbb1777777777777777777777777777777777777777
// 7777777777777777777777777777bb7777777777777777777777777777777777bb7777777777777777777771bbbbbb1111ddd11111dd1111bbbbb1111777777777777777777777777777777777777777
// 77777777777777777777777777777b7777777777777777777777777777777777bb7777777777777777777771111bbbbbbbbb111111111bbbbbb111111777777777777777777777777777777777777777
// 77777777777777777777777777777bb777777777777777777777777777777777bb77777777777777777777711111111b1bbbbbbbbbbbbbbb111111111777777777777777777777777777777777777777
// 77777777777777777777777777777bb777777777777777777777777777777777bb777777777777777777777111111111111111bb1bb11111111111111777777777777777777777777777777777777777
// 77777777777777777777777777777bb777777777777777777777777777777777bb7777777777777777777771111111111111111111111111111111111777777777777777777777777777777777777777
// 777777777777777777777777777777bb777777777777777777777777777777777b77777777777777777bbbbb11111111111111111111111111111111b111117777777777777777777777777777777777
// 777777777777777777777777777777bb777777777777777777777777777777777bb77777777777bbbbb111bb111111111111111111111111111111111111111177777777777777777777777777777777
// 7777777777777777777777777777777bb77777777777777777777777777777777bb7777777bbbbbbbb1111bb111111111111111111111111111111111b11111177777777777777777777777777777777
// 77777777777777777777777777777777bb7777777777777777777777777777777bb777bbbbbbb777111111bb11111111111111111111111111111111bb11111bb7777777777777777777777777777777
// 777777777777777777777777777777777bb7777777777777777777777777777777bbbbbbb77777771111111bbb1111111111111111111111111111bbb111111bb1777777777777777777777777777777
// 7777777777777777777777777777777777bbb77777777777777777777777777bbbbbb7777777777bb111111bbb111111111111111111111111111bbb111111bb11b77777777777777777777777777777
// 77777777777777777777777777777777777bbbb77777777777777777777bbbbbbbbb777777777771bb1111111bbbbb111111111111111111111bbbb1111111bb11bb7777777777777777777777777777
// 7777777777777777777777777777777777777bbbbbb777777777777bbbbbbb77777bb777777777711bbb1111111bbbbbb1111111111111111bbbb11111111bb1117bb777777777777777777777777777
// 777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbb7777777777bb77777777711bbbbb1111111bbbbbbbbbbb11111bbbbbbb11111111bb111177bbb7777777777777777777777777
// 77777777777777777777777777777777777777777777bbbbbbbbbb77777777777777bb77777777711111bbb1111111111bbbbbbbbbbbbbbbb1111111111bb11111777bb7777777777777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777bb77777777111111bbbb111111111111111111111111111111111bb1111117777bb777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777bb7777777111111111bbb1111111111111111111111111111bbbb111111177777bb77777777777777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777bb7777771111111111bbbbb1111111111111111111111bbbbbb1111111177777bb77777777777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777bbb77771111111111111bbbbbb11111111111bbbbbbbbbb11111111111777777bb7777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777bbbb77111111111111111111bbbbbbbbbbbbbbbbbbb11111111111111777777bb7777777777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777bbbb1111111111111111111111b11bbb11111111111111111111111777777bb7777777777777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777777777bb1111111111111111111111111111111111111111111111111117777777b7777777777777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777777777771111111111111111111111111111111111111111111111111117777777b7777777777777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777777777711b111111111111111111111111111111111111111111111111b777777bb7777777777777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777777777771b11111111111111111111111111111111111111111111111bbbb7777bb7777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777bb1111111111111111111111111111111111111111111111bb7bbbbb7bbbb7777777777bb77777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb11111111111111111111111111111111111111111bbb77777bbbbbbb7777777bbbbb77777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb1111111111111111111111111111111111111bbbb77777777bbbbb777bbbbbbb7777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbb11111111111111111111111111111111bbbbb7777777777bbbbbbbbbbb77777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbb11111111111111111111111bbbbbbbbbbbbb7777777bbbbbbbb77777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbb111bbb11bbbbbbbbbbbb7777bbbbbbbbbbbbbbbbb7777777777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbb77777777777777777bbbb777bb777777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbb777bb777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbb7777bb77777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbb7777b77777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bb7777bb7777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bb77777bb777777777777777
// 77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bb7777bb777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bb77777777777777777777
// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbb7777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bb7777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// `)
// game.showLongText("carton", DialogLayout.Bottom)
// inicio = 2
// } else if (inicio == 2) {
// scene.setBackgroundImage(img`
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddd
// ddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3dddddddddddddddd
// ddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333ddddddddddddddd
// dddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddd
// ddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333dddddddddddddd
// ddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3dddddddddddddd
// ddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333dddddddddddddddd
// ddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333dddddddddddddd
// ddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333dddddddddddddd
// ddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333dddddddddddd
// dd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddd
// d33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbddddd
// 33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd
// 333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd
// d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3
// d333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3d
// 33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd
// 333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3
// 3333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd33
// 3333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd33
// 3333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd33
// 3333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd33
// 3333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd33
// 3333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd3
// 3333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd33
// 333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333
// 33bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b333
// 33b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b333
// 33b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b333
// 3bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b333
// 3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
// 3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
// 3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
// bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
// 3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
// 3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
// 3b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb333444333333
// 44444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb334443344444
// 44443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb333334444444
// 44444443b33333333b33b3333bbb33334444443444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb333344444444
// 44444444443333333b33b3333bbbb3444434443444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb34444344444
// 44444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b4334434
// 3444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b3344333
// 33b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb333333
// 33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
// 33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
// 33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
// 333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
// 333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333
// 333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333
// 3333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb333
// 33333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b3333
// 33333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b33333
// 33333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb333333
// 33333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb33333333
// 33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
// 33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
// 33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
// 33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
// 33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
// 33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
// 3333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d33333333
// 3333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d3
// 3333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd3
// dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33
// 3dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd33333333
// 3dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d3333
// 3dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d3
// ddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33ddd
// ddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbddddddddd
// ddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbddddddddd
// ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
// ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
// ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
// ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
// ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
// ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
// ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
// ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
// ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
// ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
// ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
// ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
// ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
// 443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
// 44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// `)
// game.showLongText("Plásticos", DialogLayout.Bottom)
// inicio = 3
// } else {
// scene.setBackgroundImage(img`
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
// `)
// game.showLongText("Ronda " + ronda, DialogLayout.Bottom)
// }
// })
game.onUpdateInterval(1500, function () {
    objetos = randint(1, 15)
    if (objetos == 1) {
        organico = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 5 5 e e . . 
            . c e e e e e c 6 e e 5 5 5 e . 
            . c e e e 5 e c c 5 4 5 4 5 e . 
            c e e e 5 5 5 5 5 5 4 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 4 4 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 5 5 e 
            c e e 5 5 5 5 5 5 5 5 5 5 4 5 e 
            . e e e 5 5 5 5 5 5 5 5 5 4 e . 
            . 5 e e 5 5 5 5 5 5 5 5 4 5 e . 
            . . 5 e e 5 5 5 5 5 4 4 5 e . . 
            . . . 5 5 e e 4 4 4 5 e e . . . 
            . . . . . 5 5 e e e e . . . . . 
            `, SpriteKind.organica)
        organico.setVelocity(speed, 0)
        organico.setPosition(160, 60)
    } else if (objetos == 2) {
        organico = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 5 5 5 5 5 5 c . . 
            . . . . b 5 5 5 5 5 5 5 5 5 5 b 
            . . . . b 5 5 5 5 5 5 5 5 5 b . 
            . . . . b 5 5 5 5 5 5 5 5 b . . 
            . . . . b 5 5 5 5 5 5 5 5 b . . 
            . . . . b 5 5 5 5 5 5 5 5 5 b . 
            . . . . b 5 5 5 5 5 5 5 5 5 b . 
            . . . b 5 5 5 5 5 b 5 5 5 5 5 b 
            . . b 5 5 5 b b 5 b 5 5 5 5 5 b 
            . b 5 5 b c b 5 5 b 5 5 5 d 5 5 
            b b c c c b b 5 d b b 5 5 b b 5 
            . . . c c b 5 5 c b b 5 5 5 b b 
            `, SpriteKind.organica)
        organico.setVelocity(speed, 0)
        organico.setPosition(160, 60)
    } else if (objetos == 3) {
        organico = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            .....44...4..774....
            ....444474447.444...
            ...44444.4444.4444..
            ...444474444c74444..
            ...444.744447.c444..
            ..444c..44447..c44..
            ...4c....4cc....c4..
            ..4c.....eee....44..
            .........eee....c44.
            .........eee........
            .........eee........
            .........eee........
            .........eee........
            ....................
            ....................
            `, SpriteKind.organica)
        organico.setVelocity(speed, 0)
        organico.setPosition(160, 60)
    } else if (objetos == 4) {
        organico = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fdf1111111df......
            ......fff1111111df......
            ......ffd11f1f1dbf......
            ......fcd11f1ffdcf......
            .......fb11f11fff.......
            .......ff1ff11dff.......
            .......1fcf111cf1.......
            ........fff111ff........
            .........ffffff.........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.organica)
        organico.setVelocity(speed, 0)
        organico.setPosition(160, 60)
    } else if (objetos == 5) {
        organico = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            .....77...7....7....
            ....7777.777..777...
            ...77777.7777.7777..
            ...77ee.7777e.7777..
            ...777..7777..e777..
            ..777e..7777...e77..
            ...7e....7ee....e7..
            ..7e.....77.....77..
            .........7e.....e77.
            .........e..........
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.organica)
        organico.setVelocity(speed, 0)
        organico.setPosition(160, 60)
    } else if (objetos == 6) {
        inorganico = sprites.create(img`
            ...............
            ...............
            .eeeeeeeeeeeee.
            .e55555555555e.
            .e55555555555e.
            .e55555555555e.
            .e55555555555e.
            .e55444444455e.
            .e54555555545e.
            .e54555555545e.
            .e54555555545e.
            .e54555555545e.
            .e54555555545e.
            .e54555555545e.
            .e54555555545e.
            .e55444444455e.
            .e55555555555e.
            .e55555555555e.
            .e55555555555e.
            .e55555555555e.
            .e55555555555e.
            .eeeeeeeeeeeee.
            ...............
            ...............
            `, SpriteKind.inorganica)
        inorganico.setVelocity(speed, 0)
        inorganico.setPosition(160, 60)
    } else if (objetos == 7) {
        inorganico = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ...............cc.......
            ..............cdc.......
            .............cddc.......
            ............cddc........
            ..........ccddc.........
            ..........cddc..........
            .........cddcc..........
            ........cddcc...........
            .ccccc..cdcc............
            .cdddcccddc.............
            ccdcdddddcc.............
            ddccccddcc..............
            dccccdddcc..............
            ccccddcddc..............
            ..cddcccdc..............
            .ccdccccdc..............
            .ccccccdcc..............
            .....ccdc...............
            ....ccdcc...............
            ...ccdccc...............
            `, SpriteKind.inorganica)
        inorganico.setVelocity(speed, 0)
        inorganico.setPosition(160, 60)
    } else if (objetos == 8) {
        inorganico = sprites.create(img`
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . . c c . . . . . . . 
            . . . . . . c c c c . . . . . . 
            . . . . . . c 1 1 c . . . . . . 
            . . . . . c c c 1 c c . . . . . 
            . . . . c c 1 1 1 1 c c . . . . 
            . . . . c 1 1 c c 1 1 c c . . . 
            . . . . c 1 1 c c 1 c 1 c . . . 
            . . . . c 1 1 c 1 1 c 1 c . . . 
            . . . . c c 1 c 1 c c 1 c . . . 
            `, SpriteKind.inorganica)
        inorganico.setVelocity(speed, 0)
        inorganico.setPosition(160, 60)
    } else if (objetos == 9) {
        inorganico = sprites.create(img`
            ...bbccccccbb...
            ..bdddddddd1db..
            .bdd1111111111b.
            .cd11111111111c.
            .cb11111111111c.
            .bb11111111111b.
            .bc11111111111b.
            .6c1ddddddddd16.
            .661111dd111d16.
            .cb11111111111c.
            .bb11111111111b.
            .bb11111111111b.
            .bd11dd1dddd11b.
            .dd11d1d111dddd.
            .dd1d111111111d.
            .dd11111111111d.
            .dd11111111111d.
            .dd111dd111dddd.
            .db11d11ddd111d.
            .bd11111111111b.
            .dddddddddddddd.
            .cccccccccccccc.
            .bbbbbbbbbbbbbb.
            ................
            `, SpriteKind.inorganica)
        inorganico.setVelocity(speed, 0)
        inorganico.setPosition(160, 60)
    } else if (objetos == 10) {
        inorganico = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .....dddddddddd.....
            .....dddddddddd.....
            ......11111111......
            ......dddddddd......
            .....1dddddddd1.....
            .....1dddddddd1.....
            .....1dddddddd1.....
            .....1dddddddd1.....
            .....1dddddddd1.....
            .....1dddddddd1.....
            .....1dddddddd1.....
            ......11111111......
            ....................
            ....................
            `, SpriteKind.inorganica)
        inorganico.setVelocity(speed, 0)
        inorganico.setPosition(160, 60)
    } else if (objetos == 11) {
        reciclada = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........dddd........
            ........dddd........
            .........ff.........
            ........dddd........
            ........dddd........
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            ........dddd........
            ........ffff........
            ....................
            `, SpriteKind.reciclado)
        reciclada.setVelocity(speed, 0)
        reciclada.setPosition(160, 60)
    } else if (objetos == 12) {
        reciclada = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........fffff.......
            .......bbbbbbb......
            .......b11bbbb......
            .......b1bbbbb......
            .......bbbbbbb......
            .......bbbbbbb......
            .......bbbbbbb......
            ......bbbbbbbbb.....
            ......fffffffff.....
            ....................
            ....................
            `, SpriteKind.reciclado)
        reciclada.setVelocity(speed, 0)
        reciclada.setPosition(160, 60)
    } else if (objetos == 13) {
        reciclada = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........dd11........
            ........1111........
            .........ff.........
            ........dddd........
            ........dddd........
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            ........dddd........
            ........ffff........
            ....................
            `, SpriteKind.reciclado)
        reciclada.setVelocity(speed, 0)
        reciclada.setPosition(160, 60)
    } else if (objetos == 14) {
        reciclada = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e . . . . . . . e e . . 
            . . . . e e . . . . . e e . . . 
            . . . . . e f f f f f e . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . . e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.reciclado)
        reciclada.setVelocity(speed, 0)
        reciclada.setPosition(160, 60)
    } else if (objetos == 15) {
        reciclada = sprites.create(img`
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeedf......
            ......feeeeeeeeedf......
            ......feeeeeeeeedf......
            ......feeeeeeeeedf......
            ......feeeeeeeeedf......
            ......feeeeeeeeedf......
            ......feeeeeeeeedf......
            ......feeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......fdeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......feeeeeeeeeef......
            ......ffffffffffff......
            ........................
            ........................
            ........................
            `, SpriteKind.reciclado)
        reciclada.setVelocity(speed, 0)
        reciclada.setPosition(160, 60)
    }
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", music.beat(BeatFraction.Eighth))
    music.changeTempoBy(-1)
})
