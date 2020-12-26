input.onButtonPressed(Button.A, function () {
    radio.sendNumber(500)
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
	
})
