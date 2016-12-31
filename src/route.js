/**
 * Created by timur on 12/28/16.
 */

export default (path, el) => {

  const dynamicRoutes = path.split(':')
  const locationRoutes = location.pathname.split(':')

  switch(dynamicRoutes.length) {

    case 1: {
      if(location.pathname === path) {
        return el
      }
      break
    }

    case 2: {
      if(dynamicRoutes[0] === locationRoutes[0]) {
        return el(locationRoutes[1])
      }
      break
    }
  }
}
