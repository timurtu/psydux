/**
 * Created by timur on 12/21/16.
 */

import { el } from 'psydux'

export default ({ type, text }) => el('button', () => text, { class: `btn btn-${type} btn-block` })
