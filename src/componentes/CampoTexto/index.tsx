 import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado : (valor: string) => void
  typeColor ?: string
  label : string
  placeholder : string
  valor : string
  obrigatorio?: boolean
}

const CampoTexto = ({
  typeColor = 'text',
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
    <div className={`campo campo-${typeColor}`}>
      <label>{label}</label>
      <input
        type={typeColor}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholdModificada}
      />
    </div>
  );
};

export default CampoTexto;
