

# Serverless Webpack Starter

Hello world configuration for serverless framework projects with serverless-webpack, Babel loader, and airbnb eslint presets.

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

* [Serverless Framework](http://serverlessframework.com)
* [Webpack](https://serverless.com/) - Bundle
* [Serverless Webpack](https://www.npmjs.com/package/serverless-webpack) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/SteveCastle/) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/SteveCastle/serverless-webpack-starter/tags). 

## Authors

* **Stephen Castle** - *Initial work* - [SteveCastle](https://github.com/SteveCastle)

See also the list of [contributors](https://github.com/SteveCastle/serverless-webpack-starter/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
