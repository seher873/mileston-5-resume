// Get references to input fields
var nameInput = document.getElementById('nameInput');
var profileInput = document.getElementById('profileInput');
var phoneInput = document.getElementById('phoneInput');
var emailInput = document.getElementById('emailInput');
var addressInput = document.getElementById('addressInput');
var educationInput = document.getElementById('educationInput');
var experienceInput = document.getElementById('experienceInput');
var skillsInput = document.getElementById('skillsInput');
// Get references to the resume display section
var nameDisplay = document.getElementById('name');
var profileDesc = document.getElementById('profileDesc');
var phoneDisplay = document.getElementById('phone');
var emailDisplay = document.getElementById('email');
var addressDisplay = document.getElementById('address');
var educationDisplay = document.getElementById('education');
var experienceDisplay = document.getElementById('experience');
var skillsList = document.getElementById('skillsList');
// Get buttons
var generateBtn = document.getElementById('generateBtn');
var downloadBtn = document.getElementById('downloadBtn');
// Function to generate resume content
function generateResume() {
    // Get input values
    var name = nameInput.value.trim();
    var profile = profileInput.value.trim();
    var phone = phoneInput.value.trim();
    var email = emailInput.value.trim();
    var address = addressInput.value.trim();
    var education = educationInput.value.trim();
    var experience = experienceInput.value.trim();
    var skills = skillsInput.value.split(',').map(function (skill) { return skill.trim(); });
    // Validate inputs
    if (!name || !profile || !phone || !email || !address || !education || !experience || skills.length === 0) {
        alert('Please fill in all fields to generate your resume.');
        return;
    }
    // Populate resume fields
    nameDisplay.textContent = name;
    profileDesc.textContent = profile;
    phoneDisplay.textContent = phone;
    emailDisplay.textContent = email;
    addressDisplay.textContent = address;
    educationDisplay.textContent = education;
    experienceDisplay.textContent = experience;
    // Populate skills list
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    alert('Resume generated successfully!');
}
// Function to download resume as PDF
function downloadResume() {
    window.print(); // Opens print dialog (to save as PDF)
}
// Add event listeners to buttons
generateBtn.addEventListener('click', generateResume);
downloadBtn.addEventListener('click', downloadResume);
