import Header from './Components/Header'
import Entry from './Components/Entry'
import data from './Components/data'

function App() {
  const entries = data.map((item) => {
   return( 
    <Entry
    title = {item.title}
    country = {item.country}
    googleMapsUrl = {item.googleMapsUrl}
    startDate = {item.startDate}
    endDate = {item.endDate}
    description = {item.description}
    imageUrl = {item.imageUrl}
    />
   )
  })
  return (
    <>
      <Header />
      <main className='container'>
      {entries}
      </main>
    </>
  )
}

export default App
