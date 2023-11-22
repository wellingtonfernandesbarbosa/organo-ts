import "./CampoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  typeColor?: string;
  label: string;
  placeholder: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: "string" | "text" | "password" | "date" | "email" | "number" | "color";
}

const CampoTexto = ({
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
  tipo = 'text'
}: CampoTextoProps) => {
  const placeholdModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${tipo}`}>
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholdModificada}
      />
    </div>
  );
};

export default CampoTexto;
