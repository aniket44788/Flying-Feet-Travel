import React from 'react'
import "./destination.css"
import meclo from "../../Navbar/Destination/des-img/meclo.jpg"
function Destination() {
  const himachal = [{
    image: meclo,
    title: "Things to do in Mcleodganj & Dharamsala",
    paragraph: "2 Days / 1 Nights",

  },
  {
    image: meclo,
    title: "Things to do in Mcleodganj & Dharamsala",
    paragraph: "2 Days / 1 Nights",
  }
  ]
  return (
    <>

      <div className="card-container">
        {himachal.map((items, index) => (
          <div className="card" key={index}>
            <img src={items.image} alt={items.title} />
            <h4>{items.title}</h4>
            <p>{items.paragraph}</p>
            <button>Read more</button>
          </div>
        ))}
      </div>
    </>

  )
}

export default Destination