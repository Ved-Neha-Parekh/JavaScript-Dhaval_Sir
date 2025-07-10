function getGrade(score) {
  if (score <= 0) {
    return "WARNING: Invalid Marks....";
  } else {
    if (score >= 90) {
      return "Grade: 'A' ";
    } else if (score >= 80) {
      return "Grade: 'B' ";
    } else if (score >= 70) {
      return "Grade: 'C' ";
    } else if (score >= 60) {
      return "Grade: 'D' ";
    } else if (score >= 40) {
      return "Grade: 'E' ";
    } else {
      return "FAIL!";
    }
  }
}

console.log(getGrade(32));
