import healthService from '../services/health.service.js';

const getHealth = (req, res) => {
    const healthStatus = healthService.getHealthStatus();
    res.status(200).json(healthStatus);
};

export default {getHealth};