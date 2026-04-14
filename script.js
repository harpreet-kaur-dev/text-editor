document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const generateReportBtn = document.getElementById('generateReportBtn');
    const wordCountElement = document.getElementById('wordCount');
    const charCountElement = document.getElementById('charCount');
    
   input.addEventListener('keyup', () => {
        const textValue = input.value.trim();
        const words = textValue.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const charCount = textValue.length;
        
        wordCountElement.innerText = `Words: ${wordCount}`;
        charCountElement.innerText = `Characters: ${charCount}`;
    });

    generateReportBtn.addEventListener('click', () => {
        generateReport(input.value.trim());
    });
});

function generateReport(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    
    const reportDiv = document.getElementById('report');
    reportDiv.innerHTML = `
        <h3>Text Report</h3>
        <p><strong>Word Count:</strong> ${wordCount}</p>
        <p><strong>Character Count:</strong> ${charCount}</p>
        <p><strong>Text Preview:</strong></p>
        <p>${text}</p>
    `;
    reportDiv.style.display = 'block';
}
