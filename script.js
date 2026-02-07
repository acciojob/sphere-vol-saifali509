function volume_sphere() {
    //Write your code here
	event.preventDefault();

    // Get the radius value from the input and convert it to a number
    const radius = parseFloat(document.getElementById('radius').value);

    // Validate input: must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere: V = 4/3 * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume rounded to 4 decimal places
    document.getElementById('volume').value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
