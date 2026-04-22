let cardTitle = "Elzero", cardDescription = "Elzero web school", cardDate = "25/10";


const content = `
<div>
    <h3>${cardTitle}</h3>
    <p>${cardDescription}</p>
    <span>${cardDate}</span>
</div>
`;
 
// first way
// document.write(content);
// document.write(content);
// document.write(content);
// document.write(content);

// second and better way
document.write(content.repeat(4));