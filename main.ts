input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 4)
player.set(LedSpriteProperty.Blink, 500)
let enemy = game.createSprite(randint(0, 4), 0)
enemy.set(LedSpriteProperty.Blink, 500)
basic.forever(function () {
    enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
    if (enemy.isTouching(player)) {
        enemy.change(LedSpriteProperty.Y, -4)
        enemy.change(LedSpriteProperty.X, randint(0, 4))
    }
    if (enemy.get(LedSpriteProperty.Y) == 4) {
        enemy.change(LedSpriteProperty.Y, -4)
    }
})
