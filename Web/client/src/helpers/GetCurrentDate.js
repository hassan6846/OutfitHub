// Define your custom helper function to get the formatted date and time
 async function GetTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();


  // Define an array of month names
  const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
  ];

  // Get the month name using the month number
  const monthName = monthNames[month];

  // Format the time with leading zeros


  // Format the date
  const formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
}

// Export the function for use in other parts of your application
export default GetTime;
