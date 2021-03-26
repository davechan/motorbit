radio.onReceivedValue(function (name, value) {
    if (name == "motor") {
        speed = value
        music.playTone(587, music.beat(BeatFraction.Eighth))
    }
    if (name == "servo") {
        pins.servoWritePin(AnalogPin.P1, value)
        music.playTone(247, music.beat(BeatFraction.Eighth))
        basic.pause(200)
    }
})
let speed = 0
radio.setGroup(1)
speed = 0
pins.servoWritePin(AnalogPin.P1, 0)
basic.forever(function () {
    led.plotBarGraph(
    speed,
    100
    )
    if (speed == 0) {
        motorbit.brake()
    }
    motorbit.freestyle(speed, speed)
})
