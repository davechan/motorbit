radio.onReceivedNumber(function (receivedNumber) {
    value = receivedNumber
})
let value = 0
radio.setGroup(1)
value = 0
basic.forever(function () {
    led.plotBarGraph(
    value,
    100
    )
    if (value == 0) {
        motorbit.brake()
    }
    motorbit.freestyle(value, value)
})
