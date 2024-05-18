const tenantService = require('../services/tenantService');

exports.createTenant = (req, res) => {
  const { name } = req.body;
  tenantService.createTenant(name, (err, id) => {
    if (err) {
      res.status(500).json({ mensagem: err.message });
    } else {
      res.status(201).json({ mensagem: `Tenant ${name} criado com sucesso`, id });
    }
  });
};

exports.getAllTenants = (req, res) => {
  tenantService.getAllTenants((err, tenants) => {
    if (err) {
      res.status(500).json({ mensagem: err.message });
    } else {
      res.status(200).json(tenants);
    }
  });
};

exports.getTenantById = (req, res) => {
  const { id } = req.params;
  tenantService.getTenantById(id, (err, tenant) => {
    if (err) {
      res.status(500).json({ mensagem: err.message });
    } else if (tenant) {
      res.status(200).json(tenant);
    } else {
      res.status(404).json({ mensagem: 'Tenant não encontrado' });
    }
  });
};

exports.updateTenant = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  tenantService.updateTenant(id, name, (err, changes) => {
    if (err) {
      res.status(500).json({ mensagem: err.message });
    } else if (changes) {
      res.status(200).json({ mensagem: `Tenant ${id} atualizado com sucesso` });
    } else {
      res.status(404).json({ mensagem: 'Tenant não encontrado' });
    }
  });
};

exports.deleteTenant = (req, res) => {
  const { id } = req.params;
  tenantService.deleteTenant(id, (err, changes) => {
    if (err) {
      res.status(500).json({ mensagem: err.message });
    } else if (changes) {
      res.status(200).json({ mensagem: `Tenant ${id} deletado com sucesso` });
    } else {
      res.status(404).json({ mensagem: 'Tenant não encontrado' });
    }
  });
};
