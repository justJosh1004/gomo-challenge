const times = [
  {
    start: 19,
    end: 30
  },
  {
    start: 2,
    end: 7
  },
  {
    start: 17,
    end: 25
  },
  {
    start: 6,
    end: 10
  },
  {
    start: 8,
    end: 15
  },
  {
    start: 40,
    end: 45
  }
];

let sorted;
let UVTChunks = [];

// Take the time inputs and sort them in ascending order based on the start times
const sortTimes = times => {
  return times.sort((a, b) => {
    return a.start - b.start;
  });
};

// Once sorted, check to see if there are any gaps
const checkGaps = sorted => {
  let tempUVT = [];
  sorted.map((time, i, sorted) => {
    if (sorted[i + 1]) {
      // Add times to temp array if there are no gaps
      if (time.end > sorted[i + 1].start) {
        tempUVT.push(time);
      } else {
        // If there is a gap, add the last time and add the temp array to UVTChunk
        tempUVT.push(time);
        UVTChunks.push(tempUVT);
        tempUVT = []; // Clear temp array
      }
    }
    // Add the final time
    if (i === sorted.length - 1) {
      tempUVT.push(time);
      UVTChunks.push(tempUVT);
    }
  });
};

sorted = sortTimes(times);

checkGaps(sorted);
console.log(UVTChunks);
