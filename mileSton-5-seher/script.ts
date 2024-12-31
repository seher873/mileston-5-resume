// Get references to input fields
const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const profileInput = document.getElementById('profileInput') as HTMLTextAreaElement;
const phoneInput = document.getElementById('phoneInput') as HTMLInputElement;
const emailInput = document.getElementById('emailInput') as HTMLInputElement;
const addressInput = document.getElementById('addressInput') as HTMLInputElement;
const educationInput = document.getElementById('educationInput') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experienceInput') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skillsInput') as HTMLInputElement;

// Get references to the resume display section
const nameDisplay = document.getElementById('name') as HTMLHeadingElement;
const profileDesc = document.getElementById('profileDesc') as HTMLParagraphElement;
const phoneDisplay = document.getElementById('phone') as HTMLLIElement;
const emailDisplay = document.getElementById('email') as HTMLLIElement;
const addressDisplay = document.getElementById('address') as HTMLLIElement;
const educationDisplay = document.getElementById('education') as HTMLParagraphElement;
const experienceDisplay = document.getElementById('experience') as HTMLParagraphElement;
const skillsList = document.getElementById('skillsList') as HTMLUListElement;

// Get buttons
const generateBtn = document.getElementById('generateBtn') as HTMLButtonElement;
const downloadBtn = document.getElementById('downloadBtn') as HTMLButtonElement;

// Function to generate resume content
function generateResume() {
  // Get input values
  const name = nameInput.value.trim();
  const profile = profileInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const address = addressInput.value.trim();
  const education = educationInput.value.trim();
  const experience = experienceInput.value.trim();
  const skills = skillsInput.value.split(',').map(skill => skill.trim());

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
  skills.forEach(skill => {
    const li = document.createElement('li');
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
