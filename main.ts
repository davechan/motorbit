radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    value = receivedNumber
})
let value = 0
radio.setGroup(1)
value = 0
basic.forever(function () {
    motorbit.freestyle(value, value)
})
