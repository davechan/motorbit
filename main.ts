radio.onReceivedNumber(function (receivedNumber) {
    value = receivedNumber
    music.playTone(587, music.beat(BeatFraction.Eighth))
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
