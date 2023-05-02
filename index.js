const { RabinKarp } = require("./rabin_karp");

const performRabinKarpAlgorithm = (sentence, textToSearch) => {
  const rabinKarp = new RabinKarp();
  return rabinKarp.searchText(sentence, textToSearch);
};
const matchingText = performRabinKarpAlgorithm(
  
  //Authenticated users
  "aarav akshit anika aniruddha arnav arya bhavya chaitra devika dhruv diya gaurav harsha ishan jhanvi kavya kunal manav nikhil nandi neha omkar pranav prerna preeti rahul rhea raj rohit sagar sahil samarth tanvi ",
  
  //username to be accessed
  "sahil"
);
console.log("Matched Text Position:", matchingText);
console.log("If Matched Text Position: [] , INTRUSION DETECTED")

