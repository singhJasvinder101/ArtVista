import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../components/Cards';
import { useLocation } from 'react-router-dom';

const Home = () => {
    var searchQuery = 'Ceramics and Pottery';
    const limit = 50;
    const [images, setImages] = useState([]);

    let location = useLocation();
    
    useEffect(() => {
        searchQuery = decodeURIComponent(location.pathname.slice(1))
        console.log(searchQuery)
    }, [location])
    
    
    useEffect(() => {
        searchQuery = searchQuery ? decodeURIComponent(searchQuery) : "Ceramics and Pottery";
        const url1 = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchQuery}&limit=${limit}`;
        const fetchIds = async () => {
            try {
                const response1 = await axios.get(url1);
                const data1 = response1.data;
                var imageIDs = data1.objectIDs.slice(0, limit);
                // console.log('Image IDs:', imageIDs);

                const imagePromises = imageIDs.map(async (image) => {
                    const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${image}`;
                    try {
                        const response2 = await axios.get(url2);
                        const data2 = response2.data;
                        // console.log('Image data:', data2);
                        return data2;
                    } catch (error) {
                        console.error('Error fetching individual image data:', error);
                        return null; 
                    }
                });

                const imageData = await Promise.all(imagePromises);
                setImages(imageData.filter((data) => data !== null && data.primaryImage && (data.primaryImage !== null && data.primaryImage !== '')));
                // const imageURLs = imageData.map((data) => data.primaryImage);
                // setImages(imageURLs.filter((url) => url !== null && url !== ''));
            } catch (error) {
                console.error('Error fetching image data:', error);
            }
        };
        fetchIds();
    }, [searchQuery, location]);
    return (
        <div className='cards-container my-5 container-fluid d-flex jusify-content-between flex-wrap'>
            {/* {console.log(images)} */}
            {images.map((imageData, index) => (
                // <img style={{ height: '20rem', width: '20rem' }} key={index} src={imageURL} alt={`Image ${index}`} />
                <Cards key={index} imageData={imageData} />
            ))}
        </div>
    );
};

export default Home;
