module.exports = {
  apps : [{
    name      : 'api',
    script    : 'index.js',
    exec_mode: 'cluster',
    instances: '0',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
