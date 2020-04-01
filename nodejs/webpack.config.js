module.exports = {
    entry: ['./src/server.js'], // Define o arquivo principal
    mode: 'production',
    output: {
        path: __dirname + '/public', // Para qual deve enviar o arquivo convertido
        filename: 'bundle.js', // Arquivo para o diretorio
    },
    devServer: {
        contentBase: __dirname + '/public',
        port: 9000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // Exclui a pasta de executar
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
}
