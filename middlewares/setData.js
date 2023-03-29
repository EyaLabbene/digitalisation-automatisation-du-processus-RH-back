const setData = (req, res, next) => {
  req.data = {
    ...req.body,
    ...(req.image ? { image: req.image } : {}),
  };
  next();
};

module.exports = {
  setData,
};
