// Event listeners
document.getElementById('saveButton')?.addEventListener('click', (e) => {
    saveImage("assetsBucket","new.jpg",document.getElementById("image-tag-id")).catch(console.error);
});

document.getElementById('loadButton')?.addEventListener('click', () => {
    loadImage().catch(console.error);
});

//  These is a simple way to uderstand what type of data is passesd at time of function Call