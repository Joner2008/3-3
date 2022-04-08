input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1000000090000000; index++) {
        puntua.move(1)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000000090000000; index++) {
        puntua.move(1)
        basic.pause(500)
    }
})
let pausa = 0
let puntua: game.LedSprite = null
puntua = game.createSprite(2, 2)
basic.forever(function () {
    puntua.ifOnEdgeBounce()
    basic.pause(100)
})
basic.forever(function () {
    pausa = 500
})
