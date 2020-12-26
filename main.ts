input.onButtonPressed(Button.A, function () {
    radio.sendNumber(500)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(-500)
    basic.pause(1000)
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
