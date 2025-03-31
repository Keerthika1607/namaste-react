//We have configured babel into our application

module.exports = {
   presets: [
       ['@babel/preset-env', { targets: { node: 'current' } }],
       ['@babel/preset-react', { runtime: "automatic" }],
   ],
};