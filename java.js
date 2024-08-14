
const progressBar = document.getElementById('progress-bar');
const message = document.getElementById('message');


function simulateDownload() {
    let progress = 0;

    
    const interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';

       
        if (progress >= 100) {
            clearInterval(interval);
            message.textContent = "Descarga completada.";
        }
    }, 100); 
}


simulateDownload();


