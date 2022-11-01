module.exports = {
  ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_msg', 'Please log in to view the resource');
    res.redirect('/login');
  },
  forwardAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/dashboard');
  },

  ensureIsAdmin(req, res, next) {
    if (req.user.isAdmin) {
      return next();
    }
    req.flash('error_msg', 'You are not authorized to view the resource');
    res.redirect('/');
  },
  forwardIsAdmin(req, res, next) {
    if (!req.user.isAdmin) {
      return next();
    }
    res.redirect('/');
  },
  ensureIsFaculty(req, res, next) {
    if (req.user.isFaculty) {
      return next();
    }
    req.flash('error_msg', 'You are not authorized to view the resource');
    res.redirect('/');
  },
  forwardIsFaculty(req, res, next) {
    if (!req.user.isFaculty) {
      return next();
    }
    res.redirect('/');
  },
  ensureBothAdminAndFaculty(req, res, next) {
    if (req.user.isFaculty || req.user.isAdmin) {
      return next();
    }
    req.flash('error_msg', 'You are not authorized to view the resource');
    res.redirect('/');
  },
  forwardBothAdminAndFaculty(req, res, next) {
    if (!req.user.isFaculty || !req.user.isAdmin) {
      return next();
    }
    res.redirect('/');
  },
};
