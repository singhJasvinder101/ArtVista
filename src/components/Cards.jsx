import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ imageData }) => {
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={imageData.primaryImage} style={{ height: '12rem' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{imageData.title.slice(0, 45)}...</h5>
                    <h6>{imageData.department}</h6>
                    {imageData.constituents ? (
                        // imageData.constituents.map(artist => (
                        //     <h6>Artist: {artist.name}</h6>
                        // ))
                        <h6>Artist: {imageData.constituents[0].name}</h6>
                    ) : (
                        <h6>{imageData.repository}</h6>
                    )}
                    {/* <h5> Artist: {imageData.constituents ? imageData.constituents.name : imageData.artistAlphaSort}</h5> */}
                    <h6 className='d-inline mr-3 my-2'>{imageData.objectDate}</h6>
                    <Link to={imageData.objectURL} className="btn btn-primary my-2">
                        More Info <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" />
                            <path fillRule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cards;
