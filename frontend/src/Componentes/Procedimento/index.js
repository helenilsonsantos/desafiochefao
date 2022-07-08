import "./style.css";

function Procedimentos(){
    return(
        <div className="procedimentos">
        <div className="nameData">
            <p>Ryan Augusto Mendes</p>
            <p>19/06/2022</p>
        </div>
        <div className="dentistaHora">
            <p>Dentista: Beatriz Neves</p>
            <p>11:30</p>
        </div>
        <div className="descricao">
            <p>Descrição:</p>
            <textarea id="story" name="story">

            </textarea>
        </div>
        </div>
    );
}

export default Procedimentos;