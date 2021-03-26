radio.onReceivedNumber(function (receivedNumber) {
    value = receivedNumber
    motorbit.freestyle(value, value)
})
let value = 0
radio.setGroup(1)
basic.forever(function () {
	
})
