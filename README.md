# Amateur Radio - Random Wire Length Tool

This is a direct port of the code found here http://udel.edu/~mm/ham/randomWire/ but with it being written in C and matlab, I found it quite restrictive to use. So I decided to port it to JavaScript (ES6), so that it's much easier to run (imo).
Feel free to comment and tweak away to your hearts content!

## Prerequisites

- Please ensure you have both the prerequisites installed:
  - **Node.js** - https://nodejs.org/
  - **gnuplot** - http://www.gnuplot.info/

## Usage

- Clone this git repo onto your machine
  - `git clone https://github.com/Siyfion/random-wire-lengths.git`
- Navigate into the directory
  - `cd randome-wire-lengths`
- Modify the bands to your needs
  - Modify these lines https://github.com/Siyfion/random-wire-lengths/blob/master/main.js#L18-L30 in `main.js` locally on your machine with a text editor of your choice
- Generate the half waves
  - `node main.js`
- Generate the graph
  - `gnuplot rw.gnu`
- Open the graph (by default `f.png`)
