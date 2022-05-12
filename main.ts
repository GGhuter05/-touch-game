input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(2000)
    basic.showString("" + (points))
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let points = 0
let player: game.LedSprite = null
player = game.createSprite(2, 4)
player.set(LedSpriteProperty.Blink, 500)
let enemy = game.createSprite(randint(0, 4), 0)
enemy.set(LedSpriteProperty.Blink, 500)
points = 0
basic.forever(function () {
    enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    if (enemy.isTouching(player)) {
        enemy.change(LedSpriteProperty.Y, -4)
        enemy.change(LedSpriteProperty.X, randint(0, 4))
        points += 1
    }
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        enemy.change(LedSpriteProperty.Y, -4)
    }
})
