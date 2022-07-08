import "./style.css";
import Envelope from "../../Assets/Envelope.svg";
import Mobile from "../../Assets/Mobile.svg";
import Perfil from "../../Assets/perfil.svg"

function Pontuarios(){
    return(
        <div className="container">
            <h1>Prontuários</h1>
            <section className="prontuario">
                <div className="teste">
                    <div className="sobre">
                    <h2>Sobre</h2>
                    <input placeholder="Nome"></input>
                    <input placeholder="Data de Nascimento"></input>
                    <input placeholder="CPF"></input>
                     </div>
                     <div>
                        <h2>Teste</h2>
                        <div className="contato">
                        < img  className= "icones email" src= {Mobile} />
                        <input placeholder="Celular"></input>
                        < img className= "icones email" src= {Envelope} />
                        <input placeholder="Email"></input>
                        </div>
                     </div>
                </div>
            </section>
            <div className="gambia">
                <p>Observações:</p>
                <textarea id="story" name="story">
            
                </textarea>
            </div>
            <hr/>
       </div>
    );
}

export default Pontuarios ;