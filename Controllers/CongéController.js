
const congéService = require("../services/congéService");

 async function addCongé (req, res, next) => {
  try {
    const congé = await congéService.CreateCongé(req.body);
    res.status(201).json(congé);
  } catch (error) {
    res.send('error') ;
  }
};

 async function getAllCongé (req, res, next) => {
  try {
    const congés = await congéService.FindAllCongés();
    res.json(congés);
  } catch (error) {
    res.send('error') ;
  }
};

 async function getSingleCongé(req, res, next) => {
  try {
    const congé = await congéService.FindSingleCongé(req.params.congéId);
    res.json(congé);
  } catch (error) {
    res.send('error') ;
  }
};

 async function updateCongé (req, res, next) => {
  try {
    const congé = await congéService.UpdateCongé(
      req.params.congéId,
      req.body
    );
    res.json(congé);
  } catch (error) {
    res.send('error') ;
  }
};

 async function deleteCongé (req, res, next) => {
  try {
    const congé = await congéService.DeleteCongé(req.params.congéId);
    res.json(congé);
  } catch (error) {
    res.send('error') ;
  }
};

