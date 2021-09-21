import React from 'react'

const Noticia = ({noticia}) => {

   // Extraer los datos de la noticia.
   const { urlToImage, url, title, description, source } = noticia;

   // Revisar si una imagen tiene contenido
   const image = (urlToImage) ? 
      <div className="card-image">
         <img src={urlToImage} alt={title} />
         <span className="card-title">{source.name}</span>
      </div>
   : null;

   return (
      <div className="col s12 m6 l4">
         <div className="card">

            {image}

            <div className="card-content">
               <h3
                  id="Notice-title"
               >{title}</h3>
               <p>{description}</p>
            </div>

            <div className="card-action">
               <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="waves-effect waves-light btn"
               >Ver Noticia Completa</a>
            </div>
         </div>
      </div>
   )
}

export default Noticia
