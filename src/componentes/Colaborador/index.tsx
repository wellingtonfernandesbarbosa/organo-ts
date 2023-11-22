import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";
import { IColaborador } from "../compartilhado/IColaborador";

interface ColaboradorProps {
  aoFavoritar: (valor: string | undefined) => void;
  aoDeletar: (valor: string | undefined) => void;
  colaborador: IColaborador;
  cor: string;
  data: string;
}

const Colaborador = ({
  aoFavoritar,
  aoDeletar,
  colaborador,
  cor,
  data
}: ColaboradorProps) => {
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
        onClick={() => {
          aoDeletar(colaborador.id);
        }}
      />
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={colaborador.imagem} alt={colaborador.nome}></img>
      </div>
      <div className="rodapeColaborador">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <h5>{new Date(data).toLocaleDateString('pt-br')}</h5>
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
