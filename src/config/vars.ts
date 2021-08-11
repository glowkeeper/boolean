/** @class App */
class App {
  static readonly title = 'Boolean'
  static readonly appName = 'Boolean'
  static readonly catchLine = `${App.title} ${App.appName}`
  static readonly tagline = ''
  static readonly copyright = '© Copyright 2020 Steve Huckle'
  static readonly author = '[Steve Huckle](https://glowkeeper.github.io/)'
  static readonly email = 'steve dot huckle at gmail.com'
  static readonly version = '0.1.0'
}

/** @class Paths */
class Paths {
  static readonly home = 'Home'
}

/** @class GeneralError */
class GeneralError {
    static readonly required = 'Required'
}

/** @class Home */
class Home {
  static readonly heading = 'Home'

  static readonly info = `<h3>${App.catchLine}</h3>`
}


export {App,
  Paths,
  GeneralError,
  Home,
};
