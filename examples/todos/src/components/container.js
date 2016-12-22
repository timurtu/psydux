/**
 * Created by timur on 12/21/16.
 */

import { el } from 'psydux'

export default (...elements) => el('div', () => elements, { class: 'container-fluid' })
