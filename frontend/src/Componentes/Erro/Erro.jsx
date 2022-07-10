
import React from 'react';
import imgErro from '../../Assets/imgErro.png';
import {Image, Container, Row, Col} from 'react-bootstrap';
import './Erro.css';


function Erro(){
    return(
        <div >
            
            <div>
            <Container>
                <Row className="conteudo">
                    <Col sm={4}><Image className="imagem" src={imgErro} /></Col>
                    <Col sm={8} className="texto">  
                        <h1>404</h1>
                        <h2>Página em desenvolvimento, <br /> voltar a <button>home</button></h2>
                        <h3>Agradecemos a compreensão e a preferência</h3>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )     
};


export default Erro