module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'PORT=80 yarn run next start',
      node_args: '--max-old-space-size=1024',
      exec_mode: 'fork',
      instances: 1,
    },
  ],
};
