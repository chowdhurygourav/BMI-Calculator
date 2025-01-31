document.getElementById('calculate').addEventListener('click', function () {
    // Get input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Please enter valid positive numbers for height and weight.');
      return;
    }
  
    // Calculate BMI
    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters);
  
    // Display result
    const resultText = `Your BMI is ${bmi.toFixed(2)}.`;
  
    // Determine BMI category
    let category = '';
    let categoryClass = '';
  
    if (bmi < 18.6) {
      category = 'Underweight';
      categoryClass = 'underweight';  // CSS class for underweight
    } else if (bmi <= 24.9) {
      category = 'Normal weight';
      categoryClass = 'normal';  // CSS class for normal weight
    } else {
      category = 'Overweight';
      categoryClass = 'overweight';  // CSS class for overweight
    }
  
    // Update the results with the category and corresponding style
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `${resultText} Category: ${category}`;
    resultsDiv.className = ''; // Reset any previous classes
    resultsDiv.classList.add(categoryClass); // Add the appropriate category class
    
    // Show the results section
    resultsDiv.style.display = 'block';
  });
  