import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useEffect, useState } from "react";
import "./Formulario.css";
import { IColaborador } from "../compartilhado/IColaborador";
import { ITime } from "../compartilhado/ITime";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  cadastrarTime: (valor: ITime) => void;
  times: string[];
}

const Formulario = ({
  aoColaboradorCadastrado,
  cadastrarTime,
  times,
}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
  
    return () => {
      console.log(data)
    }
  }, [data])

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const novoTime: ITime = {
    nome: nomeTime,
    cor: corTime,
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          label="Data de entrada no time"
          placeholder=""
          valor={data}
          aoAlterado={(valor) => setData(valor)}
          tipo="date"
        />
        <ListaSuspensa
          obrigatorio={true}
          itens={times}
          label="Time"
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime(novoTime);
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          obrigatorio
          tipo="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
