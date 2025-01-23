def on_received_number(receivedNumber):
    if receivedNumber == 1 and p1esc2 == 1:
        for index in range(4):
            basic.show_icon(IconNames.SMALL_SQUARE)
            basic.show_icon(IconNames.SQUARE)
    elif receivedNumber == 1 and p1esc2 == 2:
        for index2 in range(4):
            basic.show_icon(IconNames.YES)
    elif receivedNumber == 1 and p1esc2 == 3:
        for index3 in range(4):
            basic.show_icon(IconNames.NO)
    elif receivedNumber == 2 and p1esc2 == 2:
        for index4 in range(4):
            basic.show_icon(IconNames.SMALL_SQUARE)
            basic.show_icon(IconNames.SQUARE)
    elif receivedNumber == 2 and p1esc2 == 1:
        for index5 in range(4):
            basic.show_icon(IconNames.NO)
    elif receivedNumber == 2 and p1esc2 == 3:
        for index6 in range(4):
            basic.show_icon(IconNames.YES)
    elif receivedNumber == 3 and p1esc2 == 3:
        for index7 in range(4):
            basic.show_icon(IconNames.SMALL_SQUARE)
            basic.show_icon(IconNames.SQUARE)
    elif receivedNumber == 3 and p1esc2 == 1:
        for index8 in range(4):
            basic.show_icon(IconNames.YES)
    elif receivedNumber == 3 and p1esc2 == 2:
        for index9 in range(4):
            basic.show_icon(IconNames.NO)
    resetEsc()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global p1esc2
    p1esc2 = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global p1esc2
    p1esc2 = 3
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global p1esc2
    p1esc2 = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

def resetEsc():
    pass
p1esc2 = 0
p2esc = 0
p1esc = 0
radio.set_group(1)
p1esc2 = 0
while p1esc2 == 0:
    basic.show_icon(IconNames.TARGET)
    basic.show_icon(IconNames.SQUARE)
    basic.show_icon(IconNames.SCISSORS)

def on_forever():
    if p1esc2 == 1:
        basic.show_icon(IconNames.TARGET)
    elif p1esc2 == 2:
        basic.show_icon(IconNames.SQUARE)
    elif p1esc2 == 3:
        basic.show_icon(IconNames.SCISSORS)
    radio.send_number(p1esc2)
basic.forever(on_forever)