
 async function GetTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();


  
  const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
  ];

  
  const monthName = monthNames[month];

  


  
  const formattedDate = `${monthName} ${day}, ${year}`;

  return formattedDate;
}


export default GetTime;
