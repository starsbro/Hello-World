
function Card({
    className, onReadMore,
    title, pic,
    alt, text, linkText,
  }) { 
    const handleButtonClick = () => {
        window.location.href = "/";
    }
    return (
      <div className={className}>
        <h3 className={`${className}__title`}>{title}</h3>
        <img className={`${className}__pic`}
        alt={alt}
        src={pic} 
        style = {{width: '100px', height: '100px'}}
        />
        <p className={`${className}__text`}>{text}</p>

        <button className={`${className}__link`}
          onClick={handleButtonClick}
          aria-label={`Read More about ${title}`}
        >Read More
        </button>
      </div>
  ) }

  export default Card;