import { useEffect, useState } from "react"; 
import { useForm } from "react-hook-form";

const API_BASE_URL = "http://localhost:3004";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  clientId: number | null;
  nome: string;
  carroId: number | null;
  foto: string;
  
  date: string;
  
};

export function Modal({ isVisible, onClose, clientId, nome, carroId,  date,  foto }: Props) {
  const { register, handleSubmit } = useForm();

  const [modalVisible, setModalVisible] = useState(isVisible);

  const salvarProposta = async (data: any) => {
    try {
      const proposta = {
        clientId: clientId,
        nome: nome,
        carroId: carroId,
        foto: foto,
      
        date: date,
        
        ...data,
      };
      const response = await fetch(`${API_BASE_URL}/proposta`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          ...proposta, 
          lance: Number(proposta.lance), 
          carroId: Number(proposta.carroId), 
          clientId: Number(proposta.clientId), 
          date: new Date(proposta.date).toISOString(), 
          nome: proposta.nome, 
          foto: proposta.foto, 
          texto: proposta.texto 
        }),
      });
      if (response.ok) {
        alert("Proposta salva com sucesso!");
        onClose();
      } else {
        throw new Error("Erro ao salvar proposta");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setModalVisible(isVisible);
  }, [isVisible]);

  const closeModal = () => {
    setModalVisible(false);
    onClose();
  };

  if (!modalVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={closeModal}>X</button>
        <div className="bg-white p-2 rounded">
          <h1 className="text-2xl font-bold text-center text-primary-red">Faça sua proposta</h1>
          <div className="mt-2">
            <label htmlFor="lance" className="ano">
              <span className="block font-medium text-slate-700 text-lg">
                Preço desejado:
              </span>
              <input
                id="lance"
                type="number"
                className="mt-1 w-[100] px-3 py-2 max-lg bg-slate-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600 valid:border-green-500 valid:text-green-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "
                {...register("lance", { required: true })}
              />

          <div className="flex flex-col mt-4">
            <label
              htmlFor="sobre"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Qual sua proposta adicional para este veiculo:
            </label>
            <div className="mt-2">
              <textarea
                id="sobre"
                rows={3}
                className="bg-slate-100 rounded-md w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                defaultValue={""}
                {...register("texto", { required: true })}
              />
            </div>
          </div>



      
              <button
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-2"
                onClick={handleSubmit(salvarProposta)}
              >
                Enviar proposta
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
