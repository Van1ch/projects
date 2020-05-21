const images = (event) => {
    const { target } = event;
    const commandPhoto = target.closest('.command__photo');

    if(commandPhoto) {
        const source = commandPhoto.getAttribute('src');
        commandPhoto.src = commandPhoto.dataset.img;
        commandPhoto.dataset.img = source;
    }
};

export default images;