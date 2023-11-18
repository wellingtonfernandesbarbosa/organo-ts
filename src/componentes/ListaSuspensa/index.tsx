import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  aoAlterado: (valor: string) => void;
  label: string;
  obrigatorio: boolean;
  valor: string;
  times: string;
  itens: string[];
}

const ListaSuspensa = ({aoAlterado, label, times, valor, itens, obrigatorio}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento: React.ChangeEvent<HTMLSelectElement>):void => aoAlterado(evento.target.value)}
        required={obrigatorio}
        value={valor}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
