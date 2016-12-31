/**
 * Created by timur on 12/28/16.
 */

export default (path, el) => {

  const dynamicRoutes = path.split(':')

  switch(dynamicRoutes.length) {

    case 1: {
      if(location.pathname === path) {
        return el
      }
      break
    }

    case 2: {
      if(dynamicRoutes[0] === location.pathname.split(':')[0]) {
        return el(dynamicRoutes[1])
      }
      break
    }
  }
}
