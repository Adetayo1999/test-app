export const formatCurrency = (amount: number) => {
    const formatter = new Intl.NumberFormat("en-US", {
        currency: "USD",
        style: "currency",
        minimumFractionDigits: 2,
    });

    return formatter.format(amount);
};
