radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 1 && p1esc2 == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Square)
        }
    } else if (receivedNumber == 1 && p1esc2 == 2) {
        for (let index2 = 0; index2 < 4; index2++) {
            basic.showIcon(IconNames.Yes)
        }
    } else if (receivedNumber == 1 && p1esc2 == 3) {
        for (let index3 = 0; index3 < 4; index3++) {
            basic.showIcon(IconNames.No)
        }
    } else if (receivedNumber == 2 && p1esc2 == 2) {
        for (let index4 = 0; index4 < 4; index4++) {
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Square)
        }
    } else if (receivedNumber == 2 && p1esc2 == 1) {
        for (let index5 = 0; index5 < 4; index5++) {
            basic.showIcon(IconNames.No)
        }
    } else if (receivedNumber == 2 && p1esc2 == 3) {
        for (let index6 = 0; index6 < 4; index6++) {
            basic.showIcon(IconNames.Yes)
        }
    } else if (receivedNumber == 3 && p1esc2 == 3) {
        for (let index7 = 0; index7 < 4; index7++) {
            basic.showIcon(IconNames.SmallSquare)
            basic.showIcon(IconNames.Square)
        }
    } else if (receivedNumber == 3 && p1esc2 == 1) {
        for (let index8 = 0; index8 < 4; index8++) {
            basic.showIcon(IconNames.Yes)
        }
    } else if (receivedNumber == 3 && p1esc2 == 2) {
        for (let index9 = 0; index9 < 4; index9++) {
            basic.showIcon(IconNames.No)
        }
    }
    
    resetEsc()
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    p1esc2 = 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    p1esc2 = 3
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    p1esc2 = 2
})
function resetEsc() {
    
}

let p1esc2 = 0
let p2esc = 0
let p1esc = 0
radio.setGroup(1)
p1esc2 = 0
while (p1esc2 == 0) {
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.Scissors)
}
basic.forever(function on_forever() {
    if (p1esc2 == 1) {
        basic.showIcon(IconNames.Target)
    } else if (p1esc2 == 2) {
        basic.showIcon(IconNames.Square)
    } else if (p1esc2 == 3) {
        basic.showIcon(IconNames.Scissors)
    }
    
    radio.sendNumber(p1esc2)
})
