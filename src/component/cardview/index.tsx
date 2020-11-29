import React from "react"
import { Button, Card } from "react-bootstrap"
import { CardProps } from "./types"

const CardView: React.FC<CardProps> = ({
    id,
    name,
    description,
    imageSrc,
    price
}) => {

    return (
        <Card id={id + "-card"} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" >Add +{price}€</Button>
            </Card.Body>
        </Card>
    )
}


export default CardView
