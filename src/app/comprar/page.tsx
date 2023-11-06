export default async function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto items-center">
      <div className="flex flex-col items-center my-10">
        <h1 className=" text-2xl font-bold">Servidor de Discord - Senac</h1>
      </div>
      <iframe src="https://discord.com/widget?id=677964704873840682&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </div>
  )
}
