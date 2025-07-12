// your timeword solution goes here


//Input	Expected Output
// 00:00	midnight
// 00:12	twelve twelve am
// 01:00	one o’clock am
// 06:01	six oh one am
// 06:10	six ten am
// 06:18	six eighteen am
// 06:30	six thirty am
// 10:34	ten thirty four am
// 12:00	noon
// 12:09	twelve oh nine pm
// 23:23	eleven twenty three pm
function timeword(time) {
    const numbers = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three",
        "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine",
        "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five",
        "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one",
        "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven",
        "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four",
        "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"
      ];


// const time = "12:07";
// console.log(time);

// Split the time into hour and minute
const [hourStr, minuteStr] = time.split(":");


// Convert hour and minute to words
const hour = parseInt(hourStr, 10);
const displayHour = hour % 12 === 0 ? 12 : hour % 12;
const hourWord = numbers[displayHour];
const minute = parseInt(minuteStr, 10);
const minuteWord = minute < 10 ? "oh " + numbers[minute] : numbers[minute];
 

const amPm = hour < 12 ? "am" : "pm";
// Construct the time word
 
const timeWord = `${hourWord} ${minuteWord} ${amPm}`;

// Edge cases
if (hourStr === "00" && minuteStr === "00") {
return "midnight";
} else if (hourStr === "12" && minuteStr === "00") {
return "noon";
} else if (minuteStr === "00") {
return `${hourWord} o' clock ${amPm}`;
} else if (hourStr === "" || minuteStr === "") {
return "Invalid time format";
} else if (minuteStr > 59) {
return "Invalid time format";
}

return timeWord;

}


module.exports = timeword;
if (require.main === module) {
    const input = process.argv[2]; // grab the third item from command line
    console.log(timeword(input)); // run function and print the result
  }