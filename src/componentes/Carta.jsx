export const Carta = ({
    titulo, portada
}) => (
    <article>
        <div>
            <img src={portada} alt={titulo} />
        </div>
        <h3>{titulo}</h3>
    </article>
)