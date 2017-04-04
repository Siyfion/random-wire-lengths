/*
 * Simple calculations of half wavelengths of ham bands.
 *
 * Mike Markowski AB3AP
 * Thu Jun 28 07:01:26 EDT 2012
 *
 * Node.js Adaptation By
 * Simon Mansfield
 * MW6XSR
 */

 const fs = require('fs');
 const logger = fs.createWriteStream('f', { flags: 'w' });

/*
 * Print ranges of half wavelengths for ecah ham band.
 */
const printHalfwaves = () => {
	// rw(1810.0, 2000.0);       /* 160m */
	rw(3500.0, 3800.0);       /* 80m */
	rw(5258.5, 5406.5);      /* 60m */
	rw(7000.0, 7200.0);       /* 40m */
	rw(10100.0, 10150.0);     /* 30m */
	rw(14000.0, 14350.0);     /* 20m */
	rw(18068.0, 18168.0);     /* 17m */
	rw(21000.0, 21450.0);     /* 15m */
	rw(24890.0, 24990.0);     /* 12m */
	rw(28000.0, 29700.0);     /* 10m */
	rw(50000.0, 52000.0);     /* 6m */
};

/*
 * For a given frequency range, calculate the half wavelength range and print
 * it.  In addition, print up to 4th multiples of each range up to the length
 * of 160m half wavelength.
 *
 * Comments are also printed out, assuming that the output will saved to a file,
 * and that file used by gnuplot for plotting.
 */
const rw = (min_kHz, max_kHz) => {

	let lambda0_ft, lambda1_ft;
	let loFreq_MHz = 1.8;
	let lambdaMax_ft = 2 * 468 / loFreq_MHz; /* Max wavelength in band. */
	let n;

	let qtr_ft = (468 / loFreq_MHz) / 2;
	logger.write(`# ${min_kHz.toFixed(3)} to ${max_kHz.toFixed(3)} kHz, too short for ${loFreq_MHz} MHz\n`);
	logger.write(`${(0).toFixed(3)} 0\n${(0+(1e-3)).toFixed(3)} 1\n${qtr_ft.toFixed(3)} 1\n${(qtr_ft+(1e-3)).toFixed(3)} 0\n\n`);

	n = 1; /* First multiple. */
	do {
		lambda0_ft = n * 468 / (max_kHz * 1e-3);
		lambda1_ft = n * 468 / (min_kHz * 1e-3);
		/* Print in format gnuplot expects. */
		logger.write(`# ${min_kHz.toFixed(3)} to ${max_kHz.toFixed(3)} kHz, multiple ${n}\n`);
    logger.write(`${(lambda0_ft-(1e-3)).toFixed(3)} 0\n${lambda0_ft.toFixed(3)} 1\n${lambda1_ft.toFixed(3)} 1\n${(lambda1_ft+(1e-3)).toFixed(3)} 0\n\n`);
		/* Prepare for next multiple. */
		n++;
	/* Change '5' in next line to max number of multiples to calculate. */
	} while (lambda1_ft < lambdaMax_ft && n < 5);
};

// Run the halfwaves code.
printHalfwaves();

logger.end();

console.log("Now run: 'gnuplot rw.gnu'");
