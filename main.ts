input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("mom")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # . .
        # # . . .
        # . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    music.playMelody("C D D E E F F G ", 500)
})
