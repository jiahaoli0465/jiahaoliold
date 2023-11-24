document.addEventListener('DOMContentLoaded', function () {

    
    tagScroll();
    allowDownloadResume();
    


});




function tagScroll() {
    document.querySelector('#projectTag').addEventListener('click', function(e) {
        e.preventDefault(); // Prevents the default anchor behavior
        document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.querySelector('#skillTag').addEventListener('click', function(e) {
        e.preventDefault(); // Prevents the default anchor behavior
        document.getElementById('section3').scrollIntoView({ behavior: 'smooth' });
    });
}


function allowDownloadResume() {
    const resumepic = document.querySelector('#resumepic');
    resumepic.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'assets/JiahaoLiCSResume.pdf'; // Path to your resume file
        link.download = 'Jiahao_Li_Resume.pdf'; // Suggested file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

}