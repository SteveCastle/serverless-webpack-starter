

# Serverless Webpack Starter

A HelloWorld boiler-plate for starting the bare minimum serverless-framework project with serverless-webpack, babel-loader, and airbnb eslint presets. For those used to working with es6 and strict linting in their javascript projects.

## Getting Started

1. Install serverless framework. `npm install -g serverless`
2. Clone repo `git clone https://github.com/SteveCastle/serverless-webpack-starter.git`
3. `cd serverless-webpack-starter`
3. Run `serverless invoke local -f helloWorld` to run function locally.

## Deploying to AWS

1. Install AWS command line tools. `npm install -g aws-cli`
2. Create a IAM user with admin role and create an Access Key.  
3. Configure AWS credentials with the access key and secret key from previous step. `aws configure`
4. Run `serverless deploy` from the project path.
5. Serverless Framework will create a cloud formation file and deploy resources to AWS.

## Built With

* [Serverless Framework](https://serverless.com/)
* [Webpack](https://webpack.js.org/)
* [Serverless Webpack](https://www.npmjs.com/package/serverless-webpack) - Use es6 imports and other features in node serverless functions. 
* [Airbnb ESLint Config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/SteveCastle/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/SteveCastle/serverless-webpack-starter/tags). 

## Authors

* **Stephen Castle** - *Initial work* - [SteveCastle](https://github.com/SteveCastle)

See also the list of [contributors](https://github.com/SteveCastle/serverless-webpack-starter/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
