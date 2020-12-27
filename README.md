# nextjs_first_nomard
nextjs_first_nomardcoder 

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

NextJS = node.js(express) 위에서 움직이는 프레임 워크, node.js에 백엔드를 구성하도록 하고 쉬우면서 기본에 충실하다.
다른 Node.js 프레임 워크에 없는 구조를 가지고 있다. Python의 django, java의 Spring과 같은 구조를 node.js에 가져온다.
노드js는 라우터와 컨트롤러등 다양한 api를 만들고 요소를 임의로 배치할 수 있으나 nextjs에서는 그렇게 할 수 없다.
이는 단점으로 보일 수 있으나 그 구조 덕분에 순서와 룰을 가지고 있고, 이를 따른다면 큰 규모의 백엔드를 쉽게 만들 수 있다.
이미 많은 다양한 기업(로체, 아디다스, 스윙, CC, 트릴론, 스칼등 )이 사용하고 있다.

nextjs는 기업에 큰 중점을 두고 있고, 그 이유는 이 프레임워크가 우조 좋은 아키텍처 구조를 가지고 있다.

설치해야 하는것 : nodejs, visual studio code,
insomnia(Rest api) - https://insomnia.rest/

설치방법 nest new >> 프로젝트 이름 >> 폴더로 이동(cd project) >> npm run start:dev (시작) = 노드몬처럼 실시간 반영됨

nextjs는 main.ts라는 파일을 가진다 (반드시 이 이름이어야 한다)
그리고 해당 main.ts는 기본 함수를 가진다. boothstrap이라는 이름의 함수이고 해당 이름은 아무거나 사용해도 된다.
해당 함수가 하는 일은 await NestFactory.create(AppModule)을 호출하고 해당 어플리 케이션은 3000번의 포트를 리스닝한다.

AppModule을 확인해보면 클래스 인걸 확인해 볼 수 있고 이러한 함수를 '데코레이터'라고 부른다.
NestJS는 데코레이터와 함께 한다. 그 이유는 데코레이터는 클래스에 함수 기능을 추가할 수 있기 때문이다.
그냥 클래스 위에 함수가 있고 함수가 클래스를 위해서 움직인다고 생각하면 된다. 아이스크림 위에 초코칩을 뿌리는 거랑 같다고 보면 된다.
모듈 안을 보면 imports가 있고 controllers와 providers가 있다.

controllers 안에 보면 get이라는 데코레이터가 또 있고 string을 리턴하는 getHello라는 함수가 있다.
그리고 this.appService.getHello()를 리턴한다.

appService로 들어가면 또 다른 클래스가 있다. Injectable이라는 또 다른 데코레이터와 함께 있다. 해당 함수에는 getHello라는 함수를 가지고 해당 함수가 Hello World를 리턴합니다.
당연히 Hello World를 변경하면 바로 반영된다.

nextjs는 main.ts에서 모든걸 시작한다. 하나의 모듈에서 어플리케이션을 생성하고 AppModule은 루트모듈 같은 역할을 한다(제일 기본적인),
모듈은 어플리케이션의 일부분이고 한 가지 역할을 하는 앱이라고 이해하면 좋다. 예를 들어 인증을 담당하는 어플리케이션이 있다면 그게 users 모듈이 된다.
app.module에서 중요하게 알아야 하는건 controller와 provider이다.
controller는 기본적으로 url을 가져오고 함수를 실행한다. nodejs(express)의 라우터 같은 존재라고 생각하면 쉽다. url을 가져오고 함수를 실행시킨다.
controller 내부에는 Get 데코레이터가 있고 해당 데코레이터가 express의 get 라우터와 같은 역할을 한다. 데코레이터는 함수나 클래스와 붙어있어야 한다. 따라서 중간에 줄을 비우거나 하면 안된다.
Get을 포스트로 바꾸더라도 타입스크립트를 사용하고 있기 때문에 자동적으로 import가 된다.

NextJs는 콘트롤러를 비지니스 로직이랑 구분짓고 싶어 합니다. 컨트롤러는 그냥 url을 가져오고 함수를 실행합니다.
나머지 비지니스 로직은 서비스로 갑니다. 서비스는 일반적으로 실제 함수를 가지는 부분입니다.
app.module을 보면 모듈이 있고 루트 모듈같은 app.module이 있습니다. app.module에는 모든 모듈을 import 하여야합니다. 그 이유는 main.ts에서 AppModule을 NestJS가 어플리케이션을 만들기 위해 사용하기 때문이다.

다시 정리하면 컨트롤러는 URL을 가져오고 함수를 실행하며 이 함수가 있는 곳이 서비스다.
서비스는 비지니스 로직을 실행하는 역할이라고 할 수 있다.
Rest api를 만들것이기 때문에 컨트롤러와 서비스를 만들어야 한다. 그러면 컨트롤러와 서비스를 테스트 할 수 있다.
nest g co를 사용하여 컨트롤러를 만들 수 있다.
nest g s를 사용하여 서비스를 만들 수 있다
DTO(Data Transfer Object)를 사용하는 이유는 프로그래머로서 코드를 더 간결하게 만들어준다.
그리고 NestJS가 들어오는 쿼리에 대해 유효성을 검사할 수 있게 해준다.
npm i class-validator << 해당 패키지 설치(class 유효성 검사)
