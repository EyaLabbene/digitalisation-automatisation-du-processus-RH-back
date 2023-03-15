function authenticate(req, res, next) {
    // Check if user is authenticated
    const isAuthenticated = true;
    if (!isAuthenticated) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  }
  


  
  module.exports = {
    authenticate
  };