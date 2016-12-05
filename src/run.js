/**
 * Created by timur on 12/4/16.
 */

import registry from './registry'
const foo = console

const run = (...els) => {

  foo.log(registry.entries())
  foo.log('els', els)
}


export default run
