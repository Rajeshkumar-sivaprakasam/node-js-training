var numbers = [7, 3, 5, 6, 8, 4]
let min = numbers[0] 
let max = numbers[0];

for (i = 0; i <= numbers.length; i++) {
  if (numbers[i] < min) min = numbers[i]
  if (numbers[i] > max) max = numbers[i]
}

min

max