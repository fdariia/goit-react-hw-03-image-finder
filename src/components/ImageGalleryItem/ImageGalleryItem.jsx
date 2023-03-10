import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, alt, onClick, largeImageURL }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryItemImage}
        src={url}
        alt={alt}
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
