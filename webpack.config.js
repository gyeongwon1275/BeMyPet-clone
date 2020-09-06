const path = require('path')

module.exports = {
  mode: 'development',

  // 엔트리 포인트
  entry: {
    app: './src/index.tsx',
  },

  // 빌드 결과물을 dist/main.js에 위치
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
  },

  // 디버깅을 위해 빌드 결과물에 소스맵 추가
  devtool: 'source-map',

  resolve: {
    // 파일 확장자 처리
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      // .ts나 .tsx 확장자를 ts-loader가 트랜스파일
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },

  devServer: {
    //   index.html 이 최상위 폴더에 있으므로
    contentBase: './',
    // 정적파일을 제공하는 곳이 dist 폴더이므로
    publicPath: '/dist',
    // url 에 주소를 직접입력해도 렌더링 되도록 설정
    // hitory api 를 사용할 수 있도록 설정함
    historyApiFallback: true,
  },
}
