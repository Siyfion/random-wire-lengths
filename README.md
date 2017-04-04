# Amateur Radio - Random Wire Length Tool

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
