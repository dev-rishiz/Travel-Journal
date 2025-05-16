
function Entry(props) {

  return (
    <article className='main-article'>

      <div className='main-img-container'>
        <img className='main-img' src={props.imageUrl} alt="icon" />
      </div>

      <div className='info-container'>
        <img className='marker' src="src/assets/location.png" alt="icon" />
        <span className='country'>{props.country}</span>
        <a href={props.googleMapsUrl}>View on Google maps</a>
        <h2 className='title'>{props.title}</h2>
        <p className='trip-dates'>{props.startDate + "to " + props.endDate}</p>
        <p className='trip-entry'>{props.description}</p>
      </div>
    </article>
  )
}

export default Entry