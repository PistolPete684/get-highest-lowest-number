function highAndLow(numbers){
  // create an array out of the string using split()
  let newArray = numbers.split(" ");
  
  // find the highest and lowest numbers using Math.max() & Math.min()
  const highest = Math.max(...newArray);
  const lowest = Math.min(...newArray);
  
  // use template literals to return the higher ans lowest number
  return `${highest} ${lowest}`;
}