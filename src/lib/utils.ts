export const formatPrice = (price: number | null) => {
  if (!price) return "R$ 0,00";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export const formatKilometers = (kilometers: number | null) => {
  if (!kilometers) return "0 km";

  return new Intl.NumberFormat("pt-BR").format(kilometers) + " km";
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "short", day: "numeric" } as Intl.DateTimeFormatOptions;
  
  return date.toLocaleDateString("pt-BR", options);
};