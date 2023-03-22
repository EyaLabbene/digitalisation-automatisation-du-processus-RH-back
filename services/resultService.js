const Result = require("../models/ResultModel");

async function CreateResult(resultData) {
  try {
    const result = new Result(resultData);
    const savedResult = await result.save();
    return savedResult;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating result: " + error.message);
  }
}
async function FindAllResults() {
  try {
    const results = await Result.find();
    return results;
  } catch (error) {
    console.log(error);
    throw new Error("Error finding all results: " + error.message);
  }
}
async function FindSingleResult(resultId, resultData) {
  try {
    const result = await Result.findById(resultId, resultData, {
      new: true,
    });
    if (!result) {
      throw new Error("result not found");
    }
    return result;
  } catch (error) {
    throw new Error("Error finding  result: " + error.message);
  }
}
/*const Updateresult =async(req,res)=>{

    res.send('update')
}*/
/*const Deleteresult =async(req,res)=>{
    res.send('delete')

}*/

async function UpdateResult(resultId, resultData) {
  try {
    const result = await Result.findByIdAndUpdate(resultId, resultData, {
      new: true,
    });
    if (!result) {
      throw new Error("result not found");
    }
    return result;
  } catch (error) {
    throw new Error("Error updating result: " + error.message);
  }
}
async function DeleteResult(resultId) {
  try {
    const result = await Result.findByIdAndDelete(resultId);
    if (!result) {
      throw new Error("result not found");
    }
    return result;
  } catch (error) {
    throw new Error("Error deleting result: " + error.message);
  }
}
module.exports = {
  CreateResult,
  FindAllResults,
  FindSingleResult,
  UpdateResult,
  DeleteResult,
};
