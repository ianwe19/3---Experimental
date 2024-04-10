// create var for each note's frequency in Hz
const E3 = 164.814;
const F3 = 174.614;
const FSHARP3 = 184.997;
const G3 = 195.998;
const GSHARP3 = 207.652;
const A3 = 220;
const ASHARP3 = 233.082;
const B3 = 246.942;
const C4 = 261.626; // middle C
const CSHARP4 = 277.183;
const D4 = 293.665;
const DSHARP4 = 311.127;
const E4 = 329.628;
const F4 = 349.228;
const FSHARP4 = 369.994;
const G4 = 391.995;
const GSHARP4 = 415.305;
const A4 = 440;

var wave;

var button;
var slider;
var playing = false;

function setup() {
  createCanvas(100, 100);
  wave = new p5.Oscillator();

  wave.setType('sine');
  wave.start();
  wave.freq(440);
  wave.amp(0);

  button = createButton('play/pause');
  button.mousePressed(toggle);

  noteSelect = createSelect(true);
  noteSelect.position(20, 150);

  noteSelect.option(E3);
  noteSelect.option(F3);
  noteSelect.option(FSHARP3);


}

function draw() {
  let activeNote = Number(noteSelect.value());
  wave.freq(activeNote);

  if (playing) {
    background(255, 0, 255);
  } else {
    background(51);
  }
}

function toggle() {
  if (!playing) {
    wave.amp(0.5, 1);
    playing = true;
  } else {
    wave.amp(0, 1);
    playing = false;
  }
}