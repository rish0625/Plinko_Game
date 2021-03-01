const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(480, 800);
  
  ground = new Ground(240,height,480,20);
}

function draw() {
  background("black");  

  ground.display();

  drawSprites();
}