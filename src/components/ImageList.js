import React from "react";

const ImageList = ({ images }) => {
	const IMAGES = images.map(({ urls, id, description }) => (
		<img src={urls.regular} key={id} alt={description} />
	));

	return <div>{IMAGES}</div>;
};

export default ImageList;
