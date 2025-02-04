radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "moving") {
        basic.showIcon(IconNames.StickFigure)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (receivedString == "still") {
        basic.clearScreen()
    }
})
radio.setGroup(73)
