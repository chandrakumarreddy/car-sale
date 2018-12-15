import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
	const IMAGES = images.map(image => (
		<ImageCard key={image.id} image={image} />
	));

	return <div className="image-list">{IMAGES}</div>;
};

export default ImageList;
