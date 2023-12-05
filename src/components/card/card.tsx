import './card.css'

interface CardProps {
    price: number,
    title: string,
    subtitle: string,
    image: string
}
export function Card({ price, image, title, subtitle } : CardProps){
    return(
        <div className="card">
            <img src={image}/> 
            <h2>{title}</h2> 
            <p>{subtitle}</p>
            <p><b>Valor: R${price}</b></p>
        </div>
    )
}