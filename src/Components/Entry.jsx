import React from 'react'

function Entry(props) {
  return (
    <article className='main-article'>
      <div className='main-img-container'>
        <img className='main-img' src="src/assets/swiss.jpg" alt="icon" />
      </div>

      <div className=' info-contianer'>
      <img className='marker' src="src/assets/location.png" alt="icon" />
      <span className='country'>Europe</span>
      <a href="https://www.bing.com/maps?&ty=30&q=Swiss%20Alps%2C%20Switzerland&vdpid=7441238260782727169&mb=46.563854~8.550324~46.554485~8.572469&cardbg=%23F98745&dt=1747243800000&tt=Swiss%20Alps%2C%20Switzerland&tsts0=%2526ty%253D30%2526q%253DSwiss%252520Alps%25252C%252520Switzerland%2526vdpid%253D7441238260782727169%2526mb%253D46.563854~8.550324~46.554485~8.572469%2526cardbg%253D%252523F98745%2526dt%253D1747243800000&tstt0=Swiss%20Alps%2C%20Switzerland&cp=46.55917~8.556075&lvl=16&pi=0&ftst=0&ftics=False&v=2&sV=2&form=S00027">View on Google maps</a>
      <h2 className='title'>Swiss Alps</h2>
      <p className="trip-dates">10 Jun, 2025 - 15 Jun, 2026</p>
      <p className="trip-entry">Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy-tale destination. Visit in the winter for world-class skiing (and après-ski fondue and drinks) in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn. Opt for warmer months to hike through the verdant valleys of Swiss National Park or attend lively festivals in the foothill town of Montreux. Regardless of the time of year, no trip would be complete without a visit to the Jungfrau Region, where you can saunter through idyllic mountain villages like Grindelwald and Mürren or take the Jungfrau Railway to Europe's highest railway station.</p>
      </div>
    </article>
  )
}

export default Entry