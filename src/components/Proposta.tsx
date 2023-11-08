import { PropostaType } from "../types/PropostaType";

type PropostaProps = {
  proposta: PropostaType;
};

export default function Proposta( { proposta }: PropostaProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Propostas</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Estas são as propostas feitas para este veiculo.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article key={proposta.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{proposta.texto}</p>
              </div>
              <div className="relative mx-auto w-full mt-8 flex items-center gap-x-4">
                <img src={proposta.clienteId.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm w-full leading-6">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-900">
                      <a>
                        <span className="absolute inset-0" />
                        {proposta.clienteId.name}
                      </a>
                    </p>
                    <time dateTime={proposta.datetime} className="text-gray-500">
                      {proposta.datetime}
                    </time>
                  </div>
                  <p className="text-gray-600">{proposta.lance}</p>
                </div>
              </div>
            </article>
        </div>
      </div>
    </div>
  )
}