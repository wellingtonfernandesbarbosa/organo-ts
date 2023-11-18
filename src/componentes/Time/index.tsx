import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";
import { IColaborador } from "../compartilhado/IColaborador";

interface TimeProps {
  aoDeletar: (valor: string) => void
  mudarCor: (valor: string, id: string) => void
  aoFavoritar: (valor: string) => void
  time: {id: string, cor: string, nome: string }
  colaboradores: IColaborador[]
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
  const sectionStyles = { backgroundColor: hexToRgba(time.cor, "0.6") };
  const h3Styles = { color: time.cor };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={sectionStyles}>
        <input
          type="color"
          className="input-color"
          onChange={(evento: React.ChangeEvent<HTMLInputElement>) => mudarCor(evento.target.value, time.id)}
          value={time.cor}
        />
        <h3 style={h3Styles}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                colaborador={colaborador}
                cor={time.cor}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
