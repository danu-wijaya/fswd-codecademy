/*
Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.



*/

const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 5;
      break;
    case "thursday":
      return 4;
      break;
    case "friday":
      return 3;
      break;
    case "saturday":
      return 5;
      break;
    case "sunday":
      return 40;
      break;
    default:
      return "invalid day";
      break;
  }
};

const getActualSleepHours = () => {
  let sum =
    getSleepHours("monday") +
    getSleepHours("sunday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("saturday");

  return sum;
};

console.log(`youre total sleep hours: ${getActualSleepHours()}`);

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

// console.log("total ideal hours " + getIdealSleepHours(8));

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let sleepHourDiffence = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log(
      `you got perfect sleep hours, your sleep hours a week is ${actualSleepHours} and the perfect sleep hours is${idealSleepHours}`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `you got more sleep than ideal sleeping hours a week ${actualSleepHours} and have more ${sleepHourDiffence} hours than ideal sleep hours`
    );
  } else {
    console.log(
      `you need a rest, your actual sleep hours is ${actualSleepHours} less ${sleepHourDiffence} than ideal sleep hours`
    );
  }
};

calculateSleepDebt();
