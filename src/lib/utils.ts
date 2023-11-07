export const formatPrice = (price: number | null) => {
  if (!price) return "R$ 0,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price/100);
}

export const formatKilometers = (kilometers: number | null) => {
  if (!kilometers) return "0 km";

  return new Intl.NumberFormat("pt-BR").format(kilometers) + " km";
}
