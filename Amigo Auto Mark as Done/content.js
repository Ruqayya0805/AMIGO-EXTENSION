window.onload = () => {
    const buttons = document.querySelectorAll('button'); // Find all buttons
    buttons.forEach(button => {
      if (button.innerText.includes("Mark as done")) { // Check if button text includes 'Mark as done'
        button.click(); // Click the button
      }
    });
  };
  