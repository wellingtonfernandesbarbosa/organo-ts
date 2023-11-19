import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";
import { IColaborador } from "../compartilhado/IColaborador";

interface ColaboradorProps {
  colaborador: IColaborador;
  cor: string;
  aoDeletar: (valor: string| undefined) => void;
  aoFavoritar: (valor: string | undefined) => void;
}

const Colaborador = ({ colaborador, cor, aoDeletar, aoFavoritar }: ColaboradorProps) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="deletar"
        size={25}
        onClick={(event: React.MouseEvent<SVGElement, MouseEvent>) =>
          aoDeletar(colaborador.id)
        }
      />
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={colaborador.imagem} alt={colaborador.nome}></img>
      </div>
      <div className="rodapeColaborador">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart color="#ff0000" {...propsFavorito} />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
