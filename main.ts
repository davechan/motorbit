radio.onReceivedNumber(function (receivedNumber) {
    value = receivedNumber
    motorbit.freestyle(value, value)
})
let value = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
