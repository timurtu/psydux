/**
 * Created by timur on 12/21/16.
 */

import { el } from 'psydux'

export const row = (...elements) => el('div', () => elements, { class: 'row' })

export const col = (amount, display, ...elements) => el('div', () => elements, { class: `col-${display}-${amount}` })
