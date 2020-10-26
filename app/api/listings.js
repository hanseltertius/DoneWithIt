import client from './client';

const endpoint = "/listings";

const getListings = (a, b, c) => client.get(endpoint);

const postListing = (values, location, onUploadProgress) => {
    const data = new FormData();
    data.append('title', values.title);
    data.append('price', values.price);
    data.append('categoryId', values.category.value);
    data.append('description', values.description);

    for (let i = 0; i < values.images.length; i++) {
        const image = values.images[i];

        const imageNumber = i + 1;
        const imageName = `Image ${imageNumber}`;

        data.append('images', {
            name: imageName,
            type: 'image/jpeg',
            uri: image
        });
    }

    data.append('location', JSON.stringify(location));

    const config = {
        onUploadProgress
    }

    return client.post(endpoint, data, config);
}

export default {
    getListings,
    postListing
};