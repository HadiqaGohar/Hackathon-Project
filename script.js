// Event listener for generating resume
document.getElementById('generate-resume').addEventListener('click', () => {
    // Get the content from editable fields
    const name = document.getElementById('editableName').innerText;
    const email = document.getElementById('editableEmail').innerText;
    const phone = document.getElementById('editablePhone').innerText;
    const education = document.getElementById('education-content').innerText;
    const workExperience = document.getElementById('work-experience-content').innerText;
    const skills = document.getElementById('skills-content').innerText;

    // Display the generated resume
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayEmail').innerText = email;
    document.getElementById('displayEducation').innerText = education;
    document.getElementById('displayWorkExperience').innerText = workExperience;
    document.getElementById('displaySkills').innerText = skills;

    document.getElementById('resume').classList.remove('hidden');
});

// Event listener for downloading resume as PDF
document.getElementById('download-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get content for PDF
    const name = document.getElementById('editableName').innerText;
    const email = document.getElementById('editableEmail').innerText;
    const phone = document.getElementById('editablePhone').innerText;
    const education = document.getElementById('education-content').innerText;
    const workExperience = document.getElementById('work-experience-content').innerText;
    const skills = document.getElementById('skills-content').innerText;

    // Add content to PDF
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);
    doc.text(`Education: ${education}`, 10, 40);
    doc.text(`Work Experience: ${workExperience}`, 10, 50);
    doc.text(`Skills: ${skills}`, 10, 60);

    // Save the PDF
    doc.save('resume.pdf');
});
