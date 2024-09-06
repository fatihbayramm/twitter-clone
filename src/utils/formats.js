export const numberFormat = (value) => {
  let config = {};
  if (value > 1000) {
    config = {
      notation: "compact",
      maximumFractionDigits: 1,
    };
  }
  return Intl.NumberFormat("tr", config).format(value);
};
