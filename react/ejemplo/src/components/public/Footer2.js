import React,{useState} from 'react'

export const Footer2 = () => {
  const [clicks,setClicks] = useState(0); //Array donde la primer posicion es la variable a modifciar su estado, y la segunda variable la encargada de contar las acciones
  const year = new Date().getFullYear(); // Trabajamos con variables antes de renderizar
  const companyName = "Egg programa;"

  const handleClick = () => {
    setClicks(clicks +1);

  }
  
  return (
    <div>

      <footer className="text-body-secondary py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
          <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.3/getting-started/introduction/">getting started guide</a>.</p>
          <p>Año {year}</p>
          <p>Empresa {companyName} Se hicieron una cantidad de clicks = {clicks}</p>
        </div>
        <span >
        <img  onClick={handleClick} className="imagen"  src="https://img1.freepng.es/20180522/qhu/kisspng-computer-icons-orion-s-star-quilt-50x50-5b03b0e9a1afe0.3016649715269685536623.jpg" />

        </span>
      </footer>
    </div>
  )
}
