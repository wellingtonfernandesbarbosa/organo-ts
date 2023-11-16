import "./CampoTexto.css";

interface CampoTextoProps {
  type : string
  label : string
  placeholder : string
  valor : string
  aoAlterado : (valor: string) => void
  obrigatorio: boolean
}

const CampoTexto = ({
  type = 'text',
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
} : CampoTextoProps) => {
  const placeholdModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholdModificada}
      />
    </div>
  );
};

export default CampoTexto;
