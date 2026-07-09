function solve(arr){
  let mins = [];
  for (let i = 0; i < arr.length; i++) {
    let parts = arr[i].split(":");
    let h = Number(parts[0]);
    let m = Number(parts[1]);
    mins.push(h * 60 + m);
  }

  mins.sort((a, b) => a - b);

  let unique = [];
  for (let i = 0; i < mins.length; i++) {
    if (i === 0 || mins[i] !== mins[i - 1]) unique.push(mins[i]);
  }

  let maxGap = 0;

  for (let i = 0; i < unique.length - 1; i++) {
    let gap = unique[i + 1] - unique[i] - 1; 
  }

  let wrapGap = (1440 - unique[unique.length - 1]) + unique[0] - 1;
  if (wrapGap > maxGap) maxGap = wrapGap;

  let hh = String(Math.floor(maxGap / 60)).padStart(2, "0");
  let mm = String(maxGap % 60).padStart(2, "0");
  return hh + ":" + mm;
} 