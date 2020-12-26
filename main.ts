input.onButtonPressed(Button.A, function () {
    radio.sendNumber(500)
    basic.pause(Pause)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("A")
    basic.pause(Pause)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(-500)
    basic.pause(Pause)
})
let Pause = 0
radio.setGroup(1)
Pause = 100
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.rotation(Rotation.Roll) < 0) {
        radio.sendNumber(input.rotation(Rotation.Roll) * 10)
    } else {
        radio.sendNumber(input.rotation(Rotation.Roll) * 10)
    }
    basic.pause(Pause)
})
