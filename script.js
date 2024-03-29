const photoUpload = document.getElementById('photo-upload');
const photoGrid = document.getElementById('photo-grid');

photoUpload.addEventListener('change', function(){
    const files = this.files;
    for (let i = 0; i < files.length; i++){
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(event){
            const imageUrl = event.target.result;
            const listItem = document.createElement('li');
            listItem.classList.add('photo-item');
            const image = document.createElement('img');
            image.src = imageUrl;
            listItem.appendChild(image);
            photoGrid.appendChild(listItem);
        }
        reader.readAsDataURL(file);

    }
});