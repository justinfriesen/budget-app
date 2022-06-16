export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency:"cad",
    style: "currency",
    minimumFractionDigits:0,
}) //if you pass undefined, passes current user local