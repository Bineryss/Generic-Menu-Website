import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MenuItems } from "../../datamodel/CardData"
import CardView from "../cardview"


const MenuList: React.FC = () => {
    return (
        <Container fluid>
            <ItemMapper />
        </Container>
    )
}

const ItemMapper: React.FC = () => {
    const cardData = MenuItems
    return (
        <React.Fragment>
            {cardData.map(el => {
                return (
                    <Col style={{ marginTop: "1em", }}>
                        <div style={{transform: "translate(4%)"}}>
                            <CardView {...el} />
                        </div>
                    </Col>)
            })}
        </React.Fragment>

    )

}

export default MenuList