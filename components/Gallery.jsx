'use client';

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { Modal } from 'react-bootstrap';

const images = [
    '/images/gallery/DSC_0589_fixed.jpg',
    '/images/gallery/DSC_0594_fixed.jpg',
    '/images/gallery/DSC_0597_fixed.jpg',
    '/images/gallery/DSC_0677_fixed.jpg',
    '/images/gallery/DSC_0602_fixed.jpg',
    '/images/gallery/DSC_0605_fixed.jpg',
    '/images/gallery/DSC_0607_fixed.jpg',
    '/images/gallery/DSC_0633_fixed.jpg',
    '/images/gallery/DSC_0643_fixed.jpg',
    '/images/gallery/DSC_0601_fixed.jpg',
    '/images/gallery/DSC_0477_fixed.jpg',
];

const Gallery = () => {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleShow = (img) => {
        setSelectedImage(img);
        setShow(true);
    };

    const handleClose = () => setShow(false);
    
    return (
        <>
            <section className="section gallery" id='gallery'>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="section-title text-center">
                            <h2>Ο χώρος του ιατρείου</h2>
                            <div className="divider mx-auto my-4"></div>
                        </div>
                    </div>
                    <div className="row">
                        {images.map((src, index) => (
                            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={300}
                                    height={200}
                                    className="img-fluid rounded shadow-sm cursor-pointer"
                                    onClick={() => handleShow(src)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Body className="p-0">
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt="Selected"
                                layout="responsive"
                                width={800}
                                height={600}
                                className="w-100"
                            />
                        )}
                    </Modal.Body>
                </Modal>
            </section>
        </>
)
}

export default Gallery