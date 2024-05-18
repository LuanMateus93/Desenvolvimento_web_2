const tenantModel = require('../models/tenantModel');

const initializeDatabase = (callback) => {
  tenantModel.initializeDatabase(callback);
};

const createTenant = (name, callback) => {
  tenantModel.createTenant(name, callback);
};

const getAllTenants = (callback) => {
  tenantModel.getAllTenants(callback);
};

const getTenantById = (id, callback) => {
  tenantModel.getTenantById(id, callback);
};

const updateTenant = (id, name, callback) => {
  tenantModel.updateTenant(id, name, callback);
};

const deleteTenant = (id, callback) => {
  tenantModel.deleteTenant(id, callback);
};

module.exports = {
  initializeDatabase,
  createTenant,
  getAllTenants,
  getTenantById,
  updateTenant,
  deleteTenant
};
