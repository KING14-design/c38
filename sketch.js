var database
var gameState=0
var playerCount=0
var form,player,game
var allPlayers
var car1,car2,car3,car4,cars
var carimage1,carimage2,carimage3,carimage4
var groundimage,trackimage

function preload(){
    bg=loadImage("Anime_car_bg.jpg")
    carimage1=loadImage("car1.png")
    carimage2=loadImage("car2.png")
    carimage3=loadImage("car3.png")
    carimage4=loadImage("car4.png")
    groundimage=loadImage("ground.png")
    trackimage=loadImage("track.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight)
    database=firebase.database()
    game=new Game()
    game.getState()
game.start()
}
function draw(){
    background(bg)
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
    if(gameState===2){
        game.end()
    }
}