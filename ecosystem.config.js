module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'yarn start',
      node_args: '--max-old-space-size=1024',
      exec_mode: 'cluster',
      instances: 1,
    },
  ],
};
